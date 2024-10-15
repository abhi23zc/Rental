"use client";

import BreadCrumb from "./BreadCrumb";

function SearchNav({ query, first, second }: { query: string, first:string, second:string }) {
  return (
    <>
      <BreadCrumb query={query} first={first} second={second}/>
    </>
  );
}

export default SearchNav;
