import Container from "@/components/Container";
import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Tabs, TabsList, TabsPanel, TabsTab } from "@mantine/core";
import { answers } from "./Faq";
import { IFaq } from "@/lib/interfaces";

interface FaqTabsProps {
  className?: string;
}

const FaqTabs: React.FC<FaqTabsProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  

  const groups = () => {
    const groups_: string[] = ["all"];
    answers.forEach((answer) => {
      if (answer.group && !groups_.includes(answer.group)) {
        groups_.push(answer.group);
      }
    });
    return groups_;
  };

  const answersByGroup = (group: string) => {
    if (group == "all") {
      return answers;
    }
    if (group) {
      return answers.filter((answer) => answer.group == group);
    }
    return [];
  };

  const accordionItems = (items:IFaq[]) => {
    return items.map((faqItem, index) => (
      <AccordionItem
        key={index}
        value={faqItem?.question || `${index}`}
        className="border-b border-b-[#E5EAF1]"
      >
        <AccordionControl className="text-[18px] leading-24 tracking-[-0.5px] font-bold text-mirage">
          {faqItem?.question || ""}
        </AccordionControl>
        <AccordionPanel className="text-[18px] leading-32">
          {faqItem?.answer || ""}
        </AccordionPanel>
      </AccordionItem>
    ));
  };

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <div className="mx-auto md:max-w-724">
        <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
          Common Questions
        </h5>
        <h2 className="mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
          Frequently Asked Questions
        </h2>
        <Tabs
          defaultValue="all"
          classNames={{
            root: "mt-24 md:mt-32",
            list: "before:border-none justify-center gap-16 md:gap-32 flex-wrap md:flex-nowrap",
            tab: "capitalize justify-center bg-white data-active:bg-mauvelous text-lynch data-active:text-white py-14 px-26 border-none rounded-none data-active:rounded-[8px] shadow-[0_4px_64px_0_#23286914]",
          }}
        >
          <TabsList>
            {groups().map((group, index) => (
              <TabsTab value={group || `${index}`} key={index}>
                {group}
              </TabsTab>
            ))}
          </TabsList>
          {groups().map((group, index) => (
            <TabsPanel value={group || `${index}`} key={index}>
              <Accordion
                classNames={{ root: "mt-32 md:mt-41", chevron: "size-20" }}
                chevronPosition="left"
                chevronSize={20}
              >
                {accordionItems(answersByGroup(group))}
              </Accordion>
            </TabsPanel>
          ))}
        </Tabs>
      </div>
    </Container>
  );
};

export default FaqTabs;
