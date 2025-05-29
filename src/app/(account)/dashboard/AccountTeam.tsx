import SvgIcon from "@/components/SvgIcon";
import { useAuth } from "@/hooks/auth";
import { useTeams } from "@/hooks/teams";
import { ITeamItem, } from "@/lib/interfaces";
import {
  ActionIcon,
  Button,
  Pagination,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import AddOrUpdateTeamWorker from "./AddOrUpdateTeamWorker";
import LaravelImage from "@/components/LaravelImage";
import DeleteTeamWorker from "./DeleteTeamWorker";

interface AccountTeamProps {
  isAdminTab: boolean;
  className?: string;
}

const AccountDetails: React.FC<AccountTeamProps> = ({
  className,
  isAdminTab,
}) => {
  const classNameValue = className ? { className } : {};

  // handle modal for add and edit workers
  const [opened, { open, close }] = useDisclosure(false);
  // handle modal for delete workers
  const [openedDeleteModal, {open:openDeleteModal, close:closeDeleteModal}] = useDisclosure(false);

  const [mode, setMode] = useState<"add" | "update">("add");
  const [currentWorker, setCurrentWorker] = useState<ITeamItem | null>(null);

  // team api
  const itemsPerPage = 10;
  const [page, setPage] = useState<number>(1);
  const { team, create, update, deleteWorker } = useTeams({
    count: itemsPerPage,
    skip: itemsPerPage * (page - 1),
  });

  // auth api
  const { isAdmin } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  const rows = () => {
    if (team && team.workers && team.workers.length > 0) {
      return team.workers.map((teamItem) => (
        <TableTr key={teamItem.id}>
          <TableTd>
            {teamItem.imageHref ? (
              <LaravelImage
                width={200}
                height={0}
                src={`storage/${teamItem.imageHref}`}
                alt={teamItem.name || ""}
                className="max-w-200 h-auto"
              />
            ) : (
              <p>No photo</p>
            )}
          </TableTd>
          <TableTd>{teamItem.name}</TableTd>
          <TableTd>{teamItem.position}</TableTd>
          <TableTd>
            <ActionIcon variant="subtle" onClick={() => editWorker(teamItem)}>
              <SvgIcon iconName="edit"></SvgIcon>
            </ActionIcon>
          </TableTd>
          <TableTd>
            <ActionIcon variant="subtle" onClick={() => delWorker(teamItem)}>
              <SvgIcon iconName="deleteIcon"></SvgIcon>
            </ActionIcon>
          </TableTd>
        </TableTr>
      ));
    }
    return null;
  };

  const editWorker = (worker: ITeamItem) => {
    // change mode for edit
    setMode("update");

    // set data to edit
    setCurrentWorker(worker);

    // open edit modal
    open();
  };

  const delWorker = (worker: ITeamItem) => {
    // set data to delete
    setCurrentWorker(worker);

    // open edit modal
    openDeleteModal();
  };

  // fix current page after reducing workers
  useEffect(() => {
    if(team && team.count && team.count > 0) {
      const totalPages = Math.ceil(team.count / itemsPerPage);
      if(page > totalPages) {
        setPage(totalPages);
      }
    }
  }, [team]);

  if (!isAdmin() && isAdminTab) {
    return null;
  }

  return (
    <div {...classNameValue}>
      <p className="text-[14px] leading-18 text-mirage font-medium mb-12">
        Team's workers
      </p>
      <Table>
        <TableThead>
          <TableTr>
            <TableTh>Photo</TableTh>
            <TableTh>Name</TableTh>
            <TableTh>Position</TableTh>
            <TableTh>Edit</TableTh>
            <TableTh>Delete</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows()}</TableTbody>
      </Table>
      <Pagination
        className="flex justify-center mt-12"
        value={page}
        onChange={setPage}
        total={
          team && team.count && team.count > 0
            ? Math.ceil(team.count / itemsPerPage)
            : 1
        }
      />
      <Button
        onClick={() => {
          setMode("add");
          open();
        }}
        classNames={{
          root: "mt-27 min-h-48 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white w-full md:w-auto md:mx-auto md:px-52",
        }}
      >
        Add worker
      </Button>
      <AddOrUpdateTeamWorker
        mode={mode}
        opened={opened}
        onClose={close}
        worker={currentWorker}
        createWorker={create}
        updateWorker={update}
      />
      <DeleteTeamWorker
        opened={openedDeleteModal}
        onClose={closeDeleteModal}
        workerId={currentWorker && currentWorker.id ? currentWorker.id : 0}
        deleteWorker={deleteWorker}
      />
    </div>
  );
};

export default AccountDetails;
