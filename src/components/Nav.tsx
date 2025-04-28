import Container from "@/components/Container";
import Link from "next/link";
import NavMenu from "./NavMenu";
import Image from "next/image";
import { ILink } from "@/lib/interfaces";
import Logo from "../../public/Logo.svg";
import { Button } from "@mantine/core";

export interface NavProps {
  activeMenuName: string;
  className?: string;
}

export const headerMenu: ILink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Service",
    href: "/service",
  },
  {
    name: "Testimonial",
    href: "/testomonial",
  },
  {
    name: "Pages",
    href: "/pages",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

const Nav: React.FC<NavProps> = ({ className, activeMenuName }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <div className={`${classNameValue}`}>
      <Container>
        <div className="flex justify-between items-center pt-38 lg:pt-0">
          <Link href="/" className="">
            <Image src={Logo} alt="Logo" />
          </Link>
          <ul className="hidden lg:block">
            {headerMenu.map((linkItem, index) => (
              <li
                key={index}
                className={`inline-block font-medium ${
                  activeMenuName == linkItem.name ? "text-mirage" : "text-lynch"
                }`}
              >
                <Link
                  href={linkItem.href || "#"}
                  className="px-20 py-33 block text-[16px] leading-24"
                >
                  {linkItem.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="filled"
            component={Link}
            href="/contact"
            className="hidden lg:block min-h-44 px-18 text-black-haze bg-mauvelous hover:bg-mauvelous-600 text-[14px] leading-20 tracking-[-0.02em] font-semibold"
          >
            Contact Us
          </Button>
          {/*for mobile devices */}
          <NavMenu
            header={headerMenu}
            activeMenuName={activeMenuName}
            className="lg:hidden"
          />
        </div>
      </Container>
    </div>
  );
};

export default Nav;
