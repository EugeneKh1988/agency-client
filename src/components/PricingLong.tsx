import Container from "@/components/Container";
import { prices } from "./Pricing";
import PricingItem from "./PricingItem";

export interface PricingLongProps {
  className?: string;
}

const PricingLong: React.FC<PricingLongProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
        Pricing
      </h5>
      <h2 className="mx-auto md:max-w-478 mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        Benefits That You Can Feel Immediately
      </h2>
      <div className="mt-39 lg:mt-48 flex flex-col lg:flex-row gap-24 items-center lg:justify-center">
        {prices.map((price, index) => (
          <PricingItem
            active={index % 2 == 1 ? true : false}
            price={price}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default PricingLong;
