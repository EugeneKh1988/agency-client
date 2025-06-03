import { Alert, Button, Checkbox, Modal, ScrollArea, Textarea, TextInput } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { ICreateMessage, IMessageItem, IMessageError, IUpdateMessage, } from "@/lib/interfaces";
import { useMediaQuery } from "@mantine/hooks";
import { useAuth } from "@/hooks/auth";
import React from "react";

interface AddOrUpdateMessageProps {
  className?: string;
  opened: boolean;
  onClose: () => void;
  mode: "add" | "update";
  message: IMessageItem | null;
  createMessage: (params: ICreateMessage) => Promise<void>;
  updateMessage: (params: IUpdateMessage) => Promise<void>;
}

const AddOrUpdateMessage: React.FC<AddOrUpdateMessageProps> = ({
  className,
  opened,
  onClose,
  mode,
  message,
  createMessage,
  updateMessage,
}) => {
  const classNameValue = className ? {className} : {};
  const [errors, setErrors] = useState<IMessageError>({});
  const [status, setStatus] = useState<string | null>(null);

  const isMobile = useMediaQuery("(max-width: 40em)");

  // auth api
  const { isAdmin, user } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  // form data
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      phone: "",
      question: "",
      answer: "",
      was_answered: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: hasLength({ min: 3 }, "Must be at least 3 characters"),
      question: hasLength({ min: 6 }, "Must be at least 6 characters"),
    },
  });

  // set initial values
  useEffect(() => {
    if (mode == "update" && message && opened) {
      form.setValues({
        name: message.name,
        email: message.email,
        phone: message.phone,
        question: message.question,
        answer: message.answer,
        was_answered: message.was_answered,
      });
    }
    if (mode == "add" && opened) {
      form.setValues({
        name: user?.name || "",
        email: user?.email || "",
        phone: "",
        question: "",
        answer: "",
        was_answered: false,
      });
    }
    // clear errors and status after show
    if (opened) {
      setErrors({});
      setStatus(null);
    }
  }, [opened]);

  const showErrors = () => {
    if (
      errors.name ||
      errors.email ||
      errors.id ||
      errors.phone ||
      errors.question
    ) {
      return (
        <Alert
          variant="outline"
          color="red"
          title={mode == "add" ? "Create error" : "Update error"}
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

  const answer = () => {
    if(mode == "update") {
        if (isAdmin()) {
          return (
            <React.Fragment>
              <Textarea
                placeholder="Answer"
                label="Answer"
                key={form.key("answer")}
                {...form.getInputProps("answer")}
                classNames={{
                  root: "",
                  input:
                    "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-140 text-lynch",
                }}
              />
              <Checkbox
                label="Was answered?"
                key={form.key("was_answered")}
                {...form.getInputProps("was_answered", { type: "checkbox" })}
              />
            </React.Fragment>
          );
        }
        if(!isAdmin() && message && message.answer) {
            return (
              <div>
                <p className="text-[14px] leading-30 font-medium">Answer</p>
                <p>{form.getValues().answer}</p>
              </div>
            );
        }
    }
    return null;
  };

  const handleAddOrUpdate = async (values: typeof form.values) => {
    // adding message
    if (mode == "add") {
      await createMessage({
        name: values.name,
        email: values.email,
        phone: values.phone,
        question: values.question,
        setErrors,
        setStatus,
      });
      // revalidate after adding worker
      //await revalidateTeam();
    }
    // updating existing message
    if (mode == "update" && message && message.id) {
      await updateMessage({
        id: message?.id,
        name: values.name,
        email: values.email,
        phone: values.phone,
        question: values.question,
        answer: values.answer,
        was_answered: values.was_answered,
        setErrors,
        setStatus,
      });
      // revalidate after updating worker
      //await revalidateTeam();
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      fullScreen={isMobile}
      scrollAreaComponent={ScrollArea.Autosize}
      {...classNameValue}
    >
      <p className="text-[14px] leading-30">Message details</p>
      <form className="mt-14" onSubmit={form.onSubmit(handleAddOrUpdate)}>
        <div className="flex flex-col gap-18">
          <TextInput
            placeholder="Name"
            label="Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
            classNames={{
              root: "",
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-47 text-lynch",
            }}
          />
          <div className="flex flex-col md:flex-row gap-24 md:gap-30">
            <TextInput
              placeholder="Email"
              label="Email"
              key={form.key("email")}
              {...form.getInputProps("email")}
              required
              error={form.errors["email"]}
              classNames={{
                root: "w-full",
                input:
                  "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-47 text-lynch",
              }}
            />
            <TextInput
              placeholder="Phone"
              label="Phone"
              key={form.key("phone")}
              {...form.getInputProps("phone")}
              classNames={{
                root: "w-full",
                input:
                  "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-47 text-lynch",
              }}
            />
          </div>
          <Textarea
            placeholder="Your Questions"
            label="Your Questions"
            key={form.key("question")}
            {...form.getInputProps("question")}
            classNames={{
              root: "",
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-140 text-lynch",
            }}
          />
          {answer()}
        </div>
        {showErrors()}
        {showStatus()}
        {/* show update button for admin */}
        {mode == "update" && isAdmin() ? (
          <Button
            type="submit"
            classNames={{
              root: "mt-27 min-h-48 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white w-full md:w-auto mx-auto md:px-52 block",
            }}
          >
            Update
          </Button>
        ) : null}
        {/* show update button for admin */}
        {mode == "add" ? (
          <Button
            type="submit"
            classNames={{
              root: "mt-27 min-h-48 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white w-full md:w-auto mx-auto md:px-52 block",
            }}
          >
            Send
          </Button>
        ) : null}
      </form>
    </Modal>
  );
};

export default AddOrUpdateMessage;
