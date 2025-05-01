import { IPrice } from "@/lib/interfaces";
import { Button } from "@mantine/core";
import Link from "next/link";


export interface PricingItemProps {
  active: boolean;
  price: IPrice;
  className?: string;
}

const PricingItem: React.FC<PricingItemProps> = ({ className, active, price }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <div
      className={`text-center pt-31 pb-47 rounded-[12px] ${
        active ? "bg-mauvelous" : "bg-white border border-[#E5EAF1]"
      }`}
    >
      <div className="px-59">
        <h5
          className={`text-[20px] leading-32 tracking-[-0.03px] ${
            active ? "text-white" : "text-mirage"
          }`}
        >
          {price.name}
        </h5>
        <p
          className={`mt-2 text-[16px] leading-24 font-medium ${
            active ? "text-white" : ""
          }`}
        >
          Customer Reach & Budget
        </p>
        <p
          className={`mt-25 text-[48px] leading-60 font-bold tracking-[-2px] ${
            active ? "text-white" : "text-mirage"
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
            active ? "text-white" : "text-[#E5EAF1]"
        }`}
      />
      <div className="px-59">
        <div
          className={`mt-32 space-y-16 ${active ? "text-white" : ""}`}
        >
          {price.features?.map((featureItem, f_index) => (
            <p className="text-[16px] leading-24 font-medium" key={f_index}>
              {featureItem}
            </p>
          ))}
        </div>
        <Button
          component={Link}
          href="/purchase"
          className={`mt-38 min-h-56 w-full text-[14px] leading-20 tracking-[-0.02em] font-semibold ${
            active
              ? "text-mirage hover:text-mirage-800 bg-white hover:bg-amber-50"
              : "bg-shakespeare hover:bg-shakespeare-700 text-white"
          }`}
        >
          Purchase Now
        </Button>
      </div>
    </div>
  );
};

export default PricingItem;
