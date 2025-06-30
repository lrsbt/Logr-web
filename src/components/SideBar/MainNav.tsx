import React from "react";
import { Link } from "react-router-dom";
import { LiHomeAngle, LiServerSquare, LiUserCircle } from "solar-icon-react/li";

import { useActiveProject } from "@app/hooks/useActiveProject";
import { useProjects } from "@app/hooks/query";

import logo from "@app/assets/images/logo_1.png";

const MainNav = () => {
  const { activeProjectId } = useActiveProject();
  const { data: projects } = useProjects();
  const project = projects?.find((p) => Number(p.id) === activeProjectId);

  return (
    <nav className="sidebar-main">
      <div className="sidebar-logo">
        <Link to={`/project/${activeProjectId}`}>
          <img src={logo} className="sidebar-logoImage" />
        </Link>
      </div>
      <ul className="sidebar-main-items">
        <li className="sidebar-main-item">
          {project && (
            <Link to={`/projects`} className="sidebar-main-project">
              {project.name.slice(0, 3)}
            </Link>
          )}
        </li>
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
  );
};

export { MainNav };
