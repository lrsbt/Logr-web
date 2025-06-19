import React from "react";
import { format } from "date-fns";

import type { Log } from "@app/types/api";
import { LiTranslation2 } from "solar-icon-react/li";

const Event = ({ project_name, channel, event, created_at }: Log) => {
  const formattedDate = format(new Date(created_at), "EEEE 'at' p");

  return (
    <div className="event">
      <div className="event-icon">
        <LiTranslation2 />
      </div>
      <div className="event-content">
        <div className="event-project">{project_name}</div>
        <div className="event-event">{event}</div>
        <div className="event-footer">
          <div className="event-channel">{channel}</div>
          <div className="event-date">{formattedDate}</div>
          <a className="event-more">...</a>
        </div>
      </div>
    </div>
  );
};

export { Event };
