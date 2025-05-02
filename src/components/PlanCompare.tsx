import Container from "@/components/Container";
import { prices } from "./Pricing";
import { Button, Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from "@mantine/core";
import Link from "next/link";
import SvgIcon from "./SvgIcon";

export interface PlanCompareProps {
  className?: string;
}

const tableData = [
    {serviceName: "Service", individual: "1 Service", business: "1 Service", corporate: "2 Services" },
    {serviceName: "Platform", individual: "Free", business: "Free", corporate: "Free" },
    {serviceName: "Website", individual: "", business: "", corporate: "" },
    {serviceName: "Custom Domain", individual: false, business: true, corporate: true },
    {serviceName: "Cloud Hosting", individual: true, business: true, corporate: true },
    {serviceName: "Export Codes", individual: false, business: true, corporate: true },
    {serviceName: "Live Preview", individual: true, business: true, corporate: true },
    {serviceName: "Email Marketing", individual: false, business: false, corporate: false },
    {serviceName: "Campaigns", individual: true, business: true, corporate: true },
    {serviceName: "Drip Automation", individual: false, business: true, corporate: true },
    {serviceName: "Export Customers", individual: true, business: true, corporate: true },
    {serviceName: "Popup Builder", individual: false, business: false, corporate: true },
];

const PlanCompare: React.FC<PlanCompareProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  const cellValue = (colItem: string | boolean) => {
    if(typeof colItem === 'string') {
        return colItem;
    }
    if(typeof colItem === 'boolean') {
        if(colItem) {
            return <SvgIcon iconName="check" className="size-20 mx-auto" />
        }
        else {
            return "";
        }
    }
    return "";
  };

  return (
    <Container className={`mt-100 md:mt-150 ${classNameValue}`}>
      <h5 className="text-center text-[18px] leading-28 text-mauvelous font-medium">
        Compare
      </h5>
      <h2 className="mt-8 md:mt-16 text-center text-[32px] md:text-[48px] leading-52 md:leading-66 font-semibold tracking-[-0.02] text-mirage">
        Compare & get your plan
      </h2>
      <div className="mt-48 flex flex-wrap sm:flex-nowrap justify-end gap-16 sm:gap-45 lg:max-w-960 lg:mx-auto">
        {prices.map((price, index) => (
          <div className="text-center" key={index}>
            <h6 className="text-mirage text-[18px] leading-24 font-bold tracking-[-0.5px]">
              {price.name}
            </h6>
            <Button
              component={Link}
              href={price.purchaseLink || "#"}
              className="mt-23 min-h-45 text-[16px] leading-28 font-bold bg-shakespeare hover:bg-shakespeare-700 text-white"
            >
              Get for ${price.price}
            </Button>
          </div>
        ))}
      </div>
      <Table className="text-mirage lg:max-w-960 lg:mx-auto">
        <TableThead>
          <TableTr className="border-b border-b-[#D4D4D8]">
            <TableTh className=" text-[18px] leading-24 font-bold tracking-[-0.5px]">
              Service
            </TableTh>
            <TableTh></TableTh>
            <TableTh></TableTh>
            <TableTh></TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          {tableData.map((row, rowNum) => (
            <TableTr key={rowNum} className="border-b border-b-[#D4D4D8] text-[14px] md:text-[16px] leading-22 md:leading-24 font-semibold">
              <TableTd
                className={`${
                  !row.individual && !row.business && !row.corporate
                    ? "pt-38 pb-16 text-[16px] md:text-[18px] leading-22 md:leading-24 font-bold tracking-[-0.5px]"
                    : "pt-10 pb-11"
                } border-r border-r-[#D4D4D8]`}
              >
                {row.serviceName}
              </TableTd>
              <TableTd className="border-r border-r-[#D4D4D8] text-center pt-10 pb-11">
                {cellValue(row.individual)}
              </TableTd>
              <TableTd className="border-r border-r-[#D4D4D8] text-center pt-10 pb-11">
                {cellValue(row.business)}
              </TableTd>
              <TableTd className="text-center pt-10 pb-11">
                {cellValue(row.corporate)}
              </TableTd>
            </TableTr>
          ))}
        </TableTbody>
      </Table>
    </Container>
  );
};

export default PlanCompare;
