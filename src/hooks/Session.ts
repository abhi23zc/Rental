export const Session = async (): Promise<any> => {
  try {
    const url = process.env.HOST || "http://localhost/api/v1";
    const response = await fetch(`${url}/auth/profile`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      return null;
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error occurred while fetching profile:", error);
    return null;
  }
};

import { useEffect, useState } from 'react';

const useSession = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const data = await Session();
      setUserData(data);
    };

    fetchSession();
  }, []);

  return userData;
};
