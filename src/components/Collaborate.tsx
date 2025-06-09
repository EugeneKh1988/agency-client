import Container from "@/components/Container";
import { ICollaborate } from "@/lib/interfaces";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Image from "next/image";
import SvgIcon from "./SvgIcon";

interface CollaborateProps {
  className?: string;
}

const collaborations: ICollaborate[] = [
    {
        title: "“Maximize Your Reach with Marketing - Unlock Your Business's Growth Potential!“",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageHref: "/collab1.png",
        username: "Albert Fox",
        position: "CEO Dream Team",
        companyImageLogoHref: "/Logoipsum.svg"
    },
    {
        title: "“Maximize Your Reach with Marketing - Unlock Your Business's Growth Potential!“",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageHref: "/collab2.png",
        username: "John Malder",
        position: "CEO Dream Team",
        companyImageLogoHref: "/Logoipsum.svg"
    },
    {
        title: "“Maximize Your Reach with Marketing - Unlock Your Business's Growth Potential!“",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageHref: "/collab1.png",
        username: "Robert Smith",
        position: "CEO Dream Team",
        companyImageLogoHref: "/Logoipsum.svg"
    },
];

const Collaborate: React.FC<CollaborateProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-[18px] leading-28 text-mauvelous font-medium">
        What They Says
      </h5>
      <h2 className="lg:max-w-823 mt-8 md:mt-16 text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        There are also many large companies that collaborate with us
      </h2>
      <Carousel
        slideSize={710}
        slideGap={50}
        align="start"
        classNames={{
          root: "mt-44 md:mt-67",
          indicator:
            "w-27 h-6 rounded-[3px] data-active:bg-shakespeare bg-shakespeare/34",
            indicators: "bottom-[-44px] md:bottom-[-64px]"
        }}
        withControls={false}
        withIndicators
      >
        {collaborations.map((collItem, index) => (
          <CarouselSlide key={index}>
            <div className="flex gap-28 md:gap-48 flex-col md:flex-row grow items-start">
              <Image
                src={collItem.imageHref || "#"}
                width={236}
                height={337}
                alt={collItem.username || ""}
                className="rounded-[24px] shrink-0"
              />
              <div>
                <h3 className="text-[24px] md:text-[32px] leading-35 md:leading-52 font-semibold md:tracking-[-2px] text-mirage">
                  {collItem.title}
                </h3>
                <p className="mt-12 text-[18px] leading-32">{collItem.body}</p>
                <div className="flex gap-45 mt-29 items-center">
                  <div>
                    <h6 className="text-[16px] leading-24 font-medium text-shakespeare">
                      {collItem.username}
                    </h6>
                    <p className="mt-2 text-[14px] leading-24">
                      {collItem.position}
                    </p>
                  </div>
                  {collItem.companyImageLogoHref ? (
                    <Image
                      src={collItem.companyImageLogoHref || "#"}
                      width={154}
                      height={27}
                      alt="company logo"
                    />
                  ) : null}
                  {collItem.companySvgLogoName ? (
                    <SvgIcon iconName={collItem.companySvgLogoName} />
                  ) : null}
                </div>
              </div>
            </div>
          </CarouselSlide>
        ))}
      </Carousel>
    </Container>
  );
};

export default Collaborate;
