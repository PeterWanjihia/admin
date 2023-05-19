import { useState } from "react";
import { toggleAddClinician } from "../redux/features/ModalSlice";
import { facilities } from "../../data";
import axios from "axios";
import toast from "react-hot-toast";

function AddClinician({ dispatch }) {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/clinician/register",
        { phone }
      );
      setLoading(false);
      toast.success(data.msg);
      dispatch(toggleAddClinician());
    } catch (error) {
      setLoading(false);
      return toast.error(error.response.data.msg);
    }
  };

  return (
    <form className="bg-white rounded-md p-5 w-full max-w-[500px] mx-5">
      <h1 className="text-center text-xl font-bold border-b-[1px] border-bcolor pb-2">
        Add Clinician
      </h1>
      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg mb-1">
          Full name
        </label>
        <input
          disabled={loading}
          type="text"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg mb-1">
          Phone number
        </label>
        <input
          disabled={loading}
          type="tel"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          placeholder="0712345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value.trim())}
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg mb-1">
          Email address
        </label>
        <input
          disabled={loading}
          type="text"
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          placeholder="abc@example.com"
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="" className="text-lg mb-1">
          Facility
        </label>
        <select
          className="bg-input h-[45px] px-5 rounded-sm text-lblack"
          disabled={loading}
        >
          <option value="">- Select -</option>
          {facilities.map((f, i) => (
            <option key={i} value={f.name}>
              {f.name}
            </option>
          ))}
        </select>
      </div>

      <section className="flex gap-5 mt-5">
        <button
          disabled={loading}
          onClick={() => dispatch(toggleAddClinician())}
          className="w-full rounded-md h-[45px] text-white text-lg font-bold bg-blue"
        >
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={handleRegister}
          className="w-full rounded-md h-[45px] text-white text-lg font-bold bg-red"
        >
          Submit
        </button>
      </section>
    </form>
  );
}

export default AddClinician;
