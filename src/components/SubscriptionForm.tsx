"use client";

import { ISubscriptionError } from "@/lib/interfaces";
import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/auth";
import { useSubscription } from "@/hooks/subscription";
import React from "react";
import { notifications } from "@mantine/notifications";
import { useSearchParams } from "next/navigation";

interface SubscriptionFormProps {
  className?: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  const [errors, setErrors] = useState<ISubscriptionError>({});
  const [status, setStatus] = useState<string | null>(null);

  // url query params
  const searchParams = useSearchParams();

  // auth api
  const { user } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  // subscriber api
  const { subscribe } = useSubscription();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubscribe = async (values: typeof form.values) => {
    await subscribe({
      email: values.email,
      setErrors,
      setStatus,
    });
  };

  // set initial values
  useEffect(() => {
    if (user) {
      form.setValues({
        email: user?.email || "",
      });
    }
  }, []);

  useEffect(() => {
    // show status
    if (status) {
      notifications.show({
        title: "Subscribe status",
        message: status,
        onClose: () => setStatus(null),
        autoClose: 6000,
      });
    }
    if (errors && errors.email) {
      notifications.show({
        title: "Subscribe error",
        color: "red",
        message: (
          <ul className="text-mirage">
            {errors.email?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ),
        onClose: () => setErrors({}),
        autoClose: 6000,
      });
    }
  }, [status, errors]);

  // set status by query
  useEffect(() => {
    if(searchParams.get("verify") == "ok") {
        setStatus("Email was verified");
    }
    if(searchParams.get("verify") == "ok") {
        setErrors({verify: ["Email was verified"]});
    }
  }, [searchParams.get("verify")]);

  return (
    <React.Fragment>
      <h5 className="text-[16px] leading-24 text-mirage font-semibold">
        Subscribe to newsletter
      </h5>
      <p className="mt-12 text-[14px] leading-30">
        Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Sit quis
        auctor.
      </p>
      <form
        className={`flex items-start mt-21 ${classNameValue}`}
        onSubmit={form.onSubmit(handleSubscribe)}
      >
        <TextInput
          placeholder="Enter email address"
          key={form.key("email")}
          {...form.getInputProps("email")}
          required
          error={form.errors["email"]}
          classNames={{
            root: "grow",
            input:
              "rounded-l-[3px] rounded-r-none min-h-50 placeholder:text-lynch border-r-none border-[#E4E4E7]",
          }}
        />
        <Button
          type="submit"
          variant="filled"
          className="shrink-0 rounded-l-none min-h-50 px-28 text-black-haze bg-mauvelous hover:bg-mauvelous-600 text-[14px] leading-20 tracking-[-0.02em] font-semibold"
        >
          Subscribe
        </Button>
      </form>
    </React.Fragment>
  );
};

export default SubscriptionForm;
