"use client";

import { useAuth } from "@/hooks/auth";
import { ActionIcon, Button, Menu, MenuDropdown, MenuItem, MenuTarget } from "@mantine/core";
import SvgIcon from "./SvgIcon";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LoginProps {
  mode: "nav" | "navmenu";
  className?: string;
}

const Login: React.FC<LoginProps> = ({ className, mode }) => {
  const classNameValue = className ? `${className}` : "";

  const {user, logout} = useAuth({middleware: "guest"});

  if (!user) {
    return (
      <ActionIcon variant="subtle" component={Link} href="/login" size={44}>
        <SvgIcon iconName="login" />
      </ActionIcon>
    );
  }

  return (
    <div className={`${classNameValue}`}>
      {mode == "nav" ? (
        <Menu withArrow position="bottom-end">
          <MenuTarget>
            <ActionIcon variant="subtle" size={44}>
              <SvgIcon iconName="user" />
            </ActionIcon>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem component={Link} href="/dashboard">
              Dashboard
            </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuDropdown>
        </Menu>
      ) : null}
      {mode == "navmenu" ? (
        <div className="flex gap-10 flex-wrap">
          <Button
            component={Link}
            href="/dashboard"
            className="min-h-44 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white"
          >
            Dashboard
          </Button>
          <Button
            onClick={logout}
            className="min-h-44 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white"
          >
            Logout
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Login;