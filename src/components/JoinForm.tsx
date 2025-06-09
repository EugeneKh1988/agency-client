"use client";

import Container from "@/components/Container";
import { Button, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import SvgIcon from "./SvgIcon";
import { contacts } from "./ContactForm";
import { positions } from "./AvailablePositions";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { useRef, useState } from "react";

interface JoinFormProps {
  className?: string;
}

const JoinForm: React.FC<JoinFormProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  const allPositions = positions.map(pos => pos.name);

  const openRef = useRef<() => void>(null);

  const [fileHandle, setFileHandle] = useState<File | null>(null);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      phone: "",
      portfolioLink: "",
      position: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      position: (value) => !value || value && value.length == 0 ? "Must not be empty" : null
    },
  });

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <div className="pt-40 md:pt-50 pb-48 md:pb-54 px-24 md:pl-72 md:pr-83 flex flex-col lg:flex-row lg:items-center gap-40 xl:gap-117 shadow-[0_4px_64px_0_#23286914] rounded-[10px]">
        <div className="lg:max-w-478">
          <h5 className="text-[18px] leading-28 text-mauvelous font-medium">
            Join us!
          </h5>
          <h2 className="mt-8 md:mt-16 text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
            Join our team!
          </h2>
          <p className="mt-8 md:mt-24 text-[18px] leading-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
          <div className="space-y-32 mt-33 md:mt-53">
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
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
            }}
          />
          <div className="mt-24 flex flex-col md:flex-row gap-24 md:gap-30">
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
          <Select
            placeholder="Position applied for"
            key={form.key("position")}
            {...form.getInputProps("position")}
            required
            data={allPositions || []}
            rightSectionPointerEvents="none"
            rightSection={
              <SvgIcon iconName="chevronDown" className="size-20 text-mirage" />
            }
            classNames={{
              root: "w-full mt-24",
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-20 font-semibold min-h-47 text-lynch",
            }}
          />
          <TextInput
            placeholder="Portfolio link"
            key={form.key("portfolioLink")}
            {...form.getInputProps("portfolioLink")}
            classNames={{
              root: "w-full mt-24",
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-26 text-[14px] leading-30 min-h-47 text-lynch",
            }}
          />
          <div className="mt-24">
            <p className="text-[14px] leading-30">Upload your CV</p>
            <Dropzone
              onDrop={(files) => files && files.length > 0 ? setFileHandle(files[0]) : null}
              openRef={openRef}
              maxSize={5 * 1024 ** 2}
              accept={[MIME_TYPES.pdf, MIME_TYPES.doc, MIME_TYPES.docx]}
              maxFiles={1}
              activateOnClick={false}
              classNames={{
                root: "border border-dashed border-lynch mt-8 min-h-128 data-[idle]:text-[#84848400]",
              }}
            >
              <div className="flex flex-col items-center py-14 px-10 gap-5">
                <SvgIcon iconName="upload" className="w-54" />
                <p className="text-[14px] leading-30 text-mirage">
                  Drag and drop your file here Or <span className="text-shakespeare cursor-pointer" onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>browse files</span>
                </p>
                {fileHandle ? <p className="text-center text-[14px] leading-30 text-mirage">Added file {fileHandle.name}</p>: null}
              </div>
            </Dropzone>
          </div>
          <Button
            type="submit"
            className="px-52 mt-32 min-h-56 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white"
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default JoinForm;
