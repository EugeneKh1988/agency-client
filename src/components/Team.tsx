import Container from "@/components/Container";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Link from "next/link";
import { ITeam, ITeamItem } from "@/lib/interfaces";
import LaravelImage from "./LaravelImage";

interface TeamProps {
  className?: string;
}

const Team: React.FC<TeamProps> = async ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  
  const teamResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/teams?skip=0&take=10`, {next: {tags: ['team']}});
  const team: ITeam = await teamResponse.json();
  const flattenTeamArray: ITeamItem[] = team && team.workers ? team.workers : [];

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-[18px] leading-28 text-mauvelous font-medium">
        Meet the team
      </h5>
      <h2 className="mt-8 md:mt-16 text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        Professional Creative Team
      </h2>
      <Carousel slideSize={200} slideGap={24} align="start" className="mt-25" withControls={false} classNames={{viewport: "overflow-visible"}}>
        {flattenTeamArray && flattenTeamArray.map((teamItem, index) => (
          <CarouselSlide key={index}>
            <Link href="/team" className={`block hover:scale-95 relative group ${index % 2 == 0 ? 'rotate-[2.5deg]': 'rotate-[-1.2deg]'}`}>
              <LaravelImage
                src={`storage/${teamItem.imageHref}`}
                width={191}
                height={254}
                alt={teamItem?.name || ""}
                className="rounded-[12px]"
              />
              <div className="hidden group-hover:block absolute left-0 bottom-0 right-0 h-80 px-20 pb-5">
                <div className="bg-white p-12 rounded-[8px] text-center">
                  <h3 className="text-[14px] leading-20 font-semibold tracking-[-0.02em] text-mirage">
                    {teamItem?.name}
                  </h3>
                  <p className="mt-5 text-[14px] leading-20 font-semibold tracking-[-0.02em]">
                    {teamItem?.position}
                  </p>
                </div>
              </div>
            </Link>
          </CarouselSlide>
        ))}
      </Carousel>
    </Container>
  );
};

export default Team;
