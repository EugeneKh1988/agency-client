"use client";

import Container from "@/components/Container";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@mantine/core";
import Image from "next/image";
import { serviceItems } from "./Services";
import SvgIcon from "./SvgIcon";
import React from "react";
import { useSearchParams } from "next/navigation";

export interface ServiceTabsProps {
  active?: string;
  className?: string;
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({ className, active }) => {
  const classNameValue = className ? `${className}` : "";
  const searchParams = useSearchParams();
 
  const activeTab = searchParams.get('tab');

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <Tabs
        orientation="vertical"
        defaultValue={activeTab ? activeTab : "plan"}
        classNames={{
          root: "flex flex-col lg:flex-row gap-80 lg:gap-113",
          list: "lg:min-w-293 before:border-none space-y-24",
          tab: "justify-between bg-white data-active:bg-mauvelous text-lynch data-active:text-white py-14 px-26 border-none shadow-[0_4px_64px_0_#23286914] rounded-none data-active:rounded-[8px]",
        }}
      >
        <TabsList>
          {serviceItems.map((serviceItem, index) => (
            <TabsTab
              value={serviceItem.tabName || `${index}`}
              key={index}
              rightSection={
                <SvgIcon iconName="chevronRight" className="size-20" />
              }
            >
              {serviceItem.title}
            </TabsTab>
          ))}
        </TabsList>
        {serviceItems.map((serviceItem, index) => (
          <TabsPanel value={serviceItem.tabName || `${index}`} key={index}>
            <h5 className="text-[18px] leading-32 text-mauvelous">
              Detail Service
            </h5>
            <h2 className="mt-12 mb-24 lg:mb-35 text-[32px] lg:text-[48px] leading-52 lg:leading-66 font-semibold tracking-[-0.02] text-mirage">
              {serviceItem.title}
            </h2>
            {serviceItem.detail?.map((detailItem, detailIndex) => (
              <React.Fragment key={`${index}_${detailIndex}`}>
                {detailItem.type == "text" ? (
                  <p className="text-[18px] leading-32">{detailItem.body}</p>
                ) : null}
                {detailItem.type == "image" ? (
                  <Image
                    src={detailItem.body}
                    width={791}
                    height={420}
                    alt={serviceItem.title || ""}
                    className="rounded-[24px] my-24 lg:my-64"
                  ></Image>
                ) : null}
              </React.Fragment>
            ))}
          </TabsPanel>
        ))}
      </Tabs>
    </Container>
  );
};

export default ServiceTabs;
