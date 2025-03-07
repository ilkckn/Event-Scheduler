import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";

function Login() {
  const { handleLoginRegisterToggle, handleLogin, user, handleChanges } =
    useContext(EventContext);
  return (
    <div className="login w-full h-[100vh] flex items-center justify-center bg-gray-800 p-4">
      <form
        onSubmit={handleLogin}
        className="form w-[30rem] h-[40rem] flex flex-col justify-center items-center border border-gray-400 p-4 bg-white rounded-[10px]"
      >
        <h1 className="text-gray-800 text-[2.5rem] font-medium tracking-[1px] uppercase mb-[3rem]">
          Login
        </h1>
        <div className="login-info w-[80%] flex flex-col gap-2">
          <div className="email w-full flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-gray-800 font-medium tracking-[.5px]"
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your e-mail"
              id="email"
              value={user.email || ""}
              onChange={handleChanges}
              className="w-full h-[2.5rem] text-gray-500 border border-gray-800 p-2"
            />
          </div>
          <div className="password">
            <label
              htmlFor="password"
              className="text-gray-800 font-medium tracking-[.5px]"
            >
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              value={user.password || ""}
              onChange={handleChanges}
              className="w-full h-[2.5rem] text-gray-500 border border-gray-800 p-2"
            />
          </div>
          <div className="btn w-full flex justify-center mt-[1rem]">
            <button className="text-gray-800 text-[1.2rem] tracking-[1px] bg-transparent border border-b-gray-800 rounded-[5px] px-[3rem] py-[.3rem] hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer">
              Login
            </button>
          </div>
        </div>
        <p className="already-account text-gray-800 mt-[2.5rem]">
          If you have an already account{" "}
          <span
            className="font-bold underline underline-offset-1 cursor-pointer"
            onClick={handleLoginRegisterToggle}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
