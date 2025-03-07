import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";

function Login() {
  const { handleLoginRegisterToggle, handleLogin, user, handleChanges } =
    useContext(EventContext);

  return (
    <div className="login w-full h-[100vh] flex flex-col items-center justify-center gap-[4rem] p-4 relative">
      <form
        onSubmit={handleLogin}
        className="form w-[35rem] h-[50rem] flex flex-col justify-center items-center p-4 bg-transparent border border-blue-600 rounded-[10px] backdrop-blur-2xl shadow-lg"
      >
        <div className="login-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-25 text-blue-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <h1 className="text-blue-300 text-[3rem] font-medium tracking-[2px] uppercase mb-[3rem]">
          Login
        </h1>
        <div className="login-info w-[80%] flex flex-col gap-4 relative">
          <div className="email w-full flex flex-col gap-[5px]">
            <label
              htmlFor="email"
              className="text-blue-300 font-medium tracking-[.5px] pl-4"
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your e-mail"
              id="email"
              value={user.email || ""}
              onChange={handleChanges}
              className="w-full h-[3rem] text-white border border-blue-300 rounded-[30px] p-2 px-12 focus:outline focus:outline-blue-500"
            />
            <div className="email-icon absolute top-[2.7rem] left-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div>
          {/* <div className="name w-full flex flex-col gap-[5px]">
            <label
              htmlFor="name"
              className="text-blue-300 font-medium tracking-[.5px] pl-4"
            >
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter your e-mail"
              id="name"
              value={user.name || ""}
              onChange={handleChanges}
              className="w-full h-[3rem] text-white border border-blue-300 rounded-[30px] p-2 px-12 focus:outline focus:outline-blue-500"
            />
            <div className="email-icon absolute top-[2.7rem] left-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div> */}
          <div className="password w-full flex flex-col gap-[5px]">
            <label
              htmlFor="password"
              className="text-blue-300 font-medium tracking-[.5px] pl-4"
            >
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              autoComplete="current-password"
              value={user.password || ""}
              onChange={handleChanges}
              className="w-full h-[3rem] text-white border border-blue-300 rounded-[30px] p-2 px-12 focus:outline focus:outline-blue-500"
            />
            <div className="password-icon absolute top-[8.5rem] left-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
          </div>
          <div className="btn w-full flex justify-center mt-[1rem]">
            <button className="w-full text-white text-[1.5rem] uppercase tracking-[2px] bg-blue-300 border border-blue-300 rounded-[30px] px-[3rem] py-[.5rem] hover:bg-blue-300 hover:text-white transition-all duration-300 cursor-pointer">
              Login
            </button>
          </div>
        </div>
        <p className="have-not-account flex items-center gap-2 text-white font-extralight tracking-[.6px] mt-[2.5rem]">
          If you have an already account{" "}
          <span
            className="font-bold underline tracking-[.6px] underline-offset-1 cursor-pointer"
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
