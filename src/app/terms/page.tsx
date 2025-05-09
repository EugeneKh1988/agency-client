import Container from "@/components/Container";
import { IBlock } from "@/lib/interfaces";
import React from "react";

const terms: IBlock[] = [
  {
    type: "title",
    value: "General Information"
  },
  {
    type: "text",
    value: "Dui sed elementum, ornare etiam mauris purus eu quam. Commodo posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et. Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor ut in. "
  },
  {
    type: "subtitle",
    value: "1. Terms"
  },
  {
    type: "text",
    value: "Dui sed elementum, ornare etiam mauris purus eu quam. Commodo posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et. Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor ut in. "
  },
  {
    type: "subtitle",
    value: "2. User License"
  },
  {
    type: "text",
    value: "Dui sed elementum, ornare etiam mauris purus eu quam. Commodo posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et. Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor ut in. "
  },
  {
    type: "subtitle",
    value: "3. Information General"
  },
  {
    type: "text",
    value: "Dui sed elementum, ornare etiam mauris purus eu quam. Commodo posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et. Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor ut in. "
  },
];

export default function TermsPage() {
  return (
    <>
      {/* title */}
      <div className="bg-zircon ">
        <Container className="flex flex-col items-center pt-54 pb-66 md:pt-80 md:pb-98">
          <h1 className="text-[48px] leading-66 font-semibold text-mirage tracking-[-2px] md:text-[60px] md:leading-72 md:tracking-[-0.04em]">
            Terms of Conditions
          </h1>
          <p className="text-[18px] leading-32 mt-12 md:mt-24">
            Last Update Dec 18, 2022
          </p>
        </Container>
      </div>
      <Container>
        <div className="mt-81 md:mt-98 md:max-w-895">
          {terms.map((block, index) => (
            <React.Fragment key={index}>
              {block.type == "title" ? <h1 className="pb-4 text-[32px] md:text-[48px] leading-52 md:leading-66 text-mirage tracking-[-2px] font-semibold">{block.value}</h1> : null}
              {block.type == "subtitle" ? <h4 className="mt-48 md:mt-55 text-[24px] md:text-[32px] leading-35 md:leading-52 text-mirage tracking-[-1px] font-semibold">{block.value}</h4> : null}
              {block.type == "text" ? <p className="text-[18px] leading-32 mt-16">{block.value}</p> : null}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </>
  );
}
