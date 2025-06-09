import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@mantine/core";
import { ITeam, ITeamItem } from "@/lib/interfaces";
import LaravelImage from "./LaravelImage";
import { to2DArray } from "@/lib/utils";

interface ExperienceProps {
  className?: string;
}

const Experience: React.FC<ExperienceProps> = async ({ className, }) => {
  const classNameValue = className ? `${className}` : "";

  const teamResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/teams?skip=0&take=6`,
    { next: { tags: ["team"] } }
  );
  const team: ITeam = await teamResponse.json();
  const workers: ITeamItem[] = team && team.workers ? team.workers : [];
  const workers2D: ITeamItem[][] = to2DArray(workers);

  return (
    <Container className={`mt-100 xl:mt-150 ${classNameValue}`}>
      <div className="flex flex-col xl:flex-row gap-80">
        <div className="xl:max-w-521">
          <h5 className="text-[18px] leading-28 text-mauvelous font-medium">
            About us
          </h5>
          <h1 className="mt-16 text-[32px] leading-52 lg:text-[48px] text-mirage lg:leading-66 font-semibold md:tracking-[-2px]">
            We Have 15 Years Of Experience On Creative Digital Agency
          </h1>
          <p className="text-[18px] leading-32 text-lynch mt-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
          <div className="flex gap-38 md:gap-78 mt-26 md:mt-38">
            <div>
              <h6 className="text-[24px] leading-35 font-semibold text-shakespeare tracking-[-1px]">1254+</h6>
              <p className="text-[18px] leading-32 mt-8">Happy Clients</p>
            </div>
            <div>
              <h6 className="text-[24px] leading-35 font-semibold text-shakespeare tracking-[-1px]">3245+</h6>
              <p className="text-[18px] leading-32 mt-8">Project Complated</p>
            </div>
          </div>
          <Button
            variant="filled"
            component={Link}
            href="/service"
            className="mt-38 min-h-56 px-28 text-black-haze bg-shakespeare hover:bg-shakespeare-700 text-[14px] leading-20 tracking-[-0.02em] font-semibold"
          >
            View Service
          </Button>
        </div>
        <div className="hidden sm:flex gap-16 rotate-[5deg] self-center xl:self-start">
          {workers2D?.map((teamCol, colNum) => (
            <div className="flex flex-col gap-20" key={colNum}>
              {teamCol.map((teamItem, index) => (
                <div className="relative group" key={`${colNum}_${index}`}>
                  <LaravelImage
                    src={`storage/${teamItem?.imageHref}`}
                    width={191}
                    height={254}
                    alt={teamItem?.name || ""}
                    className={`rounded-[12px] ${
                      colNum == 1 && index == 0 ? "mt-60" : ""
                    }`}
                  />
                  <div className="hidden group-hover:block absolute left-0 bottom-0 right-0 h-80 px-20 pb-5">
                    <div className="bg-white p-12 rounded-[8px] text-center">
                      <h3 className="text-[14px] leading-20 font-semibold tracking-[-0.02em] text-mirage">
                        {teamItem.name}
                      </h3>
                      <p className="mt-5 text-[14px] leading-20 font-semibold tracking-[-0.02em]">
                        {teamItem.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Experience;
