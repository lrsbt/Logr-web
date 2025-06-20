import React from "react";
import { useParams } from "react-router-dom";

import type { Log } from "@app/types/api";
import { useLogs } from "@app/hooks/query";
import { Event, Page } from "@app/components";
import { ProjectSidebar } from "@app/components/SideBar/ProjectSidebar";

const Project = () => {
  const { id } = useParams();
  const { data, isSuccess } = useLogs(id);

  return (
    <Page sidebar={<ProjectSidebar />}>
      {isSuccess &&
        data.map((event: Log) => <Event key={event.id} {...event} />)}
    </Page>
  );
};

export { Project };
