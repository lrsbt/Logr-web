import React from "react";
import { useParams } from "react-router-dom";

import type { Log } from "@app/types/api";
import { useLogs } from "@app/hooks/query";
import { Main, Event, Page, SideBar } from "@app/components";

const Project = () => {
  const { id } = useParams();
  const { data, isSuccess } = useLogs(id);

  return (
    <Page>
      <SideBar />
      <Main>
        {isSuccess &&
          data.map((event: Log) => <Event key={event.id} {...event} />)}
      </Main>
    </Page>
  );
};

export { Project };
