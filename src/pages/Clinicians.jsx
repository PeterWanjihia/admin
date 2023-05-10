import React from "react";
import CliniciansTable from "../components/CliniciansTable";
import { FiSearch, FiPlus } from "react-icons/fi";

function Clinicians() {
  return (
    <div className="p-3">
      <section className="bg-white p-3">
        <header className="flex items-center justify-between my-3 mb-5">
          <p className="text-3xl font-bold">Clinicians</p>

          <section className="flex items-center gap-3">
            <button className="bg-red text-white px-4 pr-6 rounded-md py-1.5 font-bold text-xl flex items-center gap-2">
              <FiPlus />
              <span className="text-lg">Add</span>
            </button>
            <div className="flex items-center gap-3 bg-input px-3 p-2 rounded-md text-lblack">
              <FiSearch className="text-xl" />
              <input
                type="search"
                placeholder="Search with name"
                className="bg-input"
              />
            </div>
          </section>
        </header>
        <CliniciansTable />
      </section>
    </div>
  );
}

export default Clinicians;
