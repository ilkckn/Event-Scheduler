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
    showPassword,
    togglePasswordVisibility,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
  } = useContext(EventContext);

  return (
    <div className="register w-full h-[100vh] flex items-center justify-center p-4 relative">
      <form
        onSubmit={handleRegister}
        className="form w-[35rem] h-[55rem] flex flex-col justify-center items-center p-4 bg-transparent border border-blue-800 rounded-[10px] backdrop-blur-2xl shadow-2xl"
      >
        <div className="register-logo mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-23 text-white"
          >
            <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
          </svg>
        </div>
        <h1 className="text-white text-[3rem] font-medium tracking-[1px] uppercase mb-[3rem]">
          Register
        </h1>
        <div className="register-info w-[80%] flex flex-col gap-4 relative">
          <div className="email w-full flex flex-col gap-[5px]">
            <label
              htmlFor="email"
              className="text-white font-medium tracking-[.5px] pl-4"
            >
              Email:
            </label>
            <input
              type="email"
              value={user.email || ""}
              onChange={handleChanges}
              placeholder="Enter your e-mail"
              id="email"
              className="w-full h-[3rem] text-white font-extralight border border-white rounded-[30px] p-2 px-12 focus:outline focus:outline-blue-500"
            />
            <div className="email-icon absolute top-[2.7rem] left-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div>
          <div className="name w-full flex flex-col gap-[5px]">
            <label
              htmlFor="name"
              className="text-white font-medium tracking-[.5px] pl-4"
            >
              Name:
            </label>
            <input
              type="text"
              value={user.name || ""}
              onChange={handleChanges}
              placeholder="Enter your e-mail"
              id="name"
              className="w-full h-[3rem] text-white font-extralight border border-white rounded-[30px] p-2 px-12 focus:outline focus:outline-blue-500"
            />
            <div className="name-icon absolute top-[8.5rem] left-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div>
          <div className="password w-full flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-white font-medium tracking-[.5px] pl-4"
            >
              Password:
            </label>
            <input
              type="password"
              value={user.password || ""}
              onChange={handleChanges}
              placeholder="Enter your password"
              id="password"
              className="w-full h-[3rem] text-white font-extralight border border-white rounded-[30px] p-2 px-12 focus:outline focus:outline-blue-500"
            />
            <div className="confirm-password-icon absolute top-[14.2rem] left-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
          </div>
          <div className="confirm-password w-full flex flex-col gap-1">
            <label
              htmlFor="confirm-password"
              className="text-white font-medium tracking-[.5px] pl-4"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              value={confirmPassword || ""}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm your password"
              id="confirm-password"
              className="w-full h-[3rem] text-white font-extralight border border-white rounded-[30px] p-2 px-12 focus:outline focus:outline-blue-500"
            />
            <div className="confirm-password-icon absolute top-[20rem] left-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-white"
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
            <button className="w-full text-white text-[1.3rem] uppercase tracking-[2px] bg-blue-300 border border-white rounded-[30px] px-[3rem] py-[.4rem] hover:bg-white hover:text-blue-300 transition-all duration-500 cursor-pointer">
              Register
            </button>
          </div>
        </div>
        <p className="already-account flex items-center gap-2 text-white font-extralight tracking-[.6px] mt-[2.5rem]">
          Already have an account?{" "}
          <span
            className="font-bold underline tracking-[.6px] underline-offset-1 cursor-pointer"
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
