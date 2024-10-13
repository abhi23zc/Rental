import React, { useEffect, useState } from "react";
import { addProduct, editProduct } from "@/api/product";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

function EditProductForm({
  title,
  description,
  price,
  city,
  state,
  pincode,
  category,
  id,
}: any) {
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    images: [],
    title: "",
    description: "",
    price: "",
    city: "",
    state: "",
    pincode: "",
    category: "",
  });

  useEffect(() => {
    setFormData({
      images: [],
      title: title || "",
      description: description || "",
      price: price || "",
      city: city || "",
      state: state || "",
      pincode: pincode || "",
      category: category || "",
    });
  }, [title, description, price, city, state, pincode, category]);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);
    const dataToSubmit = new FormData();

    dataToSubmit.append("title", formData.title);
    dataToSubmit.append("description", formData.description);
    dataToSubmit.append("price", formData.price);
    dataToSubmit.append("city", formData.city);
    dataToSubmit.append("state", formData.state);
    dataToSubmit.append("pincode", formData.pincode);
    dataToSubmit.append("category", formData.category);

    formData.images.forEach((file: File, index: number) => {
      dataToSubmit.append(`images[${index}]`, file);
    });
    try {
      await editProduct(id.toString(), formData);
      toast.success("Product updated successfully");
    } catch (e) {
      toast.error("Error while updating Product");
    }
    setloading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-100 ">
      <form
        className="space-y-6 p-8 w-full max-w-md bg-white shadow-lg rounded-lg my-2"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Edit Product
        </h2>

        {/* Title */}
        <div className="grid w-full gap-2">
          <Label htmlFor="title" className="text-gray-700 font-medium">
            Title
          </Label>
          <Input
            type="text"
            id="title"
            value={formData.title}
            placeholder="Enter Product Title"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        {/* Description */}
        <div className="grid w-full gap-2">
          <Label htmlFor="description" className="text-gray-700 font-medium">
            Description
          </Label>
          <textarea
            value={formData.description}
            id="description"
            placeholder="Enter Product Description"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2 h-28 resize-none"
            onChange={handleInputChange}
          />
        </div>

        {/* Price */}
        <div className="grid w-full gap-2">
          <Label htmlFor="price" className="text-gray-700 font-medium">
            Price
          </Label>
          <Input
            value={formData.price}
            type="text"
            id="price"
            placeholder="Enter Product Price"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        {/* Picture Upload */}
        <div className="grid w-full gap-2">
          <Label htmlFor="images" className="text-gray-700 font-medium">
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
            value={formData.city}
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
          <Input
            type="text"
            value={formData.state}
            id="state"
            placeholder="Enter State"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        {/* PinCode */}
        <div className="grid w-full gap-2">
          <Label htmlFor="pincode" className="text-gray-700 font-medium">
            PinCode
          </Label>
          <Input
            value={formData.pincode}
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
            value={formData.category}
            type="text"
            id="category"
            placeholder="Enter Category"
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-lg transition duration-300"
          disabled={loading}
        >
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {loading ? "Please wait " : "Edit Product"}
        </Button>
      </form>
    </div>
  );
}

export default EditProductForm;
