import Container from "@/components/Container";
import worker from "../../public/team3.jpg";
import Image from "next/image";
import { IStat } from "@/lib/interfaces";

export interface GrowthProps {
  className?: string;
}

const stat: IStat[] = [
  {
    title: "320+",
    description: "Complate Projects"
  },
  {
    title: "25+",
    description: "Cooperation company"
  },
  {
    title: "120+",
    description: "Happy Clients"
  },
];

const Growth: React.FC<GrowthProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <div className="flex flex-col lg:flex-row gap-32 lg:gap-83 lg:justify-center">
        <div className="relative group shrink-0 self-center lg:self-start">
          <Image
            src={worker}
            width={328}
            height={468}
            alt="Worker"
            className="rounded-[12px]"
          />
          <div className="hidden group-hover:block absolute left-1/3 -translate-x-1/3 bottom-0 h-80 px-20 pb-5 rotate-2">
            <div className="bg-white p-12 rounded-[8px] text-center">
              <h3 className="text-[14px] leading-20 font-semibold tracking-[-0.02em] text-mirage">
                Albert William
              </h3>
              <p className="mt-5 text-[14px] leading-20 font-semibold tracking-[-0.02em]">
                Project Manager
              </p>
            </div>
          </div>
        </div>
        <div className="lg:max-w-648">
          <h2 className="text-[32px] md:text-[48px] leading-52 md:leading-68 font-semibold tracking-[-1px] text-mirage">
            “Maximize Your Reach with Marketing - Unlock Your Business's Growth
            Potential!"
          </h2>
          <p className="text-[18px] leading-32 mt-32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
          <h6 className="mt-28 md:mt-33 text-[24px] leading-35 tracking-[-1px] font-semibold text-shakespeare">
            Albert William
          </h6>
          <p className="mt-4 text-[16px] leading-24">Project Manager / CEO</p>
        </div>
      </div>
      {/* stat block */}
      <div className="mt-100 md:mt-150 bg-[#FEF3F5] rounded-[32px] py-90 md:py-69 px-10 md:px-168 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-16">
        {stat.map((statItem, index) => (
          <div key={index} className="text-center">
            <h1 className="text-[48px] leading-66 font-semibold tracking-[-2px] text-mirage">
              {statItem?.title}
            </h1>
            <p className="mt-16 text-[18px] leading-32">
              {statItem?.description}
            </p>
          </div>
        ))}
      </div>
      {/* visions block */}
      <div className="mt-100 md:mt-150">
        <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
          Our Visions
        </h5>
        <h2 className="mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
          Provide The Creative Solutions
        </h2>
        <p className="mt-32 text-center text-[18px] leading-32 lg:max-w-978 lg:mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna</p>
      </div>
    </Container>
  );
};

export default Growth;
