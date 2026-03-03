import React from "react";
import { HiPlus } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-12 py-4">
      <div className="flex-1">
        <a className="text-xl font-bold cursor-pointer">CS — Ticket System</a>
      </div>
      <div className="flex gap-2">
        <ul className="menu menu-horizontal px-1 font-medium hidden lg:flex">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none ml-4 rounded-lg px-6">
          <HiPlus className="w-5 h-5" />
          New Ticket
        </button>
        {/* Mobile menu dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
