import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Button } from "@mantine/core";
import Link from "next/link";
import { ITeam, ITeamItem } from "@/lib/interfaces";
import LaravelImage from "@/components/LaravelImage";
import { to2DArray } from "@/lib/utils";

export default async function Custom404() {
  const teamResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/teams?skip=0&take=6`,
    { next: { tags: ["team"] } }
  );
  const team: ITeam = await teamResponse.json();
  const workers: ITeamItem[] = team && team.workers ? team.workers : [];
  const workers2D: ITeamItem[][] = to2DArray(workers);
  
  return (
    <>
      <Nav activeMenuName="404" />
      <div className="flex gap-30 justify-center relative mt-64">
        {[0, 1].map((index) => (
          <div className="flex gap-16 rotate-[5deg] mt-50 xl:mt-0" key={index}>
            {workers2D?.map((teamCol, colNum) => (
              <div className="flex flex-col gap-20" key={colNum}>
                {teamCol.map((teamItem, index) => (
                  <div className="relative group" key={`${colNum}_${index}`}>
                    <LaravelImage
                      src={`storage/${teamItem?.imageHref}`}
                      width={191}
                      height={254}
                      alt={teamItem?.name || ""}
                      className={`grayscale opacity-30 rounded-[12px] ${
                        colNum == 1 && index == 0 ? "mt-60" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        <div className="mt-64 md:mt-170 mx-auto px-20 md:max-w-589 text-center absolute">
          <h1 className="text-[100px] leading-[100%] tracking-[-0.04em] text-mauvelous font-semibold">
            404
          </h1>
          <h5 className="capitalize mt-12 md:mt-0 text-[24px] md:text-[32px] leading-35 md:leading-52 tracking-[-1px] md:tracking-[-2px] text-mirage font-semibold">
            Page Not Found
          </h5>
          <p className="mt-19 md:mt-26 text-[14px] md:text-[18px] leading-30 md:leading-32">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable
          </p>
          <Button
            component={Link}
            href="/"
            className="px-52 mt-19 md:mt-32 min-h-56 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white"
          >
            Back to Home
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}