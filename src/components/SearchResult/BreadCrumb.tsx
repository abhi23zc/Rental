import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter } from "next/navigation";
function BreadCrumb({query}: {query: string}) {
  const router = useRouter();
  return (
    <div>
      <Breadcrumb className="bg-white p-4 rounded-lg shadow">
        <BreadcrumbList className="flex items-center">
          <BreadcrumbItem className="flex items-center">
            <BreadcrumbLink
              onClick={() => {
                router.push("/");
              }}
              className="text-gray-600 cursor-pointer hover:text-gray-800"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="mx-2" />
          <BreadcrumbItem className="flex items-center">
            <BreadcrumbLink
              onClick={() => {
                router.push("/search");
              }}
              className="text-gray-600 cursor-pointer hover:text-gray-800"
            >
              Search
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="mx-2" />
          <BreadcrumbItem className="flex items-center">
            <BreadcrumbPage className="text-gray-800 font-semibold">Searching Results for {query}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
