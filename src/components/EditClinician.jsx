import { useDispatch } from "react-redux";
import { toggleEditClinician } from "../redux/features/ModalSlice";

function EditClinician() {
  const dispatch = useDispatch();

  return (
    <form className="bg-white rounded-md p-5 w-full max-w-[500px] mx-5">
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
        <input
          type="text"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          value="Join Doe"
        />
      </div>

      <section className="flex gap-5 mt-5">
        <button
          onClick={() => dispatch(toggleEditClinician())}
          className="w-full rounded-md h-[45px] text-white text-lg font-bold bg-blue"
        >
          Cancel
        </button>
        <button
          onClick={() => dispatch(toggleEditClinician())}
          className="w-full rounded-md h-[45px] text-white text-lg font-bold bg-red"
        >
          Update
        </button>
      </section>
    </form>
  );
}

export default EditClinician;
