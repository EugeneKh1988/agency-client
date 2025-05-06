import Container from "@/components/Container";
import { IPosition } from "@/lib/interfaces";
import SvgIcon from "./SvgIcon";

export interface AvailablePositionsProps {
  className?: string;
}

export const positions: IPosition[] = [
  {
    iconName: "graph",
    name: "UI Designer",
    description: "Remote / Full Time",
  },
  {
    iconName: "work",
    name: "Project Manager",
    description: "Remote / Full Time",
  },
  {
    iconName: "activity",
    name: "Backend Dev",
    description: "Remote / Full Time",
  },
  {
    iconName: "heart",
    name: "Frontend Dev",
    description: "Remote / Full Time",
  },
];

const AvailablePositions: React.FC<AvailablePositionsProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-center md:text-left text-[18px] leading-28 text-mauvelous font-medium">
        Let’s Join us
      </h5>
      <h2 className="text-center md:text-left mt-8 md:mt-16 text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        Available Position
      </h2>
      <div className="mt-32 md:mt-42 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-52 justify-items-center md:justify-items-start">
        {positions.map((position, index) => (
          <div className={`bg-[#FEF3F5] max-w-258 rounded-[10px] px-20 py-16 flex gap-19 items-center ${index % 2 == 0 ? 'rotate-[1.11deg]' : 'rotate-[-2.25deg]'}`} key={index}>
            <SvgIcon iconName={position.iconName || ""} className="size-40 text-mauvelous" />
            <div>
              <h5 className="text-[20px] leading-32 font-semibold text-mirage tracking-[-0.3px]">{position.name}</h5>
              <p className="text-[14px] leading-30">{position.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AvailablePositions;
