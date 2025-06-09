import Container from "@/components/Container";
import { IPrice } from "@/lib/interfaces";
import { Button } from "@mantine/core";
import Link from "next/link";
import PricingItem from "./PricingItem";

interface PricingProps {
  className?: string;
}

export const prices: IPrice[] = [
  {
    name: "Individual",
    price: 39,
    features: ["1 Service", "Free Platform Access", "9-5PM Customer Support"],
    purchaseLink: "#",
  },
  {
    name: "Business",
    price: 49,
    features: ["1 Service", "Free Platform Access", "24/7 Customer Support"],
    purchaseLink: "#",
  },
  {
    name: "Corporate",
    price: 199,
    features: ["2 Services", "Free Platform Access", "24/7 Customer Support"],
    purchaseLink: "#",
  },
];

const Pricing: React.FC<PricingProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container
      className={`flex flex-col lg:flex-row gap-39 lg:gap-62 mt-100 md:mt-150 items-start ${classNameValue}`}
    >
      <div className="lg:max-w-478">
        <h5 className="text-[18px] leading-28 text-mauvelous font-medium">
          Pricing
        </h5>
        <h2 className="mt-8 md:mt-16 text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
          Benefits That You Can Feel Immediately
        </h2>
        <p className="mt-16 md:mt-32 text-[18px] leading-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
          minim veniam, quis nostrud exercitation dolore magna
        </p>
        <Button
          variant="filled"
          component={Link}
          href="/pricing"
          className="hidden lg:inline-block mt-48 min-h-56 px-28 text-black-haze bg-shakespeare hover:bg-shakespeare-700 text-[14px] leading-20 tracking-[-0.02em] font-semibold"
        >
          See All Pricing
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row gap-24 self-center lg:self-start">
        {prices.slice(1, prices.length).map((price, index) => (
          <PricingItem active={index % 2 == 0 ? true : false} price={price} key={index} />
        ))}
      </div>
      <div className="text-center w-full lg:hidden">
        <Button
          variant="filled"
          component={Link}
          href="/pricing"
          className="min-h-56 px-28 text-black-haze bg-shakespeare hover:bg-shakespeare-700 text-[14px] leading-20 tracking-[-0.02em] font-semibold"
        >
          See All Pricing
        </Button>
      </div>
    </Container>
  );
};

export default Pricing;
