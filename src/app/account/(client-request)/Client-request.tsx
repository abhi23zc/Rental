"use client";
import { approveRequest, ownerRequest } from "@/api/product";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
  return (
    <div>
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-lg bg-clip-border p-5 border-b-2">
        <table className="w-full text-left table-auto min-w-max text-slate-800">
          <thead>
            <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Product Name</p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Client</p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Price</p>
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
            {data ? data?.map((item: any) => (
              <tr className="hover:bg-slate-50" key={item.id}>
                <td className="p-4">
                  <p className="text-sm font-bold">{item.productName}</p>
                </td>
                <td className="p-4">
                  <p className="text-sm">{item.userName}</p>
                </td>
                <td className="p-4">
                  <p className="text-sm">{item.price}</p>
                </td>
                <td className="p-4">
                  <p className="text-sm">{item.status}</p>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => {
                      approveRequest(item.userId, item.productId)
                        .then((data) => {
                          console.log(data);
                          toast.success("Request Approved");
                        })
                        .catch((error) => {
                          toast.error("Error while approving request");
                        });
                    }}
                    className="text-sm font-semibold "
                  >
                    Approve
                  </button>
                </td>
              </tr>
            )): null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clientrequest;
