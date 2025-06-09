import Container from "@/components/Container";
import SvgIcon from "@/components/SvgIcon";
import { IBlock } from "@/lib/interfaces";
import React from "react";

const terms: IBlock[] = [
  {
    type: "text",
    value: "Dui sed elementum, ornare etiam mauris purus eu quam. Commodo posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et. Adipiscing consequat amet, at mattis magna amet, urna duis."
  },
  {
    type: "title",
    value: "Licensing Policy"
  },
  {
    type: "text",
    value: "Lobortis in cras orci, ultricies egestas rhoncus integer. Orci erat adipiscing massa sed non. Vitae quisque accumsan tellus convallis enim, at lacus, faucibus vel. Viverra ridiculus etiam pulvinar convallis sed. Metus enim, in iaculis eu vitae laoreet eget. Lacinia mauris vulputate tortor, quis auctor tortor. Lacus, nullam enim elementum."
  },
  {
    type: "subtitle",
    value: "Pellentesque dictumst amet cras eget. Nunc elementum, fames non venenatis:"
  },
  {
    type: "list",
    value: [
      "Dui sed elementum, ornare etiam mauris purus eu quam. Commodo posuere duis pellentesque vel etiam.",
      "Fames senectus curabitur arcu, viverra interdum. Cras sit lectus enim sed arcu cras urna magna.",
      "Adipiscing enim phasellus non eros, viverra tempus sit adipiscing. Sit enim at velit arcu risus.",
      "At eget fringilla gravida in turpis risus vitae diam. Diam ligula aliquam facilisis molestie pretium arcu consectetur."
    ]
  },
  {
    type: "subtitle",
    value: "Tempor, aliquam egestas faucibus euismod orci, mattis faucibus:"
  },
  {
    type: "list",
    value: [
      "Id pulvinar donec nulla pellentesque sollicitudin congue. Nam condimentum cum nunc at sapien.",
      "Consequat pellentesque viverra et vel tempor, facilisis. Interdum dolor mi leo aenean integer commodo lectus.",
    ]
  },
  {
    type: "title",
    value: "Additional Policy"
  },
  {
    type: "text",
    value: "Lobortis in cras orci, ultricies egestas rhoncus integer. Orci erat adipiscing massa sed non. Vitae quisque accumsan tellus convallis enim, at lacus, faucibus vel. Viverra ridiculus etiam pulvinar convallis sed. Metus enim, in iaculis eu vitae laoreet eget. Lacinia mauris vulputate tortor, quis auctor tortor. Lacus, nullam enim elementum."
  },
  {
    type: "subtitle",
    value: "Platea diam et viverra morbi consequat interdum sed. Massa fringilla natoque faucibus nulla"
  },
  {
    type: "list",
    value: [
      "Elementum integer fermentum vitae sit gravida. Pellentesque phasellus laoreet in a arcu, dictum.",
      "Donec libero tristique morbi morbi tellus est amet vel. Facilisis interdum feugiat vel orci.",
    ]
  },
  {
    type: "subtitle",
    value: "Metus, sodales sit risus, orci ultricies gravida ut. Quisque quisque lorem euismod vulputat."
  },
  {
    type: "text",
    value: "Dui sed elementum, ornare etiam mauris purus eu quam. Commodo posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et. Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor ut in. "
  },
];

export default function PolicyPage() {
  return (
    <>
      {/* title */}
      <div className="bg-zircon ">
        <Container className="flex flex-col items-center pt-54 pb-66 md:pt-80 md:pb-98">
          <h1 className="text-[48px] leading-66 font-semibold text-mirage tracking-[-2px] md:text-[60px] md:leading-72 md:tracking-[-0.04em]">
            Privacy Policy
          </h1>
          <p className="text-[18px] leading-32 mt-12 md:mt-24">
            Last Update Dec 18, 2022
          </p>
        </Container>
      </div>
      <Container>
        <div className="mt-81 md:mt-98 lg:max-w-1037">
          {terms.map((block, index) => (
            <React.Fragment key={index}>
              {block.type == "title" ? <h1 className="mt-42 mb-26 md:mb-20 text-[32px] md:text-[48px] leading-52 md:leading-66 text-mirage tracking-[-2px] font-semibold">{block.value}</h1> : null}
              {block.type == "subtitle" ? <h4 className="mt-42 mb-6 md:mb-24 text-[16px] md:text-[20px] leading-24 md:leading-32 text-mirage tracking-[-0.3px] font-semibold">{block.value}</h4> : null}
              {block.type == "text" ? <p className="text-[18px] leading-32">{block.value}</p> : null}
              {block.type == "list" && Array.isArray(block.value) ? (
                <ul>
                  {block.value.map((listItem, index) => (
                    <li key={index} className="flex gap-12 items-center">
                      <SvgIcon iconName="checkCircle" className="size-20 text-mauvelous shrink-0" />
                      <p className="text-[18px] leading-32">{listItem}</p></li>
                  ))}
                </ul>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </>
  );
}
