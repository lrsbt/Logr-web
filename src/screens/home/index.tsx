import React from "react";
import { Page } from "@app/components";
import { HomeSidebar } from "@app/components/SideBar/HomeSidebar";

const Home = () => {
  return <Page sidebar={<HomeSidebar />}></Page>;
};

export { Home };
