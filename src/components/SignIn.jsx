import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";

function SignIn() {
  const {
    handleLoginRegisterToggle,
    handleRegister,
    user,
    confirmPassword,
    handleChanges,
    handleConfirmPasswordChange,
  } = useContext(EventContext);

  return (
    <div className="register w-full h-[100vh] flex items-center justify-center bg-gray-800 p-4">
      <form
        onSubmit={handleRegister}
        className="form w-[30rem] h-[40rem] flex flex-col justify-center items-center border border-gray-400 p-4 bg-white rounded-[10px]"
      >
        <h1 className="text-gray-800 text-[2.5rem] font-medium tracking-[1px] uppercase mb-[3rem]">
          Register
        </h1>
        <div className="register-info w-[80%] flex flex-col gap-2">
          <div className="email w-full flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-gray-800 font-medium tracking-[.5px]"
            >
              Email:
            </label>
            <input
              type="email"
              value={user.email || ""}
              onChange={handleChanges}
              placeholder="Enter your e-mail"
              id="email"
              className="w-full h-[2.5rem] text-gray-500 border border-gray-800 p-2"
            />
          </div>
          <div className="password w-full flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-gray-800 font-medium tracking-[.5px]"
            >
              Password:
            </label>
            <input
              type="password"
              value={user.password || ""}
              onChange={handleChanges}
              placeholder="Enter your password"
              id="password"
              className="w-full h-[2.5rem] text-gray-500 border border-gray-800 p-2"
            />
          </div>
          <div className="confirm-password w-full flex flex-col gap-1">
            <label
              htmlFor="confirm-password"
              className="text-gray-800 font-medium tracking-[.5px]"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              value={confirmPassword || ""}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm your password"
              id="confirm-password"
              className="w-full h-[2.5rem] text-gray-500 border border-gray-800 p-2"
            />
          </div>
          <div className="btn w-full flex justify-center mt-[1rem]">
            <button className="text-gray-800 text-[1.2rem] tracking-[1px] bg-transparent border border-b-gray-800 rounded-[5px] px-[3rem] py-[.3rem] hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer">
              Register
            </button>
          </div>
        </div>
        <p className="already-account text-gray-800 mt-[2.5rem]">
          Already have an account?{" "}
          <span
            className="font-bold underline underline-offset-1 cursor-pointer"
            onClick={handleLoginRegisterToggle}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
