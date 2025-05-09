import Footer from "@/components/Footer";
import { team } from "@/components/Hero";
import Nav from "@/components/Nav";
import { Button } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
    return (
      <>
        <Nav activeMenuName="404" />
        <div className="flex gap-30 justify-center relative mt-64">
          {new Array(0, 1).map((index) => (
            <div
              className="flex gap-16 rotate-[5deg] mt-50 xl:mt-0"
              key={index}
            >
              {team.map((teamCol, colNum) => (
                <div className="flex flex-col gap-20" key={colNum}>
                  {teamCol.map((teamItem, index) => (
                    <div className="relative group" key={`${colNum}_${index}`}>
                      <Image
                        src={teamItem.imageHref}
                        width={191}
                        height={254}
                        alt={teamItem.name}
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