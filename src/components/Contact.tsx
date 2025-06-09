import Container from "@/components/Container";
import contact from "../../public/contact.png";
import ellipse from "../../public/ellipse.svg";
import Image from "next/image";
import { Button } from "@mantine/core";
import Link from "next/link";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <div className="rounded-[32px] bg-shakespeare relative min-h-450 lg:min-h-467">
        <div className="absolute z-2 left-0 right-0 bottom-0 top-0 py-50 lg:py-71 px-25 lg:pr-113 flex justify-center lg:justify-end">
          <div className="text-center text-white md:max-w-566">
            <p className="text-[18px] leading-28 font-medium">Contact us</p>
            <h1 className="mt-8 md:mt-16 text-[32px] leading-52 md:text-[48px] md:leading-66 font-semibold tracking-[-2px]">
              We help you to grow your business faster & easier.
            </h1>
            <p className="mt-12 text-[18px] leading-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun.
            </p>
            <Button
              variant="filled"
              component={Link}
              href="/contact"
              className="mt-12 md:mt-16 min-h-56 px-28 text-black-haze bg-mauvelous hover:bg-mauvelous-600 text-[14px] leading-20 tracking-[-0.02em] font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 hidden lg:block">
          <Image src={contact} alt="" />
        </div>
        <div className="absolute top-0 right-0">
          <Image src={ellipse} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
