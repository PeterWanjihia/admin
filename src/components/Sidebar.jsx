import { NavLink } from "react-router-dom";
import { AiOutlineDashboard, AiFillMedicineBox } from "react-icons/ai";
import { TbStethoscope } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";

function Sidebar() {
  return (
    <nav className="w-full flex flex-col fixed max-w-[350px] border-r-bcolor min-h-screen h-full border-r-[1px] bg-white sticky top-0 nav">
      <header className="flex items-center justify-between border-b-bcolor border-b-[1px] px-3 h-20 sticky top-0 bg-white">
        <span className="text-4xl font-bold text-red my-3">CURECAB</span>
      </header>
      <ul className="px-3 pt-2 grow">

        <li className="py-2">
          <NavLink
            className={({ isActive }) =>
              `text-lg flex items-center gap-4 p-3 px-5 ${
                isActive && "text-red bg-redlt"
              }`
            }
            to="/"
          >
            <AiOutlineDashboard />
            <span className="">Dashboard</span>
          </NavLink>
        </li>

        <li className="py-2">
          <NavLink
            className={({ isActive }) =>
              `text-lg flex items-center gap-4 p-3 px-5 ${
                isActive && "text-red bg-redlt"
              }`
            }
            to="/orders"
          >
            <AiFillMedicineBox />
            <span className="">Orders</span>
          </NavLink>
        </li>

        <li className="py-2">
          <NavLink
            className={({ isActive }) =>
              `text-lg flex items-center gap-4 p-3 px-5 ${
                isActive && "text-red bg-redlt"
              }`
            }
            to="/clinicians"
          >
            <TbStethoscope />
            <span className="">Clinicians</span>
          </NavLink>
        </li>

        <li className="py-2">
          <NavLink
            className={({ isActive }) =>
              `text-lg flex items-center gap-4 p-3 px-5 ${
                isActive && "text-red bg-redlt"
              }`
            }
            to="/patients"
          >
            <HiUsers />
            <span className="">Patients</span>
          </NavLink>
        </li>
        
      </ul>
      <div className="p-3">
        <button
          className="flex gap-2 items-center bg-input 
        p-4 rounded-md w-full mt-[30px]"
        >
          <img
            src="avatar.png"
            alt=""
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <span>Admin</span>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
