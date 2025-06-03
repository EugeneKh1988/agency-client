import SvgIcon from "@/components/SvgIcon";
import { useAuth } from "@/hooks/auth";
import { IMessageItem, ITeamItem, } from "@/lib/interfaces";
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
import { useDisclosure, useToggle } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useMessages } from "@/hooks/messages";
import AddOrUpdateMessage from "./AddOrUpdateMessage";
import DeleteMessage from "./DeleteMessage";

interface AccountMessagesProps {
  isAdminTab: boolean;
  className?: string;
}

const AccountMessages: React.FC<AccountMessagesProps> = ({
  className,
  isAdminTab,
}) => {
  const classNameValue = className ? { className } : {};

  // handle modal for add and edit messages
  const [opened, { open, close }] = useDisclosure(false);
  // handle modal for delete messages
  const [openedDeleteModal, {open:openDeleteModal, close:closeDeleteModal}] = useDisclosure(false);

  const [mode, setMode] = useState<"add" | "update">("add");
  const [currentMessage, setCurrentMessage] = useState<IMessageItem | null>(null);

  // team api
  const itemsPerPage = 10;
  //const [sortByDate, setSortByDate] = useState<"asc" | "desc" | "">("");
  //const [sortByAnswer, setSortByAnswer] = useState<"asc" | "desc" | "">("");
  const [sortByDate, toggleSortDate] = useToggle(['', 'asc', 'desc']);
  const [sortByAnswer, toggleSortByAnswer] = useToggle(['', 'asc', 'desc']);
  const [page, setPage] = useState<number>(1);
  const { messages, create, update, deleteMessage } = useMessages({
    count: itemsPerPage,
    skip: itemsPerPage * (page - 1),
    create_sort: sortByDate,
    answered: sortByAnswer
  });

  // auth api
  const { isAdmin } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  const rows = () => {
    if (messages && messages.messages && messages.messages.length > 0) {
      return messages.messages.map((messageItem) => (
        <TableTr key={messageItem.id}>
          <TableTd>{messageItem.name}</TableTd>
          <TableTd>{messageItem.question}</TableTd>
          <TableTd>
            {messageItem.was_answered ? <span>Yes</span> : <span>No</span>}
          </TableTd>
          <TableTd>{dateCreation(messageItem.created_at)}</TableTd>
          <TableTd>
            <ActionIcon
              variant="subtle"
              onClick={() => editMessage(messageItem)}
            >
              <SvgIcon iconName="edit"></SvgIcon>
            </ActionIcon>
          </TableTd>
          {isAdmin() ? (
            <TableTd>
              <ActionIcon
                variant="subtle"
                onClick={() => delMessage(messageItem)}
              >
                <SvgIcon iconName="deleteIcon"></SvgIcon>
              </ActionIcon>
            </TableTd>
          ) : null}
        </TableTr>
      ));
    }
    return null;
  };

  const editMessage = (message: IMessageItem) => {
    // change mode for edit
    setMode("update");

    // set data to edit
    setCurrentMessage(message);

    // open edit modal
    open();
  };

  const delMessage = (worker: ITeamItem) => {
    // set data to delete
    setCurrentMessage(worker);

    // open edit modal
    openDeleteModal();
  };

  // date of message creation
  const dateCreation = (dateString?: string) => {
    if(dateString) {
        const date = new Date(dateString);
        const day = date.getDate() < 10 ? `0${date.getDate()}`: `${date.getDate()}`;
        const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}`: `${date.getMonth() + 1}`;
        const hour =  date.getHours() < 10 ? `0${date.getHours()}`: `${date.getHours()}`;
        const min =  date.getMinutes() < 10 ? `0${date.getMinutes()}`: `${date.getMinutes()}`;  
        return `${day}.${month}.${date.getFullYear()} ${hour}:${min}`;
    }
    return "";
  };

  // change icons
  const sortingIcons = (value: string) => {
    if(value == 'asc') {
      return 'chevronUp';
    }
    if(value == 'desc') {
      return 'chevronDown';
    }
    return 'chevronUpDown';
  }; 

  // fix current page after reducing messages
  useEffect(() => {
    if(messages && messages.count && messages.count > 0) {
      const totalPages = Math.ceil(messages.count / itemsPerPage);
      if(page > totalPages) {
        setPage(totalPages);
      }
    }
  }, [messages]);

  if (!isAdmin() && isAdminTab) {
    return null;
  }

  return (
    <div {...classNameValue}>
      <p className="text-[14px] leading-18 text-mirage font-medium mb-12">
        Messages from contact page or dashboard
      </p>
      <Table>
        <TableThead>
          <TableTr>
            <TableTh>Name</TableTh>
            <TableTh>Qustion</TableTh>
            <TableTh>
              <div className="flex items-center gap-4">
                <span>Was answered</span>
                <ActionIcon
                  variant="subtle"
                  onClick={() => toggleSortByAnswer()}
                >
                  <SvgIcon iconName={sortingIcons(sortByAnswer)} />
                </ActionIcon>
              </div>
            </TableTh>
            <TableTh>
              <div className="flex items-center gap-4">
                <span>Date</span>
                <ActionIcon variant="subtle" onClick={() => toggleSortDate()}>
                  <SvgIcon iconName={sortingIcons(sortByDate)} />
                </ActionIcon>
              </div>
            </TableTh>
            <TableTh>Details</TableTh>
            {isAdmin() ? <TableTh>Delete</TableTh> : null}
          </TableTr>
        </TableThead>
        <TableTbody>{rows()}</TableTbody>
      </Table>
      <Pagination
        className="flex justify-center mt-12"
        value={page}
        onChange={setPage}
        total={
          messages && messages.count && messages.count > 0
            ? Math.ceil(messages.count / itemsPerPage)
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
        Send message
      </Button>
      <AddOrUpdateMessage
        mode={mode}
        opened={opened}
        onClose={close}
        message={currentMessage}
        createMessage={create}
        updateMessage={update}
      />
      <DeleteMessage
        opened={openedDeleteModal}
        onClose={closeDeleteModal}
        messageId={currentMessage && currentMessage.id ? currentMessage.id : 0}
        deleteMessage={deleteMessage}
      />
    </div>
  );
};

export default AccountMessages;
