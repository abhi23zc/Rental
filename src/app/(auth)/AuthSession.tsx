import { AppContext } from "@/contextApi/AppContext";
import { Session } from "@/hooks/Session";
import React, { useContext, useEffect } from "react";

function AuthSession() {
  const { session, setsession } = useContext<any>(AppContext);

  const check = async () => {
    const userData = await Session();

    return userData;
  };

  useEffect(() => {
    check().then((userData) => {
      if (userData == null) {
        window.location.href = "/login";
      } else setsession(userData);
    });
  }, []);

  return <div></div>;
}

export default AuthSession;
