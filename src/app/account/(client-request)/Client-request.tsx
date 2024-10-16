"use client";
import { approveRequest, ownerRequest } from "@/api/product";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion"; 

function Clientrequest() {
  const [data, setdata] = useState<any>([]);
  useEffect(() => {
    try {
      ownerRequest().then((data) => {
        setdata(data?.data);
      });
    } catch (error) {
      toast.error("Error Occured");
    }
  }, []);

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-lg bg-clip-border p-5 border-b-2 overflow-auto">
      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="table-auto w-full text-left text-slate-800"
      >
        <thead>
          <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
            <th className="px-2 py-3 text-xs md:text-sm">
              <p className="leading-none font-normal">Product Name</p>
            </th>
            <th className="px-2 py-3 text-xs md:text-sm">
              <p className="leading-none font-normal">Client</p>
            </th>
            <th className="px-2 py-3 text-xs md:text-sm">
              <p className="leading-none font-normal">Price</p>
            </th>
            <th className="px-2 py-3 text-xs md:text-sm">
              <p className="leading-none font-normal">Date</p>
            </th>
            <th className="px-2 py-3 text-xs md:text-sm">
              <p className="leading-none font-normal">Status</p>
            </th>
            <th className="px-2 py-3 text-xs md:text-sm">
              <p></p>
            </th>
          </tr>
        </thead>
        <tbody>
          {data ? data.map((item: any) => (
            <motion.tr
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              key={item.id}
            >
              <td className="px-2 py-3 text-xs md:text-sm">
                <p className="font-bold">{item.productName}</p>
              </td>
              <td className="px-2 py-3 text-xs md:text-sm">
                <p>{item.userName}</p>
              </td>
              <td className="px-2 py-3 text-xs md:text-sm">
                <p>{item.price}</p>
              </td>
              <td className="px-2 py-3 text-xs md:text-sm">
                <p>{new Date(item.createdAt).toLocaleDateString()}</p>
              </td>
              <td className="px-2 py-3 text-xs md:text-sm">
                <p>{item.status}</p>
              </td>
              <td className="px-2 py-3 text-xs md:text-sm">
                <button
                  onClick={() => {
                    approveRequest(item.userId, item.productId)
                      .then(() => {
                        toast.success("Request Approved");
                      })
                      .catch(() => {
                        toast.error("Error while approving request");
                      });
                  }}
                  className="text-xs md:text-sm font-semibold p-2 bg-gray-600 text-white rounded-md hover:bg-black"
                >
                  Approve
                </button>
              </td>
            </motion.tr>
          )) : null}
        </tbody>
      </motion.table>
    </div>
  );
}

export default Clientrequest;
