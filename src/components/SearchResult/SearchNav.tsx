"use client";

import BreadCrumb from "./BreadCrumb";

function SearchNav({ query }: { query: string }) {
  return (
    <>
      <BreadCrumb query={query} />
    </>
  );
}

export default SearchNav;
