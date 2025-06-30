import React from "react";

import { Page } from "@app/components";
import { HomeSidebar } from "@app/components/SideBar/HomeSidebar";

const Projects = () => {
  return <Page sidebar={<HomeSidebar />}></Page>;
};

export { Projects };
