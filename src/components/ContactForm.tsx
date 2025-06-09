"use client";

import Container from "@/components/Container";
import { IContact, ICreateMessage, IMessageError } from "@/lib/interfaces";
import { ActionIcon, Alert, Button, Textarea, TextInput } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import SvgIcon from "./SvgIcon";
import axios from "@/lib/axios";
import { Suspense, useEffect, useState } from "react";
import { useAuth } from "@/hooks/auth";

interface ContactFormProps {
  className?: string;
}

export const contacts: IContact[] = [
  {
    iconName: "pin",
    value: "2715 Ash Dr. San Jose, South Dakota 83475",
  },
  {
    iconName: "call",
    value: "(252) 555-0126",
  },
  {
    iconName: "email",
    value: "example@gmail.com",
  },
];

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  const [captchaImg, setCaptchaImg] = useState<string | null>('');
  const [errors, setErrors] = useState<IMessageError>({});
  const [status, setStatus] = useState<string | null>(null);

  // auth api
  const { user } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      phone: "",
      question: "",
      captchaCode: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: hasLength({ min: 3 }, "Must be at least 3 characters"),
      question: hasLength({ min: 6 }, "Must be at least 6 characters"),
    },
  });

  const csrf = () => axios.get(`/sanctum/csrf-cookie`);

  const sendMessage = async ({
    setErrors,
    setStatus,
    name,
    email,
    phone,
    question,
    captcha,
  }: ICreateMessage) => {
    await csrf();

    setErrors({});
    setStatus(null);

    axios
      .post("/api/messages", { name, email, phone, question, captcha })
      .then((response) => {
        setStatus(response.data.status);
      })
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const loadCaptcha = () => {
    axios
      .get("/captcha", {
        responseType: "blob", // важно!
      })
      .then((res) => {
        const reader = new FileReader();
        reader.readAsDataURL(res.data);

        reader.onload = function () {
          setCaptchaImg(reader.result as string); // base64 data
        };
        form.setValues({captchaCode: ''});
        setErrors({});
      });
  };

  const handleSendMessage = (values: typeof form.values) => {
    sendMessage({
      name: values.name,
      email: values.email,
      phone: values.phone,
      question: values.question,
      captcha: values.captchaCode,
      setErrors,
      setStatus,
    });
  };

  const showErrors = () => {
    if (
      errors.name ||
      errors.email ||
      errors.id ||
      errors.phone ||
      errors.question ||
      errors.captcha
    ) {
      return (
        <Alert
          variant="outline"
          color="red"
          title="Create error"
          className="mt-12"
        >
          <ul className="text-mirage">
            {errors.name?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.email?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.id?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.phone?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.question?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.captcha?.map((item, index) => (
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

  // set initial values
  useEffect(() => {
    loadCaptcha();
    if (user) {
      form.setValues({
        name: user?.name || "",
        email: user?.email || "",
      });
    }
  }, []);

  return (
    <Suspense>
      <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
        <div className="pt-40 md:pt-50 pb-48 md:pb-54 px-24 md:pl-72 md:pr-83 flex flex-col lg:flex-row lg:items-center gap-40 xl:gap-117 shadow-[0_4px_64px_0_#23286914] rounded-[10px]">
          <div className="lg:max-w-478">
            <h5 className="text-[18px] leading-28 text-mauvelous font-medium">
              Contact us
            </h5>
            <h2 className="mt-8 md:mt-16 text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
              Contact Our Team, Feel free to talk about anything.
            </h2>
            <div className="space-y-32 mt-40 md:mt-45">
              {contacts.map((contactItem, index) => (
                <div className="flex items-center gap-20" key={index}>
                  <div className="shrink-0 size-36 flex justify-center items-center bg-mauvelous/10 rounded-full">
                    <SvgIcon
                      iconName={contactItem.iconName || ""}
                      className="size-16 text-mauvelous"
                    />
                  </div>
                  <p className="text-[18px] leading-32">{contactItem.value}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="grow" onSubmit={form.onSubmit(handleSendMessage)}>
            <TextInput
              placeholder="Name"
              key={form.key("name")}
              {...form.getInputProps("name")}
              classNames={{
                root: "",
                input:
                  "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
              }}
            />
            <div className="mt-24 md:mt-32 flex flex-col md:flex-row gap-24 md:gap-30">
              <TextInput
                placeholder="Email"
                key={form.key("email")}
                {...form.getInputProps("email")}
                required
                error={form.errors["email"]}
                classNames={{
                  root: "w-full",
                  input:
                    "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
                }}
              />
              <TextInput
                placeholder="Phone"
                key={form.key("phone")}
                {...form.getInputProps("phone")}
                classNames={{
                  root: "w-full",
                  input:
                    "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
                }}
              />
            </div>
            <Textarea
              placeholder="Your Questions"
              key={form.key("question")}
              {...form.getInputProps("question")}
              classNames={{
                root: "mt-24 md:mt-32",
                input:
                  "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-140 text-lynch",
              }}
            />
            {/* Show captcha when user is not logged */}
            {!user && (
              <div className="mt-14 flex gap-10 items-center">
                {captchaImg && <img src={captchaImg} alt="Image" />}
                <TextInput
                  placeholder="Captcha"
                  key={form.key("captchaCode")}
                  {...form.getInputProps("captchaCode")}
                  classNames={{
                    root: "grow",
                    input:
                      "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-36 text-lynch",
                  }}
                />
                <ActionIcon
                  variant="subtle"
                  size={36}
                  onClick={() => loadCaptcha()}
                >
                  <SvgIcon iconName="reload" />
                </ActionIcon>
              </div>
            )}
            {showErrors()}
            {showStatus()}
            <Button
              type="submit"
              className="px-52 mt-32 min-h-56 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </Suspense>
  );
};

export default ContactForm;
