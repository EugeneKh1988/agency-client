'use client';

import Container from "@/components/Container";
import SvgIcon from "@/components/SvgIcon";
import { useAuth } from "@/hooks/auth";
import { ILoginError } from "@/lib/interfaces";
import { Alert, Button, Checkbox, TextInput } from "@mantine/core";
import { hasLength, isEmail, matchesField, useForm } from "@mantine/form";
import Link from "next/link";
import { useState } from "react";


export default function RegisterPage() {
  const [shown, viewPassword] = useState(false);

  const [errors, setErrors] = useState<ILoginError>({});

  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  // form data
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { name: "", email: "", password: "", password_confirmation: "" },
    validate: {
      email: isEmail("Invalid email"),
      password: (value) =>
        value.trim().length < 8 ? "Must be at least 8 characters" : null,
      name: hasLength({ min: 3 }, "Must be at least 3 characters"),
      password_confirmation: matchesField("password", "Passwords are not the same"),
    },
  });

  const handleRegister = (values: typeof form.values) => {
    // register process
    register({
        name: values.name,
        email: values.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
        setErrors,
    });
  };

  const showErrors = () => {
    if (errors.email || errors.name || errors.password || errors.password_confirmation) {
      return (
        <Alert variant="outline" color="red" title="Register error" className="mt-12">
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
          </ul>
        </Alert>
      );
    }
    return null;
  };

  return (
    <Container className="mt-100 md:mt-150">
      <div className="max-w-400 mx-auto">
        <p className="text-[14px] leading-18 text-mirage">
          Enter your email and password to register or{" "}
          <Link href="/login" className="text-shakespeare">
            login
          </Link>
        </p>
        <form className="mt-14" onSubmit={form.onSubmit(handleRegister)}>
          <TextInput
            placeholder="Username"
            key={form.key("name")}
            {...form.getInputProps("name")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
            }}
          />
          <TextInput
            placeholder="Enter your email address"
            key={form.key("email")}
            {...form.getInputProps("email")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
              root: "mt-17",
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
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
}
