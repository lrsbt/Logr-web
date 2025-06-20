import type { Log } from "@app/types/api";

export const cacheKeys = {
  log: (projectId?: Log["id"]) => ["log", projectId],
};
