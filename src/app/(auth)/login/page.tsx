"use client";
import { login } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CheckSession from "../CheckSession";
import { Loader2 } from "lucide-react";

function LoginPage() {
  const [loading, setloading] = useState(false)
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      setloading(true)
      const data = await login(formData);
      if (!data) {
        toast.error("Invalid Credentials");
      } else {
        toast.success("Succesfully LoggedIn");
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed");

    }
    setloading(false)
  }

  return (
    <>
      <CheckSession />
      <div className="h-screen flex justify-center items-center">
        <div className="w-[550px] bg-white rounded-md py-5 px-10 shadow-md">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center">
            Renter
          </h1>
          <h1 className="text-3xl font-bold">Login</h1>
          <p>Welcome Back</p>

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                name="username"
                value={formData.username}
                placeholder="Enter your Username..."
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                placeholder="Enter your Email..."
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter your Password..."
              />
              <div className="text-right mt-2 font-semibold text-gray-500">
                <Link href={"/forgot-password"}>Forgot Password?</Link>
              </div>
            </div>

            <div className="mt-4">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-lg transition duration-300"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {loading ? "Please wait " : "Submit"}
              </Button>
            </div>
          </form>

          <p className="mt-2 text-center font-semibold text-gray-500">
            Don't have an account ?
            <strong>
              <Link href={"/signup"}>Signup</Link>
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
