import { Breadcrumbs } from "@mantine/core";
import Link from "next/link";
import React from "react";
import Container from "./Container";


const BreadCrumbs = ({
  links,
  className,
}: {
  links: {name: string, href?: string}[],
  className?: string;
}) => {
  const classNameValue = className ? className : '';
  return (
    <div className={`bg-zircon ${classNameValue}`}>
      <Container className="flex flex-col items-center pt-54 pb-66 md:pt-80 md:pb-98">
        <h1 className="text-[48px] leading-66 font-semibold text-mirage tracking-[-2px] md:text-[60px] md:leading-72 md:tracking-[-0.04em]">{links[links.length - 1].name}</h1>
        <div className="text-[18px] leading-32 mt-12 md:mt-24">
          <Breadcrumbs separatorMargin="6px">
            {links.map((item, index) => (
              <React.Fragment key={index}>
                {item.href ? (
                  <Link href={item.href}>{item.name}</Link>
                ) : (
                  <p>{item.name}</p>
                )}
              </React.Fragment>
            ))}
          </Breadcrumbs>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumbs;
