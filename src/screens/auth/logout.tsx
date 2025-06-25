import axios from "axios";
import { useEffect, useState } from "react";
import { queryClient } from "@root/main";

const Login = () => {
  useEffect(() => {
    queryClient.removeQueries();
    // more logout stuff like calling api/auth/logout
  }, []);

  return <div>You are now logged out</div>;
};

export { Login };
