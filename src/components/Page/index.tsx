import React from "react";
import { Main, SideBar } from "@app/components";

interface Props extends React.ComponentProps<"div"> {
  sidebar: React.ReactNode;
}

const Page = ({ children, sidebar, ...props }: Props) => (
  <div className="wrapper" {...props}>
    <SideBar>{sidebar}</SideBar>
    <Main>{children}</Main>
  </div>
);

export { Page };
