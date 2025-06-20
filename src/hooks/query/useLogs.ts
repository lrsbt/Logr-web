import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";

import type { Log } from "@app/types/api";
import { getHeaders } from "@app/hooks/query";
import { API_URL, cacheKeys, TEN_SEC } from "@app/constants";

export async function fetchLogsForProject(
  projectId?: Log["id"]
): Promise<Log[]> {
  if (!projectId) return [];
  try {
    const headers = getHeaders();
    const url = `${API_URL}/projects/${projectId}`;
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.warn("fetchProject Error", error);
    throw error;
  }
}

export const useLogs = (projectId?: Log["id"]): UseQueryResult<Log[]> => {
  return useQuery<Log[], AxiosError>({
    queryKey: cacheKeys.log(projectId),
    queryFn: () => fetchLogsForProject(projectId),
    refetchInterval: TEN_SEC,
    staleTime: TEN_SEC,
    enabled: !!projectId,
  });
};
