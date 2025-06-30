import axios from "axios";
import { useEffect, useState } from "react";
import { queryClient } from "@root/main";
import { useLogout } from "@app/hooks/query";
import { persister } from "@root/main";

const Logout = () => {
  const { mutate: logout, isSuccess } = useLogout();

  useEffect(() => {
    queryClient.removeQueries();
    persister.removeClient();
    logout();
    // more logout stuff like calling api/auth/logout
  }, []);

  return isSuccess && <div>You are now logged out</div>;
};

export { Logout };
