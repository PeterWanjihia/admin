import React from "react";
import { toggleEditPatient } from "../redux/features/ModalSlice";

function EditPatient({ dispatch }) {
  return (
    <div className="bg-white rounded-md p-5 w-full max-w-[500px] mx-5">
      <h1 className="text-center text-xl font-bold border-b-[1px] border-bcolor pb-2">
        Edit patients
      </h1>
      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg">
          UPI code
        </label>
        <input
          type="text"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          value="Join Doe"
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg">
          Last Order
        </label>
        <input
          type="text"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          value="22/03/2023"
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg">
          Next Order
        </label>
        <input
          type="date"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          value="07-23-2023"
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg">
          Can Order
        </label>
        <select className="bg-input h-[45px] px-5 rounded-sm text-lblack">
          <option value="">- Select -</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
      </div>

      <section className="flex gap-5 mt-5">
        <button
          onClick={() => dispatch(toggleEditPatient())}
          className="w-full rounded-md h-[45px] text-white text-lg font-bold bg-blue"
        >
          Cancel
        </button>
        <button
          onClick={() => dispatch(toggleEditPatient())}
          className="w-full rounded-md h-[45px] text-white text-lg font-bold bg-red"
        >
          Submit
        </button>
      </section>
    </div>
  );
}

export default EditPatient;
