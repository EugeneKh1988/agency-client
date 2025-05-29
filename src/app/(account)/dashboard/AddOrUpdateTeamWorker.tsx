import { Alert, Button, Modal, ScrollArea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useRef, useState } from "react";
import { ICreateWorker, ITeam, ITeamError, ITeamItem, IUpdateWorker } from "@/lib/interfaces";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import SvgIcon from "@/components/SvgIcon";
import { useMediaQuery } from "@mantine/hooks";
import { revalidateTeam } from "@/lib/revalidate";

interface AddOrUpdateTeamWorkerProps {
  className?: string;
  opened: boolean;
  onClose: () => void;
  mode: "add" | "update";
  worker: ITeamItem | null;
  createWorker: (params: ICreateWorker) => Promise<void>;
  updateWorker: (params: IUpdateWorker) => Promise<void>;
}

const AddOrUpdateTeamWorker: React.FC<AddOrUpdateTeamWorkerProps> = ({
  className,
  opened,
  onClose,
  mode,
  worker,
  createWorker,
  updateWorker,
}) => {
  const classNameValue = className ? `${className}` : "";
  const [errors, setErrors] = useState<ITeamError>({});
  const [status, setStatus] = useState<string | null>(null);

  // dropzone ref
  const openRef = useRef<() => void>(null);
  const [fileHandle, setFileHandle] = useState<File | null>(null);

  const isMobile = useMediaQuery('(max-width: 40em)');

  // form data
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      position: "",
    },
    validate: {},
  });

  // set initial values
  useEffect(() => {
    if (mode == "update" &&  worker && opened) {
      form.setValues({ name: worker.name });
      form.setValues({ position: worker.position });
    }
    if (mode == "add" && opened) {
      form.setValues({ name: "" });
      form.setValues({ position: "" });
    }
    // clear errors and status after show
    if(opened) {
      setErrors({});
      setStatus(null);
    }
    // clear file data
    if(opened && fileHandle) {
      setFileHandle(null);
    }
  }, [opened]);

  const showErrors = () => {
    if (errors.photo || errors.position || errors.name) {
      return (
        <Alert
          variant="outline"
          color="red"
          title={mode == "add" ? "Create error": "Update error"}
          className="mt-12"
        >
          <ul className="text-mirage">
            {errors.photo?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {errors.position?.map((item, index) => (
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

  const handleAddOrUpdate = async (values: typeof form.values) => {
    // adding woker
    if(mode == "add") {
      await createWorker({
        name: values.name,
        position: values.position,
        photo: fileHandle,
        setErrors,
        setStatus,
      });
      // revalidate after adding worker
      await revalidateTeam();
    }
    // updating existing worker
    if(mode == "update" && worker && worker.id) {
      await updateWorker({
        id: worker?.id,
        name: values.name,
        position: values.position,
        photo: fileHandle,
        setErrors,
        setStatus,
      });
      // revalidate after updating worker
      await revalidateTeam();
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} fullScreen={isMobile} scrollAreaComponent={ScrollArea.Autosize}>
      <div>
        <p className="text-[14px] leading-30">Upload worker's photo</p>
        <Dropzone
          onDrop={(files) =>
            files && files.length > 0 ? setFileHandle(files[0]) : null
          }
          openRef={openRef}
          maxSize={5 * 1024 ** 2}
          accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.webp]}
          maxFiles={1}
          activateOnClick={false}
          classNames={{
            root: "border border-dashed border-lynch mt-8 min-h-128 data-[idle]:text-[#84848400]",
          }}
        >
          <div className="flex flex-col items-center py-14 px-10 gap-5">
            <SvgIcon iconName="upload" className="w-54" />
            <p className="text-[14px] leading-30 text-mirage">
              Drag and drop your image here Or{" "}
              <span
                className="text-shakespeare cursor-pointer"
                onClick={() => openRef.current?.()}
                style={{ pointerEvents: "all" }}
              >
                browse files
              </span>
            </p>
            {fileHandle ? (
              <p className="text-center text-[14px] leading-30 text-mirage">
                Added file {fileHandle.name}
              </p>
            ) : null}
          </div>
        </Dropzone>
      </div>
      <form className="mt-14" onSubmit={form.onSubmit(handleAddOrUpdate)}>
        <div className="flex flex-col gap-18">
          <TextInput
            data-autofocus
            placeholder="Name"
            label="Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-47 text-lynch",
              root: "grow",
            }}
          />
          <TextInput
            placeholder="Position"
            label="Position"
            key={form.key("position")}
            {...form.getInputProps("position")}
            classNames={{
              input:
                "placeholder:text-lynch rounded-none border border-[#EDEDED] pl-12 text-[14px] leading-30 min-h-47 text-lynch",
              root: "grow",
            }}
          />
        </div>
        {showErrors()}
        {showStatus()}
        <Button
          type="submit"
          classNames={{
            root: "mt-27 min-h-48 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white w-full md:w-auto mx-auto md:px-52 block",
          }}
        >
          {mode == "add" ? "Create" : "Update"}
        </Button>
      </form>
    </Modal>
  );
};

export default AddOrUpdateTeamWorker;
