import React from "react";
import { RiMenu2Line } from "react-icons/ri";

function Navbar() {
  return (
    <div className="w-[100%] bg-white flex h-20 px-5 justify-between items-center sticky top-0 ">
      <div className="flex items-center gap-3">
        <RiMenu2Line className="text-3xl cursor-pointer" />
        <span className="text-4xl font-bold text-red my-3 md:hidden">
          ARVOME
        </span>
      </div>
      <button className="flex gap-2 items-center bg-input p-1 px-4 rounded-md">
        <img
          src="avatar.png"
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <span>Admin</span>
      </button>
    </div>
  );
}

export default Navbar;
