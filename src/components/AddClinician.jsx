import React from "react";
import { toggleAddClinician } from "../redux/features/ModalSlice";

function AddClinician({ dispatch }) {
  return (
    <div className="bg-white rounded-md p-5 w-full max-w-[500px] mx-5">
      <h1 className="text-center text-xl font-bold border-b-[1px] border-bcolor pb-2">
        Add Clinician
      </h1>
      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg mb-1">
          Full name
        </label>
        <input
          type="text"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          value="Join Doe"
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg mb-1">
          Phone number
        </label>
        <input
          type="text"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          value="0712345678"
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg mb-1">
          Email address
        </label>
        <input
          type="text"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          value="Join Doe"
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg mb-1">
          Facility
        </label>
        <select className="bg-input h-[45px] px-5 rounded-sm text-lblack">
          <option value="">- Select -</option>
          <option value="one">one</option>
          <option value="one">two</option>
          <option value="one">three</option>
        </select>
      </div>

      <section className="flex gap-5 mt-5">
        <button
          onClick={() => dispatch(toggleAddClinician())}
          className="w-full rounded-md h-[45px] text-white text-lg font-bold bg-blue"
        >
          Cancel
        </button>
        <button
          onClick={() => dispatch(toggleAddClinician())}
          className="w-full rounded-md h-[45px] text-white text-lg font-bold bg-red"
        >
          Submit
        </button>
      </section>
    </div>
  );
}

export default AddClinician;
