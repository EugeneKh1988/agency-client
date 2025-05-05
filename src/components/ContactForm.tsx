"use client";

import Container from "@/components/Container";
import { IContact } from "@/lib/interfaces";
import { Button, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import SvgIcon from "./SvgIcon";

export interface ContactFormProps {
  className?: string;
}

const contacts: IContact[] = [
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

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      phone: "",
      question: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
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
                    <SvgIcon iconName={contactItem.iconName || ""} className="size-16 text-mauvelous" />
                </div>
                <p className="text-[18px] leading-32">{contactItem.value}</p>
              </div>
            ))}
          </div>
        </div>
        <form
          className="grow"
          onSubmit={form.onSubmit((values) => console.log(values))}
        >
          <TextInput
            placeholder="Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
            classNames={{
              root: "",
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leadeing-30 min-h-47 text-lynch",
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
                  "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leadeing-30 min-h-47 text-lynch",
              }}
            />
            <TextInput
              placeholder="Phone"
              key={form.key("phone")}
              {...form.getInputProps("phone")}
              classNames={{
                root: "w-full",
                input:
                  "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leadeing-30 min-h-47 text-lynch",
              }}
            />
          </div>
          <Textarea
            placeholder="Your Quenstions"
            key={form.key("question")}
            {...form.getInputProps("question")}
            classNames={{
              root: "mt-24 md:mt-32",
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leadeing-30 min-h-140 text-lynch",
            }}
          />
          <Button
            type="submit"
            className="px-52 mt-32 min-h-56 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white"
          >
            Send Message
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
