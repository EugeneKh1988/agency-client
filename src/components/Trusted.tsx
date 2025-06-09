import Container from "@/components/Container";
import Image from "next/image";

interface TrustedProps {
  className?: string;
}

const logos = [
    "/layers.svg",
    "/sisyphus.svg",
    "/circooles.svg",
    "/catalog.svg",
    "/quotient.svg"
];

const Trusted: React.FC<TrustedProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-center text-[24px] leading-35 text-mauvelous font-semibold tracking-[-1px]">
        Trusted by
      </h5>
      <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-50 md:gap-x-64 gap-y-16 justify-items-center md:justify-items-start">
        {logos.map((logo, index) => (
          <Image
            src={logo || "#"}
            width={183}
            height={48}
            alt={"Logo"}
            className="max-w-183"
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default Trusted;
