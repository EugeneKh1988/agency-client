import { Alert, Button, Modal, ScrollArea, } from "@mantine/core";
import { useEffect, useState } from "react";
import { IDeleteWorker, ITeamError } from "@/lib/interfaces";
import { useMediaQuery } from "@mantine/hooks";
import { revalidateTeam } from "@/lib/revalidate";

interface DeleteTeamWorkerProps {
  className?: string;
  opened: boolean;
  onClose: () => void;
  workerId: number | undefined;
  deleteWorker: (params: IDeleteWorker) => Promise<void>;
}

const DeleteTeamWorker: React.FC<DeleteTeamWorkerProps> = ({
  className,
  opened,
  onClose,
  workerId,
  deleteWorker,
}) => {
  const classNameValue = className ? {className} : {};
  const [errors, setErrors] = useState<ITeamError>({});
  const [status, setStatus] = useState<string | null>(null);

  const isMobile = useMediaQuery('(max-width: 40em)');

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // clear errors and status after show
    if(opened) {
      setErrors({});
      setStatus(null);
    }
  }, [opened]);

  const showErrors = () => {
    if (errors.id) {
      return (
        <Alert
          variant="outline"
          color="red"
          title="Delete error"
          className="mt-12"
        >
          <ul className="text-mirage">
            {errors.id?.map((item, index) => (
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

  const handleDelete = async () => {
    try {
      await deleteWorker({
        id: workerId || 0,
        setErrors,
        setStatus,
      });
      // disabled delete button
      setDisabled(true);
      // revalidate cache
      await revalidateTeam();
    } catch (err) {
      setDisabled(false);
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
      <p className="text-[14px] leading-18 text-mirage font-medium mb-12">
        Delete worker?
      </p>
      {showErrors()}
      {showStatus()}
      <div className="mt-24 flex justify-between gap-50">
        <Button
          onClick={onClose}
          classNames={{
            root: "min-h-48 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white w-full md:w-auto md:px-52 block",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          disabled={disabled}
          classNames={{
            root: "min-h-48 text-[14px] leading-20 font-semibold bg-mauvelous hover:bg-mauvelous-600 text-white w-full md:w-auto md:px-52 block",
          }}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteTeamWorker;
