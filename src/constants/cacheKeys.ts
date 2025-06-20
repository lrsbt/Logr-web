import type { Log } from "@app/types/api";

export const cacheKeys = {
  projects: ["projects"],
  log: (projectId?: Log["id"]) => ["log", projectId],
};
