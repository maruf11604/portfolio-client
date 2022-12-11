import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-zinc-500 via-gray-600 to-slate-500">
      <label
        htmlFor="my-button"
        className="btn btn-square btn-primary drawer-button flex  lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
