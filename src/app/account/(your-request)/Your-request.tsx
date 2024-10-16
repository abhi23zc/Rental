"use client";
import { clientRequest } from "@/api/product";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function Yourrequest() {
  const [data, setdata] = useState<any>([]);
  useEffect(() => {
    try {
      clientRequest().then((data) => {
        setdata(data?.data);
      });
    } catch (error) {
      toast.error("Error Occured");
    }
  }, []);

  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-lg bg-clip-border p-5 border-b-2 overflow-auto">
      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full text-left table-auto min-w-max text-slate-800"
      >
        <thead>
          <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
            <th className="p-4">
              <p className="text-sm leading-none font-normal">Product Name</p>
            </th>
            <th className="p-4">
              <p className="text-sm leading-none font-normal">Owner</p>
            </th>

            <th className="p-4">
              <p className="text-sm leading-none font-normal">Price</p>
            </th>
            <th className="p-4">
              <p className="text-sm leading-none font-normal">Date</p>
            </th>
            <th className="p-4">
              <p className="text-sm leading-none font-normal">Status</p>
            </th>
            <th className="p-4">
              <p></p>
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data?.map((data: any) => {
                return (
                  <tr key={data.id} className="hover:bg-slate-50">
                    <td className="p-4">
                      <p className="text-sm font-bold">{data?.productName}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">{data?.ownerName}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">{data?.price}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">
                        {new Date(data.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">{data?.status}</p>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </motion.table>
    </div>
  );
}

export default Yourrequest;
