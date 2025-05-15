"use client"

import { Button, Drawer, ScrollArea } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import SvgIcon from "./SvgIcon";
import { NavProps } from "./Nav";
import Link from "next/link";
import { ILink } from "@/lib/interfaces";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import Login from "./Login";

interface NavMenuProps extends NavProps {
  header: ILink[];
}

const NavMenu: React.FC<NavMenuProps> = ({
  header,
  className,
  activeMenuName,
}) => {
  const classNameValue = className ? `${className}` : "";
  const [opened, { open, close }] = useDisclosure(false);
  const isMaximumWidth = useMediaQuery("(max-width: 28.125em)");

  return (
    <div className={`${classNameValue}`}>
      <Drawer.Root
        opened={opened}
        onClose={close}
        position="right"
        size={isMaximumWidth ? "100%" : "28.125em"}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header className="px-0 mx-25 py-15 md:py-25 md:mx-35 border-b border-b-mirage">
            <Drawer.Title>
              <Link href="/" className="block">
                <Image src={Logo} alt="Logo" />
              </Link>
            </Drawer.Title>
            <Drawer.CloseButton className="text-mirage" />
          </Drawer.Header>
          <Drawer.Body className="pb-25 px-25 md:pb-35 md:px-35">
            <div className="font-medium text-[18px] leading-24  border-b border-b-mirage">
              {header.map((navItem) => (
                <Link
                  href={navItem.href || "#"}
                  key={navItem.name}
                  className={`px-5 py-20 block hover:bg-mirage hover:text-white ${
                    activeMenuName == navItem.name
                      ? "text-mirage font-bold border-b-3 border-b-mirage"
                      : "text-lynch"
                  }`}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
            <div className="mt-20 flex flex-wrap gap-10 items-center">
              <Button
                variant="filled"
                component={Link}
                href="/contact"
                className="min-h-44 px-18 text-black-haze bg-mauvelous hover:bg-mauvelous-600 text-[14px] leading-20 tracking-[-0.02em] font-semibold"
              >
                Contact Us
              </Button>
              <Login mode="navmenu" />
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button variant="transparent" onClick={open} className="text-mirage">
        <SvgIcon iconName="bar" />
      </Button>
    </div>
  );
};

export default NavMenu;

