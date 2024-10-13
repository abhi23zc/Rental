"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import Yourrequest from "./(your-request)/Your-request";
import Clientrequest from "./(client-request)/Client-request";
import AuthSession from "../(auth)/AuthSession";

function page() {
  const [mode, setmode] = useState(true);
  return (
    <>
    <AuthSession/>
      <div className="flex gap-2 justify-end m-3">
        <div className="flex items-center space-x-2">
          <Switch
            checked={mode}
            onClick={() => {
              setmode((prev) => !prev);
            }}
          />
          <Label htmlFor="Request">
            {mode ? "Your Request" : "Client Request"}
          </Label>
        </div>
      </div>

      {mode ? <Yourrequest /> : <Clientrequest />}
    </>
  );
}

export default page;
