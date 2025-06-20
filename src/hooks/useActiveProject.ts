import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { storageKeys } from "@app/constants/storageKeys";

export const useActiveProject = () => {
  const [params, setParams] = useSearchParams();
  const idParam = params.get("projectId");
  const STORAGE_KEY = storageKeys.ACTIVE_PROJECT_ID;
  const stored = localStorage.getItem(STORAGE_KEY);

  const id = idParam ?? stored;
  const activeProjectId = id ? parseInt(id, 10) : null;

  useEffect(() => {
    if (idParam) {
      localStorage.setItem(STORAGE_KEY, idParam);
    }
  }, [idParam]);

  return {
    activeProjectId,
    setActiveProjectId: (newId: string) => {
      params.set("projectId", newId);
      setParams(params);
      localStorage.setItem(STORAGE_KEY, newId);
    },
  };
};
