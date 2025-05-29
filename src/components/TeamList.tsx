import Container from "@/components/Container";
import { ITeam, ITeamItem } from "@/lib/interfaces";
import LaravelImage from "./LaravelImage";

export interface TeamListProps {
  className?: string;
}

const TeamList: React.FC<TeamListProps> = async ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  
  const teamResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/teams?skip=0&take=10`, {next: {tags: ['team']}});
  const team: ITeam = await teamResponse.json();
  const flattenTeamArray: ITeamItem[] = team && team.workers ? team.workers : [];

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
        Our Team
      </h5>
      <h2 className="mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        Meet With Professional Team
      </h2>
      <div className="mt-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-items-center justify-center gap-32 md:gap-x-47 md:gap-y-45">
        {flattenTeamArray.map((teamItem, index) => (
          <div
            key={index}
            className={`block hover:scale-95 relative group ${
              index % 2 == 0 ? "rotate-[2.5deg]" : "rotate-[-1.2deg]"
            }`}
          >
            <LaravelImage
              src={`storage/${teamItem.imageHref}`}
              width={315}
              height={420}
              alt={teamItem?.name || ""}
              className="rounded-[12px]"
            />
            <div className="hidden group-hover:block absolute left-1/3 -translate-x-[10%] bottom-0 h-80 px-20 pb-5 rotate-2">
              <div className="bg-white p-12 rounded-[8px] text-center min-w-[146px]">
                <h3 className="text-[14px] leading-20 font-semibold tracking-[-0.02em] text-mirage">
                  {teamItem?.name}
                </h3>
                <p className="mt-5 text-[14px] leading-20 font-semibold tracking-[-0.02em]">
                  {teamItem?.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TeamList;
