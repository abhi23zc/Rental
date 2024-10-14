"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { getNotification } from "@/api/product";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const NotificationsCard = ({
  notification,
  setnotification,
}: {
  notification: boolean;
  setnotification: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [data, setdata] = useState<any>([]);
  useEffect(() => {
    try {
      getNotification().then((data) => {
        if (data) {
          setdata(data?.data);
        }
      });
    } catch (e) {
      toast.error("Something went wrong");
    }
  }, []);

  return (
    <motion.div
      className={`flex flex-col items-center  absolute top-0 -left-40 ${
        notification ? "block" : "hidden"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex flex-col justify-center px-5 pt-0  max-w-[520px] lg:px-6 xl:pl-0">
        <div className="relative flex flex-col pt-[20px] md:pt-0">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-5 mr-0 max-w-full pt-8 pb-6 px-6 dark:border-zinc-800 md:mb-0">
            <div>
              <div className="flex justify-between items-center space-x-2">
                <p className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-3xl">
                  Notifications
                </p>
                <X
                  onClick={() => {
                    setnotification((prevState) => !prevState);
                  }}
                  className="text-zinc-500 dark:text-zinc-400"
                />
              </div>

              <p className="mb-5 mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-4 md:text-base">
                You have important messages.
              </p>
            </div>

            {data?.map((element: any) => {
              return (
                <div key={element.id} className="relative space-x-5 mx-auto flex w-full max-w-full md:pt-[unset] mb-6">
                  <div className="w-2 h-2 mt-2 p-1 items-center rounded-full bg-blue-500"></div>
                  <div>
                    <p className="text-zinc-950 dark:text-white font-medium mb-1">
                      {element.message || "No Message"}
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                      {new Date(element.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Button */}
            <Button className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 flex w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="me-2 h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Mark all as read
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationsCard;
