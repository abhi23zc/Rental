export interface FormData {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  c_password: string;
}

// Login function 

export const login = async (formdata:any): Promise<any> => {
  try {
    const url =  "https://rental-backend-mh2c.onrender.com/api/v1";
    const response = await fetch(`${url}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    if (!response.ok) {
      console.error("Error occurred during login:");
      return null;
    }
    const data = await response.json()
    localStorage.setItem("token", data?.token)
    return data;

  } catch (error) {
    console.error("Error occurred during login:", error);
    throw error;
  }
};

export const register = async (formdata: FormData): Promise<any> => {
  try {
    const url = process.env.HOST || "https://rental-backend-mh2c.onrender.com/api/v1";
    const response = await fetch(`${url}/auth/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    
    return await response.json();
  } catch (error) {
    console.error("Error occurred during registration:", error);
    throw error;
  }
};

export const profile = async (): Promise<any> => {
  try {
    const url = process.env.HOST || "https://rental-backend-mh2c.onrender.com/api/v1";
    const response = await fetch(`${url}/auth/profile`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error occurred while fetching profile:");
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error occurred while fetching profile:", error);
    return null;
  }
};
