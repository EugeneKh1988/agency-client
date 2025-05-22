import SvgIcon from "@/components/SvgIcon";
import { useAuth } from "@/hooks/auth";
import { ILoginError } from "@/lib/interfaces";
import { Alert, Button, TextInput } from "@mantine/core";
import { hasLength, isEmail, matchesField, useForm } from "@mantine/form";
import { useEffect, useState } from "react";

export interface AccountDetailsProps {
  isAdminTab: boolean;
  className?: string;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({
  className,
  isAdminTab,
}) => {
  const classNameValue = className ? { className } : {};

  const [shown, viewPassword] = useState(false);
  const [errors, setErrors] = useState<ILoginError>({});
  const [status, setStatus] = useState<string | null>(null);

  const { isAdmin, updateUser, user } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  // form data
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      current_password: "",
      password: "",
      password_confirmation: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      name: hasLength({ min: 3 }, "Must be at least 3 characters"),
      current_password: (value, values) => {
        if(value?.trim().length == 0 && (values.password?.trim().length > 0 || values.password_confirmation?.trim().length > 0)) {
          return "Must not be empty";
        }
        return null;
      },
      password: (value, values) => {
        if(value?.trim().length == 0 && (values.current_password?.trim().length > 0 || values.password_confirmation?.trim().length > 0)) {
          return "Must not be empty";
        }
        if(value && value.trim().length > 0 && value.trim().length < 8) {
          return "Must be at least 8 characters";
        }
        return null;
      },
      password_confirmation: matchesField("password", "Passwords are not the same"),
    },
  });

  // set initial values
  useEffect(() => {
    console.log(user);
    if(user && user.name && !form.getValues().name) {
        form.setValues({name: user.name});
    }
    if(user && user.email && !form.getValues().email) {
        form.setValues({email: user.email});
    }
  }, [user]);

  const handleUpdateUser = (values: typeof form.values) => {
    // update process
    updateUser({
      name: values.name,
      email: values.email,
      current_password: values.current_password,
      password: values.password,
      password_confirmation: values.password_confirmation,
      setErrors,
      setStatus,
    });
  };

  const showErrors = () => {
    if (
      errors.email ||
      errors.name ||
      errors.current_password ||
      errors.password ||
      errors.password_confirmation
    ) {
      return (
        <Alert
          variant="outline"
          color="red"
          title="Update error"
          className="mt-12"
        >
          <ul className="text-mirage">
            {errors.email?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.password?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.name?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.password_confirmation?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.current_password?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Alert>
      );
    }
    return null;
  };

  const showStatus = () => {
    if (status) {
      return (
        <Alert
          variant="outline"
          color="green"
          title="Operation status"
          className="mt-12"
        >
            <p className="text-mirage text-[14px]">{status}</p>
        </Alert>
      );
    }
  };

  if (!isAdmin() && isAdminTab) {
    return null;
  }

  return (
    <div {...classNameValue}>
      <p className="text-[14px] leading-18 text-mirage font-medium">
        Personal information
      </p>
      <form className="mt-14" onSubmit={form.onSubmit(handleUpdateUser)}>
        <div className="flex flex-col md:flex-row gap-17 md:gap-24">
          <TextInput
            placeholder="Username"
            label="Username"
            key={form.key("name")}
            {...form.getInputProps("name")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-47 text-lynch",
              root: "grow",
            }}
          />
          <TextInput
            placeholder="Enter your email address"
            label="Email"
            key={form.key("email")}
            {...form.getInputProps("email")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-47 text-lynch",
              root: "grow",
            }}
          />
        </div>
        <div className="lg:max-w-385">
          <p className="mt-37 text-[14px] leading-18 text-mirage font-medium">
            Password change
          </p>
          <TextInput
            placeholder="Current password"
            label="Current password"
            type={shown ? "text" : "password"}
            key={form.key("current_password")}
            {...form.getInputProps("current_password")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-47 text-lynch",
              root: "mt-17",
            }}
            rightSection={
              shown ? (
                <div onClick={() => viewPassword(!shown)}>
                  <SvgIcon iconName="show" className="size-20" />
                </div>
              ) : (
                <div onClick={() => viewPassword(!shown)}>
                  <SvgIcon iconName="hide" className="size-20" />
                </div>
              )
            }
          />
          <TextInput
            placeholder="Password"
            label="Password"
            type={shown ? "text" : "password"}
            key={form.key("password")}
            {...form.getInputProps("password")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-47 text-lynch",
              root: "mt-17",
            }}
            rightSection={
              shown ? (
                <div onClick={() => viewPassword(!shown)}>
                  <SvgIcon iconName="show" className="size-20" />
                </div>
              ) : (
                <div onClick={() => viewPassword(!shown)}>
                  <SvgIcon iconName="hide" className="size-20" />
                </div>
              )
            }
          />
          <TextInput
            placeholder="Confirm Password"
            label="Confirm Password"
            type={shown ? "text" : "password"}
            key={form.key("password_confirmation")}
            {...form.getInputProps("password_confirmation")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-47 text-lynch",
              root: "mt-17",
            }}
          />
        </div>
        {showErrors()}
        {showStatus()}
        <Button
          type="submit"
          classNames={{
            root: "mt-27 min-h-48 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white w-full md:w-auto md:mx-auto md:px-52",
          }}
        >
          Save change
        </Button>
      </form>
    </div>
  );
};

export default AccountDetails;
