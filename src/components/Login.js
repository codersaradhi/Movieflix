import { useState } from "react";
import { URLs } from "../utils/constants";
import { Header } from "./Header";

export const Login = () => {
    const [signUpForm , setSignUpForm] = useState(true)
    const loginForm = () =>{
        setSignUpForm(!signUpForm)
    }


  return (
    <div>
      <Header />
      <div>
        <img src={URLs.BG_IMG_URL} alt="backgroundimage" />
      </div>
      <form className="bg-black bg-opacity-75 absolute top-28 w-[30%] p-16 flex flex-col mx-auto left-0 right-0 text-white h-[90%]">
        <h3 className="font-bold text-4xl mb-4"> {signUpForm ? " Sign In" : "Sign Up"}</h3>
        {!signUpForm &&
            <input
            className="w-full py-4 px-2 bg-black bg-opacity-50 border-[1px] border-gray-600 mb-4"
            type="text"
            placeholder="Full Name"
          />
        }
        <input
          className="w-full py-4 px-2 bg-black bg-opacity-50 border-[1px] border-gray-600 mb-4"
          type="text"
          placeholder="Email Adderess"
        />
        <input
          className="w-full py-4 px-2 bg-black bg-opacity-50 border-[1px] border-gray-600 mb-4"
          type="password"
          placeholder="Password"
        />
        <button className="w-full py-3 px-2 bg-red-700" type="submit">
         {signUpForm ? " Sign In" : "Sign Up"}
        </button>
        {signUpForm && <div> <p className=" text-xl text-gray-500 text-center my-2">OR</p>
        <button
          className="w-full py-3 px-2 font-semibold bg-white  bg-opacity-30"
          type="submit"
        >
          Use a sign-In code
        </button> 
        <button className="w-full py-3 px-2" type="submit">
          Forget Password
        </button>
        <div className="flex items-center">
          <span className="mt-[2px] mr-2">
            <input type="checkbox" checked />
          </span>
          <span className="text-lg">Remember me</span>
        </div>  </div>}
        <p className="text-gray-400 mt-8 cursor-pointer">
          {signUpForm ? "New to Netflix?" : "Already registered?"} <span className="text-white  hover:underline " onClick={loginForm}>{signUpForm ? "Sign up now." : "SignIn" }</span>{" "}
        </p>
        <p className="text-[11px] text-gray-400 mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};
