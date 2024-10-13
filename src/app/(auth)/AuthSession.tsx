import { AppContext } from "@/contextApi/AppContext";
import React, { useContext, useEffect } from "react";

function AuthSession() {
  const { session, setsession } = useContext<any>(AppContext);
  useEffect(() => {
    if (!session) {
      window.location.href = "/login";
    }
  }, []);
  return <div></div>;
}

export default AuthSession;
