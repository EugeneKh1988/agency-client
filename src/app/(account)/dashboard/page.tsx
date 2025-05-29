"use client";

import Container from "@/components/Container";
import SvgIcon from "@/components/SvgIcon";
import { useAuth } from "@/hooks/auth";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@mantine/core";
import React from "react";
import AccountDetails from "./AccountDetails";
import AccountTeam from "./AccountTeam";

const tabsItems = [
  {title: "Account details", value: "account-details", isAdminTab: false },
  {title: "Team", value: "team", isAdminTab: true },
];

export default function DashboardPage() {
  const { isAdmin } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  // get component for tab by tab value
  const componentSwitch = (value: string, isAdminTab: boolean) => {
    if(value == "account-details") {
      return <AccountDetails isAdminTab={isAdminTab} />
    }
    if(value == "team") {
      return <AccountTeam isAdminTab={isAdminTab} />
    }
    return null;
  };

  return (
    <Container className="mt-100 md:mt-150">
      <Tabs
        orientation="vertical"
        defaultValue="account-details"
        classNames={{
          root: "flex flex-col lg:flex-row gap-80 lg:gap-113",
          list: "lg:min-w-293 before:border-none space-y-24",
          tab: "justify-between bg-white data-active:bg-mauvelous text-lynch data-active:text-white py-14 px-26 border-none shadow-[0_4px_64px_0_#23286914] rounded-none data-active:rounded-[8px]",
        }}
      >
        <TabsList>
          {tabsItems.map((tabItem, index) => (
            <React.Fragment key={index}>
              {isAdmin() ? (
                <TabsTab
                  value={tabItem.value || `${index}`}
                  rightSection={
                    <SvgIcon iconName="chevronRight" className="size-20" />
                  }
                >
                  {tabItem.title}
                </TabsTab>
              ) : null}
              {!isAdmin() && !tabItem.isAdminTab ? (
                <TabsTab
                  value={tabItem.value || `${index}`}
                  rightSection={
                    <SvgIcon iconName="chevronRight" className="size-20" />
                  }
                >
                  {tabItem.title}
                </TabsTab>
              ) : null}
            </React.Fragment>
          ))}
        </TabsList>
        {tabsItems.map((tabItem, index) => (
          <TabsPanel value={tabItem.value} key={index}>
            {componentSwitch(tabItem.value, tabItem.isAdminTab)}
          </TabsPanel>
        ))}
      </Tabs>
    </Container>
  );
}