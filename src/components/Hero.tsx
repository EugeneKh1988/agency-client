import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { Button, Rating } from "@mantine/core";
import { IComment, ITeam, ITeamItem } from "@/lib/interfaces";
import LaravelImage from "./LaravelImage";
import { to2DArray } from "@/lib/utils";

export interface HeroProps {
  className?: string;
}

const userComment: IComment = {
    username: "Sulli Kiri",
    position: "CEO Dream Team",
    avatarHref: "/user1Avatar.png",
    rateValue: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam."
};

const Hero: React.FC<HeroProps> = async ({ className, }) => {
  const classNameValue = className ? `${className}` : "";

  const teamResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/teams?skip=0&take=6`, {next: {tags: ['team']}});
  const team: ITeam = await teamResponse.json();
  const workers: ITeamItem[] = team && team.workers ? team.workers : [];
  const workers2D: ITeamItem[][] = to2DArray(workers);

  return (
    <Container className={`mt-80 xl:mt-70 ${classNameValue}`}>
      <div className="flex flex-col xl:flex-row">
        <div>
          <h1 className="xl:mt-30 text-[48px] xl:text-[60px] text-mirage leading-66 xl:leading-72 font-semibold tracking-[-0.02em] lg:max-w-675">
            Creative Digital Agency That Help You Go Ahead
          </h1>
          <p className="text-[18px] leading-32 text-lynch mt-24 lg:max-w-629">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
          <Button
            variant="filled"
            component={Link}
            href="/contact"
            className="mt-32 min-h-56 px-28 text-black-haze bg-shakespeare hover:bg-shakespeare-700 text-[14px] leading-20 tracking-[-0.02em] font-semibold"
          >
            Contact Us
          </Button>
          <Rating
            value={userComment.rateValue || 0}
            readOnly
            className="mt-48 xl:mt-80"
          />
          <p className="mt-18 text-[14px] leading-30 xl:max-w-544">
            {userComment.comment}
          </p>
          <div className="flex gap-15 mt-24">
            <Image
              src={userComment.avatarHref || "#"}
              width={50}
              height={50}
              alt={userComment.username || "User avatar"}
            />
            <div>
              <h3 className="text-[18px] leading-24 font-bold tracking-[-0.05em] text-mirage">
                {userComment.username}
              </h3>
              <p className="mt-5 text-[14px] leading-20 font-semibold tracking-[-0.02em]">
                {userComment.position}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex gap-16 rotate-[5deg] mt-50 xl:mt-0">
          {workers2D?.map((teamCol, colNum) => (
            <div className="flex flex-col gap-20" key={colNum}>
              {teamCol.map((teamItem, index) => (
                <div className="relative group" key={`${colNum}_${index}`}>
                  <LaravelImage
                    src={`storage/${teamItem?.imageHref}`}
                    width={191}
                    height={254}
                    alt={teamItem?.name || ""}
                    className={`rounded-[12px] ${colNum == 1 && index == 0 ? 'mt-60': ''}`}
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
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Hero;
