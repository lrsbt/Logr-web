import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { cacheKeys } from "@app/constants/cacheKeys";

import { queryClient } from "@root/main";
import type { Me } from "@app/types/api";

export const getHeaders = () => {
  const data = queryClient.getQueryData(cacheKeys.me) as Me;
  const api_key = data?.api_key;

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${api_key}`,
    withCredentials: true,
  };
};

export const useAuth = () => {
  const { data, isLoading, error, refetch } = useQuery<Me, AxiosError>({
    queryKey: cacheKeys.me,
    queryFn: () =>
      axios
        .get("http://localhost:3000/auth/me", { withCredentials: true })
        .then((res) => res.data.user),
    retry: false, // don't retry on failure (e.g. not logged in)
    staleTime: 5 * 60 * 1000, // cache for 5 minutes
  });

  const errorMessage = error?.response?.data?.message || error?.message || null;

  return {
    data,
    isLoading,
    error,
    errorMessage,
    refetch,
  };
};
