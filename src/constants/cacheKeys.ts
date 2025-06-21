import type { Log } from "@app/types/api";

export const cacheKeys = {
  me: ["me"],
  projects: ["projects"],
  log: (projectId?: Log["id"]) => ["log", projectId],
};
