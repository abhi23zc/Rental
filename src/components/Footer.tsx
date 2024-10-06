import React from "react";
import { Input } from "./ui/input";
import { Instagram, Linkedin, Search, Twitter } from "lucide-react";
import { Button } from "./ui/button";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-between items-center p-5 space-y-4 lg:space-y-0 lg:space-x-4">
        <h1 className="text-sm md:text-md  font-semibold text-center ">
          Stay Updated with our latest products and deals. Subscribe to our
          newsletter now!
        </h1>

        <div className="flex flex-col sm:flex-row w-full max-w-md space-y-2 sm:space-y-0 sm:space-x-2">
          <Input
            type="email"
            className="text-sm flex-grow"
            placeholder="Enter your email address"
          />
          <Button className="w-full sm:w-auto">Subscribe</Button>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col lg:flex-row justify-center items-center py-10 px-5 space-y-8 lg:space-y-0 lg:space-x-16 bg-gray-50">
        
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold mb-4">RentNow</h1>
          <div className="flex justify-center lg:justify-start space-x-4">
            <div className="bg-black p-2 rounded-full transition-colors duration-300 hover:bg-gray-800">
              <Linkedin fill="white" size={24} />
            </div>
            <div className="bg-blue-400 p-2 rounded-full transition-colors duration-300 hover:bg-blue-500">
              <Twitter fill="white" size={24} />
            </div>
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-2 rounded-full transition-colors duration-300 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600">
              <Instagram size={24} color="white" />
            </div>
          </div>
        </div>

        <div className="help  text-center lg:text-left">
          <h2 className="font-bold text-lg mb-3">Help Center</h2>
          <p className="hover:text-gray-600 cursor-pointer">FAQs</p>
          <p className="hover:text-gray-600 cursor-pointer">Customer Support</p>
          <p className="hover:text-gray-600 cursor-pointer">How it Works</p>
        </div>

        <div className="about flex flex-col text-center lg:text-left">
          <h2 className="font-bold text-lg mb-3">About Us</h2>
          <p className="hover:text-gray-600 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-gray-600 cursor-pointer">Sitemap</p>
          <p className="hover:text-gray-600 cursor-pointer">Subscriptions</p>
        </div>
      
        <div className="contact flex flex-col space-y-2 text-center lg:text-left">
          <h2 className="font-bold text-lg mb-3">Contact Us</h2>
          <p className="hover:text-gray-600 cursor-pointer">support@rentnow.com</p>
          <p className="hover:text-gray-600 cursor-pointer">+123 456 7890</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
