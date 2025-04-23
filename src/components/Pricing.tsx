import Container from "@/components/Container";
import { IPrice } from "@/lib/interfaces";
import { Button } from "@mantine/core";
import Link from "next/link";

export interface PricingProps {
  className?: string;
}

const prices: IPrice[] = [
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
        {prices.map((price, index) => (
          <div
            key={index}
            className={`text-center pt-31 pb-47 rounded-[12px] ${
              index % 2 == 0
                ? "bg-mauvelous"
                : "bg-white border border-[#E5EAF1]"
            }`}
          >
            <div className="px-59">
              <h5
                className={`text-[20px] leading-32 tracking-[-0.03px] ${
                  index % 2 == 0 ? "text-white" : "text-mirage"
                }`}
              >
                {price.name}
              </h5>
              <p
                className={`mt-2 text-[16px] leading-24 font-medium ${
                  index % 2 == 0 ? "text-white" : ""
                }`}
              >
                Customer Reach & Budget
              </p>
              <p
                className={`mt-25 text-[48px] leading-60 font-bold tracking-[-2px] ${
                  index % 2 == 0 ? "text-white" : "text-mirage"
                }`}
              >
                ${price.price}
                <span className="text-[16px] leading-26 font-normal tracking-normal">
                  /Month
                </span>
              </p>
            </div>
            <hr
              className={`mt-19 h-1 ${
                index % 2 == 0 ? "text-white" : "text-[#E5EAF1]"
              }`}
            />
            <div className="px-59">
              <div
                className={`mt-32 space-y-16 ${
                  index % 2 == 0 ? "text-white" : ""
                }`}
              >
                {price.features?.map((featureItem, f_index) => (
                  <p
                    className="text-[16px] leading-24 font-medium"
                    key={f_index}
                  >
                    {featureItem}
                  </p>
                ))}
              </div>
              <Button
                component={Link}
                href="/purchase"
                className={`mt-38 min-h-56 w-full text-[14px] leading-20 tracking-[-0.02em] font-semibold ${
                  index % 2 == 0
                    ? "text-mirage hover:text-mirage-800 bg-white hover:bg-amber-50"
                    : "bg-shakespeare hover:bg-shakespeare-700 text-white"
                }`}
              >
                Purchase Now
              </Button>
            </div>
          </div>
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
