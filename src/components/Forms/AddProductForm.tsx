"use client";
import { addProduct } from "@/api/product";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Atom, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { statesData } from "./states_data";
import { generateContent } from "@/api/ai/config";

function AddProductForm() {
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const [loading, setloading] = useState(false);
  const [loading1, setloading1] = useState(false);
  const [formData, setFormData] = useState<any>({
    images: [],
  });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => success(position),
        (e) => {
          console.log(e);
          toast.error("Error while retriving location");
        }
      );
    } else {
      console.log("Geolocation not supported");
    }
    setloading1(false);
    toast.success("Location Fetched Succesfully");
  }

  function success(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setlatitude(latitude);
    setlongitude(longitude);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);

    if (!latitude || !longitude) {
      toast.error("Error while retriving location");
      setloading(false);
      return;
    }

    const dataToSubmit = new FormData();

    dataToSubmit.append("title", formData.title);
    dataToSubmit.append("description", formData.description);
    dataToSubmit.append("price", formData.price.toString());
    dataToSubmit.append("city", formData.city);
    dataToSubmit.append("state", formData.state);
    dataToSubmit.append("pincode", formData.pincode);
    dataToSubmit.append("category", formData.category);
    dataToSubmit.append("latitude", String(latitude));
    dataToSubmit.append("longitude", String(longitude));
    formData.latitude = latitude;
    formData.longitude = longitude;

    formData.images.forEach((file: File, index: number) => {
      dataToSubmit.append(`images[${index}]`, file);
    });
    try {
      const res = await addProduct(formData);
      if (res) toast.success("Product Succesfully added");
      else toast.error("Error while adding Product");
    } catch (e) {
      toast.error("Error while adding Product");
    }
    setloading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-100 ">
      <form className="space-y-6 p-8 w-full max-w-md bg-white shadow-lg rounded-lg my-2">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Add Product
        </h2>

        {/* Title */}
        <div className="grid w-full gap-2">
          <Label htmlFor="title" className="text-gray-700 font-medium">
            Title
          </Label>
          <Input
            type="text"
            id="title"
            placeholder="Enter Product Title"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        <div className="grid w-full gap-2">
          <Label htmlFor="title" className="text-gray-700 font-medium">
            How old is the product
          </Label>
          <Input
            type="text"
            id="old"
            placeholder="Years"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        {/* Description */}
        <div className="grid w-full gap-2">
          <Label htmlFor="desc" className="text-gray-700 font-medium">
            Description
          </Label>
          <textarea
            value={formData.description}
            id="description"
            placeholder="Enter Product Description"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2 h-28 resize-none"
            onChange={handleInputChange}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              generateContent(
                `i want to give my ${formData.title} for rent its ${formData.old} years old give me short description about it so that i can upload into website`
              )
                .then((data) => setFormData({ ...formData, description: data }))
                .catch((e) => console.log(e));
              toast.success("Edit Description as per your requirements");
            }}
            className="relative px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-75 blur-lg"></span>
            <span className="relative z-10">AI Generate</span>
          </button>
        </div>

        {/* Price */}
        <div className="grid w-full gap-2">
          <Label htmlFor="price" className="text-gray-700 font-medium">
            Price
          </Label>
          <Input
            type="text"
            id="price"
            placeholder="Enter Product Price"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        {/* Picture Upload */}
        <div className="grid w-full gap-2">
          <Label htmlFor="picture" className="text-gray-700 font-medium">
            Upload at least 2 Images
          </Label>
          <Input
            id="images"
            type="file"
            multiple
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleFileChange}
          />
        </div>

        {/* City */}
        <div className="grid w-full gap-2">
          <Label htmlFor="city" className="text-gray-700 font-medium">
            City
          </Label>
          <Input
            type="text"
            id="city"
            placeholder="Enter City"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        {/* State */}
        <div className="grid w-full gap-2">
          <Label htmlFor="state" className="text-gray-700 font-medium">
            State
          </Label>
          <select
            id="state"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          >
            {statesData.map((element) => {
              return (
                <option key={element} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>

        {/* PinCode */}
        <div className="grid w-full gap-2">
          <Label htmlFor="pincode" className="text-gray-700 font-medium">
            PinCode
          </Label>
          <Input
            type="text"
            id="pincode"
            placeholder="Enter PinCode"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        {/* Category */}
        <div className="grid w-full gap-2">
          <Label htmlFor="category" className="text-gray-700 font-medium">
            Category
          </Label>
          <Input
            type="text"
            id="category"
            placeholder="Enter Category"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}

        <Button
          onClick={(e) => {
            e.preventDefault();
            setloading1(true);
            handleLocationClick();
          }}
          className="w-full bg-black hover:bg-black text-white font-semibold py-2 rounded-lg shadow-lg transition duration-300"
          disabled={loading}
        >
          {loading1 ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {loading1 ? "Please wait " : "Fetch Location"}
        </Button>

        <Button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-lg transition duration-300"
          disabled={loading}
        >
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {loading ? "Please wait " : "Add Product"}
        </Button>
      </form>
    </div>
  );
}

export default AddProductForm;
