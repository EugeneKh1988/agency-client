'use client';

import Container from "@/components/Container";
import SvgIcon from "@/components/SvgIcon";
import { useAuth } from "@/hooks/auth";
import { ILoginError } from "@/lib/interfaces";
import { Alert, Button, Checkbox, TextInput } from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function LoginPage() {
  const [shown, viewPassword] = useState(false);
  const router = useRouter();

  const [errors, setErrors] = useState<ILoginError>({});
  const [status, setStatus] = useState<string | null>(null);

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  // form data
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", password: "", remember: false },
    validate: {
      email: isEmail("Invalid email"),
      password: (value) =>
        value.trim().length == 0 ? "Must not be empty" : null,
    },
  });

  const handleLogin = (values: typeof form.values) => {
    // login process
    login({
        setErrors,
        setStatus,
        email: values.email,
        password: values.password,
        remember: values.remember,
    });
  };

  const showErrors = () => {
    if (errors.email || errors.name || errors.password) {
      return (
        <Alert variant="outline" color="red" title="Login error" className="mt-12">
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
          </ul>
        </Alert>
      );
    }
    return null;
  };

  /* useEffect(() => {
    if (router.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.reset));
    } else {
      setStatus(null);
    }
  }); */

  return (
    <Container className="mt-100 md:mt-150">
      <div className="max-w-400 mx-auto">
        <p className="text-[14px] leading-18 text-mirage">
          Enter your username and password to login or <Link href="/register" className="text-shakespeare">create new account</Link>
        </p>
        <form className="mt-14" onSubmit={form.onSubmit(handleLogin)}>
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
                  <SvgIcon iconName="show" className="size-20 text-mirage" />
                </div>
              ) : (
                <div onClick={() => viewPassword(!shown)}>
                  <SvgIcon iconName="hide" className="size-20 text-mirage" />
                </div>
              )
            }
          />
          <div className="flex justify-between sm:items-center mt-14 flex-wrap sm:flex-nowrap gap-10">
            <Checkbox
              label="Remember me"
              key={form.key("remember")}
              {...form.getInputProps("remember")}
              classNames={{label: "text-[14px] leading-16"}}
            />
            <Link
              href="/forgot-password"
              className="text-[14px] leading-16"
            >
              Forgot Password?
            </Link>
          </div>
          {
            showErrors() 
          }
          <Button
            type="submit"
            classNames={{
              root: "mt-27 min-h-48 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white w-full",
            }}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
}
