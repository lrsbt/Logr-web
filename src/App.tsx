// https://ui.shadcn.com/view/sidebar-07#
// https://ui.shadcn.com/docs/components/sidebar
// https://app.logsnag.com/dashboard/684da036a08ab9dbefb7d97c/product/summary
// https://www.radix-ui.com/primitives/docs/overview/getting-started

import React from "react";

import { useLogs } from "./hooks/query";
import { Main, Event, Page, SideBar } from "@app/components";

function App() {
  const { data, isSuccess } = useLogs(1);

  return (
    <Page>
      <SideBar />
      <Main>
        {isSuccess && data.map((event) => <Event key={event.id} {...event} />)}
      </Main>
    </Page>
  );
}

export default App;
