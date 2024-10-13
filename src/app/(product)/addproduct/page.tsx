"use client";
import React, { useEffect } from "react";
import AddProductForm from "../../../components/Forms/AddProductForm";
import CheckSession from "@/app/(auth)/CheckSession";
import AuthSession from "@/app/(auth)/AuthSession";

function page() {
  return (
    <div>
      <AuthSession />
      <AddProductForm />
    </div>
  );
}

export default page;
