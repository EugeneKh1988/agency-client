import Container from "@/components/Container";
import Link from "next/link";
import { IService } from "@/lib/interfaces";
import SvgIcon from "./SvgIcon";

interface ServicesProps {
  className?: string;
}

export const serviceItems: IService[] = [
    {
        iconName: "chart",
        title: "Consultant Plan",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        innerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
        href: "/detail-service?tab=plan",
        imageHref: "/conplan.jpg",
        detail: [
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          },
          {
            type: "image",
            body: "/conplan.jpg",
          },
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          }
        ],
        tabName: "plan"
    },
    {
        iconName: "graph",
        title: "Design Thingking",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        innerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
        href: "/detail-service?tab=design",
        imageHref: "/design.jpg",
        detail: [
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          },
          {
            type: "image",
            body: "/design.jpg",
          },
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          }
        ],
        tabName: "design"
    },
    {
        iconName: "filter",
        title: "SEO Marketing",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        innerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
        href: "/detail-service?tab=seo",
        imageHref: "/seo.jpg",
        detail: [
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          },
          {
            type: "image",
            body: "/seo.jpg",
          },
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          }
        ],
        tabName: "seo"
    },
    {
        iconName: "work",
        title: "Business Advisor",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        innerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
        href: "/detail-service?tab=business",
        imageHref: "/business.jpg",
        detail: [
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          },
          {
            type: "image",
            body: "/business.jpg",
          },
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          }
        ],
        tabName: "business"
    },
    {
        iconName: "heart",
        title: "Brand Personal",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        innerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
        href: "/detail-service?tab=brand",
        imageHref: "/brand.jpg",
        detail: [
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          },
          {
            type: "image",
            body: "/brand.jpg",
          },
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          }
        ],
        tabName: "brand"
    },
    {
        iconName: "activity",
        title: "Development",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        innerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
        href: "/detail-service?tab=dev",
        imageHref: "/dev.jpg",
        detail: [
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          },
          {
            type: "image",
            body: "/dev.jpg",
          },
          {
            type: "text",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna",
          }
        ],
        tabName: "dev"
    },
];

const Services: React.FC<ServicesProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
        Our Service
      </h5>
      <h2 className="mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        What Can We Bring for You
      </h2>
      <div className="mt-32 md:mt-73 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:justify-between gap-48 sm:gap-x-28 sm:gap-y-32">
        {serviceItems.map((serviceItem, index) => (
          <div
            className="max-w-343 sm:max-w-381 border border-[#E5EAF1] bg-white hover:border-white hover:shadow-[0_4px_64px_0_#23286914] py-30 pl-25 pr-31 md:pt-40 md:pl-35 md:pb-24 md:pr-57 rounded-[10px]"
            key={index}
          >
            <SvgIcon
              iconName={serviceItem?.iconName || ""}
              className="size-40 text-mauvelous"
            />
            <h3 className="mt-65 text-[24px] leading-35 tracking-[-0.01em] font-semibold text-mirage">
              {serviceItem?.title}
            </h3>
            <p className="text-[18px] leading-32 mt-12">{serviceItem.body}</p>
            <Link href={serviceItem.href || "#"} className="mt-16 text-[18px] leading-32 text-shakespeare capitalize">
              Read more
              <SvgIcon iconName="arrowRight" className="size-24 inline-block ml-12" />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;
