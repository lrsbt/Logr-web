import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";

import type { Project } from "@app/types/api";
import { getHeaders } from "@app/hooks/query";
import { API_URL, cacheKeys, ONE_MIN } from "@app/constants";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const headers = getHeaders();
    const response = await axios.get(`${API_URL}/projects`, { headers });
    return response.data;
  } catch (error) {
    console.warn("fetchProjects Error", error);
    throw error;
  }
}

export const useProjects = (): UseQueryResult<Project[], AxiosError> => {
  return useQuery<Project[], AxiosError>({
    queryKey: cacheKeys.projects,
    queryFn: fetchProjects,
    refetchInterval: ONE_MIN,
    staleTime: ONE_MIN,
  });
};
