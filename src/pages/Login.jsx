import { useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const [upi, setUpi] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!upi || !password) return toast.error("All fields are required!");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form className="bg-white p-3 rounded-md w-full max-w-[500px] py-6">
        <div className="relative">
          <p className="text-3xl mb-5 text-center">Login</p>
        </div>

        <div className="w-full mb-3">
          <label htmlFor="" className="text-[18px]">
            Email address
          </label>
          <input
            value={upi}
            onChange={(e) => setUpi(e.target.value.trim())}
            type="text"
            placeholder="abc@example.com"
            className="w-full bg-input p-4 rounded-sm mt-2 outline-none text-lblack
             focus:border-green border-[1px] border-input text-lg
            "
          />
        </div>

        <div className="w-full mb-3">
          <label className="text-[18px]" htmlFor="">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            minLength={6}
            maxLength={16}
            type="password"
            placeholder="* * * * * *"
            className="w-full bg-input p-4 rounded-sm mt-2 text-lg
            outline-none text-lblack focus:border-green border-[1px] border-input"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-red py-3 text-white text-bold text-xl hover:opacity-[.8] rounded-md mt-5"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
