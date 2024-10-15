"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/api/auth";
import { Button } from "./ui/button";
import { Loader2, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function Register() {
  const [formData, setformData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    c_password: "",
  });
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const signInWithGoogle = () => {
    window.location.href = "http://localhost/auth/google";
  };

  return (
    <div>
      <form>
        <div className="mt-4">
          <Label htmlFor="name">Name</Label>
          <Input
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
            value={formData.name}
            id="name"
            type="text"
            name="name"
            placeholder="Enter your Name..."
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="name">Username</Label>
          <Input
            onChange={(e) =>
              setformData({ ...formData, username: e.target.value })
            }
            value={formData.username}
            id="name"
            type="text"
            name="name"
            placeholder="Enter your username..."
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            id="email"
            name="email"
            placeholder="Enter your Email..."
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            onChange={(e) =>
              setformData({ ...formData, phone: e.target.value })
            }
            value={formData.phone}
            id="phone"
            name="phone"
            type="number"
            placeholder="Enter your Phone Number..."
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="email">Password</Label>
          <Input
            onChange={(e) =>
              setformData({ ...formData, password: e.target.value })
            }
            value={formData.password}
            id="password"
            name="password"
            placeholder="Enter your Password..."
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="cpassword">Confirm Password</Label>
          <Input
            onChange={(e) =>
              setformData({ ...formData, c_password: e.target.value })
            }
            value={formData.c_password}
            id="cpassword"
            name="confirm_password"
            placeholder="Confirm your Password..."
          />
        </div>

        <div className="mt-4">
          <Button
            onClick={(e) => {
              setloading(true);
              e.preventDefault();
              register(formData)
                .then((data) => {
                  if (data.success == true) {
                    toast.success("Account created Succesfully");
                    router.push("/login");
                  } else {
                    toast.error("Error while creating account");
                  }
                })
                .catch((e) => {
                  toast.error("Error while creating account");
                });
              setloading(false);
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-lg transition duration-300"
            disabled={loading}
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {loading ? "Please wait " : "Submit"}
          </Button>

          <Button className="w-full mt-2" onClick={() => signInWithGoogle()}>
            <Image
              className="mr-2 h-4 w-4"
              width={4}
              height={4}
              src="/Images/google.png"
              alt="google"
            />
            <h1>Login with Google</h1>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
