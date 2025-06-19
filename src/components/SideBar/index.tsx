import React from "react";
import logo from "@app/assets/images/logo_1.png";
import {
  LiInboxIn,
  LiMagnifer,
  LiHashtag,
  LiServerSquare,
  LiUserCircle,
  LiHomeAngle,
} from "solar-icon-react/li";

interface Props extends React.ComponentProps<"div"> {}

const SideBar = (props: Props) => {
  return (
    <div className="sidebar-container" {...props}>
      <div className="sidebar">
        <nav className="sidebar-main">
          <div className="sidebar-logo">
            <img src={logo} className="sidebar-logoImage" />
          </div>
          <ul className="sidebar-main-items">
            <li className="sidebar-main-item">
              <a href="#">
                <LiHomeAngle />
              </a>
            </li>
            <li className="sidebar-main-item">
              <a href="#">
                <LiServerSquare />
              </a>
            </li>
            <li className="sidebar-main-item">
              <a href="#">
                <LiUserCircle />
              </a>
            </li>
          </ul>
        </nav>
        <div className="sidebar-sub">
          <h2 className="sidebar-sub-h2">activity</h2>
          <ul className="sidebar-sub-items">
            <li className="sidebar-sub-item active">
              <a href="#">
                <LiInboxIn />
                <span>feed</span>
              </a>
            </li>
            <li className="sidebar-sub-item">
              <a href="#">
                <LiMagnifer />
                <span>Search</span>
              </a>
            </li>
          </ul>
          <h3 className="sidebar-sub-h3">channels</h3>
          <ul className="sidebar-sub-items">
            <li className="sidebar-sub-item">
              <a href="#">
                <LiHashtag />
                <span>heartbeat</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { SideBar };
