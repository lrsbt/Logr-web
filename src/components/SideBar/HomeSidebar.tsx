import React from "react";
import { Link } from "react-router-dom";
import { useProjects } from "@app/hooks/query";
import { useActiveProject } from "@app/hooks/useActiveProject";

const HomeSidebar = () => {
  const { data: projects, isSuccess } = useProjects();
  const { activeProjectId, setActiveProjectId } = useActiveProject();

  return (
    <div className="sidebar-sub">
      <h2 className="sidebar-sub-h2">projects</h2>
      <ul className="sidebar-sub-items">
        {isSuccess &&
          projects?.map(({ id, name }) => {
            const isActive = String(activeProjectId) === String(id) && "active";

            return (
              <li key={id} className={`sidebar-sub-item ${isActive}`}>
                <Link
                  to={`/project/${id}`}
                  onClick={() => setActiveProjectId(id)}
                >
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export { HomeSidebar };
