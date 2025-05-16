'use client';

import Container from "@/components/Container";
import { useAuth } from "@/hooks/auth";
import { ILoginError } from "@/lib/interfaces";
import { Alert, Button, TextInput } from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { useState } from "react";


export default function ForgotPasswordPage() {
  const [errors, setErrors] = useState<ILoginError>({});
  const [status, setStatus] = useState<string | null>(null);

  const { forgotPassword } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  // form data
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "" },
    validate: {
      email: isEmail("Invalid email"),
    },
  });

  const handleForgotPassword = (values: typeof form.values) => {
    forgotPassword({ email: values.email, setErrors, setStatus });
  };

  const showErrors = () => {
    if (errors.email) {
      return (
        <Alert
          variant="outline"
          color="red"
          title="Error"
          className="mt-12"
        >
          <ul className="text-mirage">
            {errors.email?.map((item, index) => (
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
          Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one.
        </p>
        <form className="mt-14" onSubmit={form.onSubmit(handleForgotPassword)}>
          <TextInput
            placeholder="Email"
            key={form.key("email")}
            {...form.getInputProps("email")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
            }}
          />
          {status && (<p className="mt-12 text-[14px] font-medium">{status}</p>)}
          {showErrors()}
          <Button
            type="submit"
            classNames={{
              root: "mt-27 min-h-48 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white w-full",
            }}
          >
            Email Password Reset Link
          </Button>
        </form>
      </div>
    </Container>
  );
}
