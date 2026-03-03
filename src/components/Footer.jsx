import React from "react";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white pt-20 pb-10">
      <div className="max-w-full mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">CS — Ticket System</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A comprehensive Customer Support Zone designed to streamline ticket management, 
              track resolution progress, and enhance customer satisfaction through 
              efficient real-time monitoring and status updates.
            </p>
          </div>


          {/* Company and Services */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-1">
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Products & Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Download Apps
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Information</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Social Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <FaXTwitter className="text-white w-4 h-4" />
                </div>
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <FaLinkedinIn className="text-white w-4 h-4" />
                </div>
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <FaFacebookF className="text-white w-4 h-4" />
                </div>
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <HiOutlineEnvelope className="text-white w-5 h-5" />
                </div>
                <span>support@cst.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
