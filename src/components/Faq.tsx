import Container from "@/components/Container";
import { IFaq, IImage } from "@/lib/interfaces";
import { Accordion, AccordionControl, AccordionItem, AccordionPanel } from "@mantine/core";
import Image from "next/image";

export interface FaqProps {
  className?: string;
}

const answers: IFaq[] = [
  {
    question: "Lorem ipsum dolor sit amet, consect etur adipiscing elit 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consect etur adipiscing elit 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consect etur adipiscing elit 3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations.",
  },
];

const images: IImage[] = [
  {
    name: "faq image",
    href: "/faq1.png",
  },
  {
    name: "faq image",
    href: "/faq2.png",
  },
  {
    name: "faq image",
    href: "/faq3.png",
  },
];

const Faq: React.FC<FaqProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  const items = () => {
    return answers.map((faqItem, index) => (
      <AccordionItem key={index} value={faqItem?.question || `${index}`} className="border-b border-b-[#E5EAF1]">
        <AccordionControl className="text-[18px] leading-24 tracking-[-0.5px] font-bold text-mirage">{faqItem?.question || ""}</AccordionControl>
        <AccordionPanel className="text-[18px] leading-32">{faqItem?.answer || ""}</AccordionPanel>
      </AccordionItem>
    ));
  };
  
  return (
    <Container
      className={`flex flex-col xl:flex-row gap-50 2xl:gap-97 mt-100 md:mt-150 items-start ${classNameValue}`}
    >
      <div className="lg:max-w-540">
        <h5 className="text-[18px] leading-28 text-mauvelous font-medium">
          Common Questions
        </h5>
        <h2 className="mt-8 md:mt-16 text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
          Frequently Asked Questions
        </h2>
        <Accordion
          classNames={{ root: "mt-32 md:mt-41", chevron: "size-20" }}
          chevronPosition="left"
          chevronSize={20}
        >
          {items()}
        </Accordion>
      </div>
      <div className="hidden md:flex gap-10 self-center xl:self-start">
        {images.map((imageItem, index) => (
          <Image
            key={index}
            src={imageItem.href || "#"}
            width={191}
            height={254}
            alt={imageItem.name || ""}
            className="rounded-[16px]"
          />
        ))}
      </div>
    </Container>
  );
};

export default Faq;
