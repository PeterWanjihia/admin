import { useSelector } from "react-redux";
import { toggleEditPatient } from "../redux/features/ModalSlice";
import moment from "moment";

function EditPatient({ dispatch }) {
  const { selectedPatient } = useSelector((store) => store.auth);
  return (
    <div className="bg-white rounded-md p-5 w-full max-w-[500px] mx-5">
      <h1 className="text-center text-xl font-bold border-b-[1px] border-bcolor pb-2">
        Edit patients
      </h1>
      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg">
          CCC no.
        </label>
        <input
          type="text"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          value={selectedPatient?.ccc_no}
          disabled
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg">
          Last Order
        </label>
        <input
          type="text"
          className="bg-input h-[45px] px-5 rounded-sm text-green"
          disabled
          value={moment(selectedPatient.last_order).format("L")}
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg">
          Next Order
        </label>
        <div className="flex items-center gap-2 h-[45px] bg-input px-5">
          <span className="text-red">
            {moment(selectedPatient.next_order).format("L")}
          </span>
          <input
            type="date"
            className="bg-input rounded-sm text-lblack ml-auto"
            placeholder="fe"
            value={moment(selectedPatient.next_order).format("L")}
          />
        </div>
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
