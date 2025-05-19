'use client';

import Container from "@/components/Container";
import SvgIcon from "@/components/SvgIcon";
import { useAuth } from "@/hooks/auth";
import { ILoginError } from "@/lib/interfaces";
import { Alert, Button, TextInput } from "@mantine/core";
import { isEmail, matchesField, useForm } from "@mantine/form";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function ResetPasswordPage() {
  const [errors, setErrors] = useState<ILoginError>({});
  const [status, setStatus] = useState<string | null>(null);
  // url query params
  const searchParams = useSearchParams();

  const [shown, viewPassword] = useState(false);

  const { resetPassword } = useAuth({
    middleware: "guest",
  });

  // form data
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      password: (value) =>
        value.trim().length < 8 ? "Must be at least 8 characters" : null,
      password_confirmation: matchesField(
        "password",
        "Passwords are not the same"
      ),
    },
  });

  const handleResetPassword = (values: typeof form.values) => {
    resetPassword({
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
      setErrors,
      setStatus,
    });
  };

  const showErrors = () => {
    if (errors.email || errors.password || errors.password_confirmation) {
      return (
        <Alert variant="outline" color="red" title="Register error" className="mt-12">
          <ul className="text-mirage">
            {errors.email?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.password?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.password_confirmation?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Alert>
      );
    }
    return null;
  };

  // set email field by email url query
  useEffect(() => {
    form.setValues({email: searchParams.get("email") || ""});
  }, [searchParams.get("email")]);

  return (
    <Container className="mt-100 md:mt-150">
      <div className="max-w-400 mx-auto">
        {status && <p className="text-[14px] leading-18 text-mirage">{status}</p>}
        <form className="mt-14" onSubmit={form.onSubmit(handleResetPassword)}>
          <TextInput
            placeholder="Email"
            key={form.key("email")}
            {...form.getInputProps("email")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
            }}
          />
          <TextInput
            placeholder="Password"
            type={shown ? "text" : "password"}
            key={form.key("password")}
            {...form.getInputProps("password")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
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
            type={shown ? "text" : "password"}
            key={form.key("password_confirmation")}
            {...form.getInputProps("password_confirmation")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
              root: "mt-17",
            }}
          />
          {showErrors()}
          <Button
            type="submit"
            classNames={{
              root: "mt-27 min-h-48 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white w-full",
            }}
          >
            Reset Password
          </Button>
        </form>
      </div>
    </Container>
  );
}
