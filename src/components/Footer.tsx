import Container from "@/components/Container";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { Button, TextInput } from "@mantine/core";
import Link from "next/link";
import SvgIcon from "./SvgIcon";
import { ILink } from "@/lib/interfaces";
import { headerMenu } from "./Nav";
import SubscriptionForm from "./SubscriptionForm";

export interface FooterProps {
  className?: string;
}

const links: ILink[] = [
  {
    name: "Privacy Policy",
    href: "/policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms",
  },
  {
    name: "Contact us",
    href: "/contact",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

const Footer: React.FC<FooterProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-30">
        <div>
          <Link href="/" className="">
            <Image src={Logo} alt="Logo" />
          </Link>
          <p className="mt-34 text-[14px] leading-30 md:leading-34 md:max-w-338">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididum ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        <div className="flex gap-74">
          <div>
            <h5 className="text-[16px] leading-24 text-mirage font-semibold">
              Quick links
            </h5>
            <div className="mt-24 text-[14px] leading-24 space-y-10">
              {headerMenu.map((linkItem, index) => (
                <Link href={linkItem.href || "#"} key={index} className="block">
                  {linkItem.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-[16px] leading-24 text-mirage font-semibold">
              Help
            </h5>
            <div className="mt-24 text-[14px] leading-24 space-y-10">
              {links.map((linkItem, index) => (
                <Link href={linkItem.href || "#"} key={index} className="block">
                  {linkItem.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <SubscriptionForm />
          <div className="flex gap-19 items-center mt-51">
            <p className="text-[14px] leading-24 text-mirage">Follow us on:</p>
            <Link href="#">
              <SvgIcon iconName="discord" />
            </Link>
            <Link href="#">
              <SvgIcon iconName="twitter" />
            </Link>
            <Link href="#">
              <SvgIcon iconName="telegram" />
            </Link>
            <Link href="#">
              <SvgIcon iconName="youtube" />
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-34 md:mt-51 text-[14px] leading-24 text-mirage">
        © Copyright 2022, All Rights Reserved by Nagency
      </p>
    </Container>
  );
};

export default Footer;
