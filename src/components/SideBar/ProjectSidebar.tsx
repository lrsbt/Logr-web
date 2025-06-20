import React from "react";
import { LiHashtag, LiInboxIn, LiMagnifer } from "solar-icon-react/li";

const ProjectSidebar = () => {
  return (
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
  );
};

export { ProjectSidebar };
