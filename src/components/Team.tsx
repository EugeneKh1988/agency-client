import Container from "@/components/Container";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Image from "next/image";
import { team } from "./Hero";

export interface TeamProps {
  className?: string;
}

const Team: React.FC<TeamProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  const flattenTeamArray = team.flat();

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-[18px] leading-28 text-mauvelous font-medium">
        Meet the team
      </h5>
      <h2 className="mt-8 md:mt-16 text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        Professional Creative Team
      </h2>
      <Carousel slideSize={180} slideGap={24} align="start" className="mt-25" withControls={false}>
        {flattenTeamArray.map((teamItem, index) => (
          <CarouselSlide key={index}>
            <div className={`hover:scale-95 relative group ${index % 2 == 0 ? 'rotate-[2.5deg]': 'rotate-[-1.2deg]'}`}>
              <Image
                src={teamItem.imageHref}
                width={191}
                height={254}
                alt={teamItem.name}
                className="rounded-[12px]"
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
          </CarouselSlide>
        ))}
      </Carousel>
    </Container>
  );
};

export default Team;
