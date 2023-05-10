import React from "react";
import PatientsTable from "../components/PatientsTable";
import { FiSearch } from "react-icons/fi";

function Patients() {
  return (
    <div className="p-3">
      <section className="bg-white p-3">
        <header className="flex items-center justify-between my-3 mb-5">
          <div className="flex items-center gap-3">
            <p className="text-3xl font-bold">Patients</p>
          </div>
          <div className="flex items-center gap-3 bg-input px-3 p-2 rounded-md text-lblack">
            <FiSearch className="text-xl" />
            <input
              type="search"
              placeholder="Search with UPI code"
              className="bg-input"
            />
          </div>
        </header>
        <PatientsTable />
      </section>
    </div>
  );
}

export default Patients;
