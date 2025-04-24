import Container from "@/components/Container";
import { IComment } from "@/lib/interfaces";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Image from "next/image";

export interface TestimonialsProps {
  className?: string;
}

const comments: IComment[][] = [
  [
    {
      avatarHref: "/user1.png",
      comment: "Lorem ipsum dolor sit amet, consect etur adipiscing elit",
      username: "jennifer.a",
    },
    {
      avatarHref: "/user2.png",
      comment: "I just love how these people build this system",
      username: "jamescron",
    },
    {
      avatarHref: "/user3.png",
      comment: "A must have UI kit for building my landing pages",
      username: "camerondi",
    },
    {
      avatarHref: "/user4.png",
      comment: "Lorem ipsum dolor sit amet, consect etur adipiscing elit",
      username: "jennifer.a",
    },
  ],
  [
    {
        avatarHref: "/user5.png",
        comment: "Lorem ipsum dolor sit amet, consect etur adipiscing elit",
        username: "jennifer.a",
      },
      {
        avatarHref: "/user6.png",
        comment: "I just love how these people build this system",
        username: "jamescron",
      },
      {
        avatarHref: "/user7.png",
        comment: "A must have UI kit for building my landing pages",
        username: "camerondi",
      },
      {
        avatarHref: "/user1.png",
        comment: "Lorem ipsum dolor sit amet, consect etur adipiscing elit",
        username: "jennifer.a",
      },
  ],
];

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <>
      <Container className={`mt-100 md:mt-150 md:mb-64 ${classNameValue}`}>
        <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
          Testimonials
        </h5>
        <h2 className="mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
          Our happy clients say about us
        </h2>
      </Container>
      <div className="space-y-16 md:space-y-29">
        {comments.map((rowComment, rowIndex) => (
          <Carousel
            slideSize={406}
            slideGap={24}
            align="start"
            className=""
            withControls={false}
            key={rowIndex}
          >
            {rowComment.map((teamItem, index) => (
              <CarouselSlide key={`${rowIndex}_${index}`}>
                <div className="flex gap-4 pl-21 pr-14 py-10 rounded-[80px] shadow-[0_44px_94px_0_#0000000F] bg-white">
                  <Image
                    src={teamItem.avatarHref || "#"}
                    width={191}
                    height={254}
                    alt={teamItem.username || ""}
                    className="rounded-full size-52"
                  />
                  <p className="text-[14px] leading-30">
                    {teamItem.comment} - @{teamItem.username}
                  </p>
                </div>
              </CarouselSlide>
            ))}
          </Carousel>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
