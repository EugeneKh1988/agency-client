import Container from "@/components/Container";
import Image from "next/image";
import SvgIcon from "./SvgIcon";
import { serviceItems } from "./Services";
import React from "react";

export interface DescriptionServicesProps {
  className?: string;
}


const DescriptionServices: React.FC<DescriptionServicesProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
        Our Service
      </h5>
      <h2 className="mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        What Can We Bring for You
      </h2>
      <div className="mt-32 md:mt-73 flex flex-col gap-48">
        {serviceItems.map((serviceItem, index) => (
          <div className={`flex flex-col justify-start lg:justify-between gap-32  ${index % 2 == 0 ? 'lg:flex-row': 'lg:flex-row-reverse'}`} key={index}>
            <Image
              src={serviceItem.imageHref || ""}
              width={509}
              height={332}
              alt={serviceItem.title || ""}
              className="rounded-[24px] max-w-509"
            />
            <div className="max-w-514" key={index}>
              <SvgIcon
                iconName={serviceItem?.iconName || ""}
                className="size-40 text-mauvelous"
              />
              <h3 className="mt-32 md:mt-16 text-[24px] md:text-[48px] leading-35 md:leading-66 tracking-[-0.01em] font-semibold text-mirage">
                {serviceItem?.title}
              </h3>
              <p className="text-[18px] leading-32 mt-12 md:mt-24">{serviceItem?.innerText}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DescriptionServices;
