"use client";

import { AppContext } from "@/contextApi/AppContext";
import { Session } from "@/hooks/Session";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

function CheckSession() {
  const router = useRouter();
  const { session, setsession } = useContext<any>(AppContext);

  const check = async () => {
    const userData = await Session();

    return userData;
  };

  useEffect(() => {
    check().then((userData) => {
      if (userData != null) {
        setsession(userData);
        router.push("/");
      }
    });
  }, []);

  return null;
}

export default CheckSession;
