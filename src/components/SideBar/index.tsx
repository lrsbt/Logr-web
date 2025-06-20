import React from "react";
import { MainNav } from "./MainNav";

interface Props extends React.ComponentProps<"div"> {}

const SideBar = ({ children, ...props }: Props) => {
  return (
    <div className="sidebar-container" {...props}>
      <div className="sidebar">
        <MainNav />
        {children}
      </div>
    </div>
  );
};

export { SideBar };
