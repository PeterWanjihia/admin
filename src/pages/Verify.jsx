import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Verify() {
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone || !confirmPassWord || !password)
      return toast.error("All fields are required!");

    if (password !== confirmPassWord)
      return toast.error("Passwords must be the same!");

    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/clinician/verify",
        {
          token: location.search.split("=").pop(),
          phone,
          password,
        }
      );
      setLoading(false);
      navigate("/login");
      return toast.success(data.msg);
    } catch (error) {
      setLoading(false);
      return toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form className="bg-white p-3 rounded-md w-full max-w-[500px] py-6">
        <div className="relative">
          <p className="text-3xl mb-5 text-center">Set password</p>
        </div>

        <div className="w-full mb-3">
          <label htmlFor="" className="text-[18px]">
            Phone number
          </label>
          <input
            disabled={loading}
            value={phone}
            onChange={(e) => setPhone(e.target.value.trim())}
            type="text"
            placeholder="+254712345678"
            className="w-full bg-input p-4 rounded-sm mt-2 outline-none text-lblack  
            focus:border-green border-[1px] border-input text-lg"
          />
        </div>

        <div className="w-full mb-3">
          <label htmlFor="" className="text-[18px]">
            Password
          </label>
          <input
            disabled={loading}
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            type="password"
            placeholder="* * * * * *"
            className="w-full bg-input p-4 rounded-sm mt-2 outline-none text-lblack  
            focus:border-green border-[1px] border-input text-lg"
          />
        </div>

        <div className="w-full mb-3">
          <label className="text-[18px]" htmlFor="">
            Confirm Password
          </label>
          <input
            disabled={loading}
            value={confirmPassWord}
            onChange={(e) => setConfirmPassWord(e.target.value.trim())}
            minLength={6}
            maxLength={16}
            type="password"
            placeholder="* * * * * *"
            className="w-full bg-input p-4 rounded-sm  mt-2 text-lg
            outline-none text-lblack focus:border-green border-[1px] border-input"
          />
        </div>

        <button
          disabled={loading}
          onClick={handleSubmit}
          className="w-full bg-red py-3 text-white text-bold text-xl hover:opacity-[.8] rounded-md mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Verify;
