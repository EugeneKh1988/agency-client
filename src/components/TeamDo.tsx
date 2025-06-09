import Container from "@/components/Container";
import { IService } from "@/lib/interfaces";
import SvgIcon from "./SvgIcon";

interface TeamDoProps {
  className?: string;
}

const features: IService[] = [
    {
        title: "Planning",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        iconName: "todoList",
    },
    {
        title: "Validation",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        iconName: "correction",
    },
    {
        title: "Decition",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        iconName: "decision",
    }
];

const TeamDo: React.FC<TeamDoProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
        What We Do
      </h5>
      <h2 className="mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        What Our Team Do
      </h2>
      <div className="lg:divide-x lg:divide-[#E5EAF1] mt-48 lg:mt-54 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-50 px-50 py-20 lg:py-45 border border-[#E5EAF1] rounded-[12.98px]">
        {features.map((feature, index) => (
          <div key={index} className="lg:pr-60 lg:last:pr-0">
            <div className="flex justify-center items-center size-64 bg-mauvelous/10 rounded-full">
              <SvgIcon
                iconName={feature.iconName || ""}
                className="size-36 text-mauvelous"
              />
            </div>
            <div className="max-w-286">
              <h2 className="mt-77 text-[24px] leading-35 font-semibold text-mirage tracking-[-0.01em]">
                {feature.title}
              </h2>
              <p className="mt-12 text-[18px] leading-32">
                {feature.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TeamDo;
