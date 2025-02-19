import { useRef, useState } from "react";
import { URLs } from "../utils/constants";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const email = useRef(null);
  const password = useRef(null);
    const name = useRef(null);

  const handleSubmit = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value
      //   name.current.value
    );
    setErrMsg(message);
    if (message) return;

    if (!signInForm) {
      //signUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value , photoURL: "https://media.istockphoto.com/id/1086164374/photo/statue-of-shiva-hindu-idol-on-the-ganges-river-rishikesh-india.jpg?s=612x612&w=0&k=20&c=MJgUvsXsoOwcZuTU9xSfJNMfwcA_kPdvnTuJpHwrqrc="
          }).then(() => {
            const {uid,displayName,email,photoURL} = auth.currentUser; //we have to update our current user with displayname and photourl value
            dispatch(addUser({
                uid:uid,
                displayName:displayName,
                email:email,
                photoURL:photoURL,
            }))
            navigate("/browse")
            // Profile updated!
            // ...
          }).catch((error) => {
            setErrMsg(error)
            // An error occurred
            // ...
          });
        //   console.log(user);
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(`${errorCode} - ${errorMessage}`);
        });
    } else {
      //signIn
      signInWithEmailAndPassword(auth,  email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        //   console.log(user)
        navigate("/browse")
          

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorMessage)
        
        });
    }

    //     if(email.current && password.current )
    // {

    //    const message = checkValidData(email.current.value,password.current.value)
    //    setErrMsg(message)
    // }else if(email.current && password.current && name.current)
    // {

    // } else(
    //     setErrMsg("you are missing some thing")
    // )
  };

  const loginForm = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img src={URLs.BG_IMG_URL} alt="backgroundimage" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-75 absolute top-28 w-[30%] p-16 flex flex-col mx-auto left-0 right-0 text-white h-[90%] transition ease duration-500 "
      >
        <h3 className="font-bold text-4xl mb-4">
          {" "}
          {signInForm ? " Sign In" : "Sign Up"}
        </h3>
        {!signInForm && (
          <input
            ref={name}
            className="w-full py-4 px-2 bg-black bg-opacity-50 border-[1px] border-gray-600 mb-4"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="w-full py-4 px-2 bg-black bg-opacity-50 border-[1px] border-gray-600 mb-4"
          type="text"
          placeholder="Email Adderess"
        />
        <input
          ref={password}
          className="w-full py-4 px-2 bg-black bg-opacity-50 border-[1px] border-gray-600 mb-4"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-700">{errMsg}</p>
        <button
          className="w-full py-3 px-2 bg-red-700"
          type="submit"
          onClick={handleSubmit}
        >
          {signInForm ? " Sign In" : "Sign Up"}
        </button>
        {signInForm && (
          <div>
            {" "}
            <p className=" text-xl text-gray-500 text-center my-2">OR</p>
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
                <input type="checkbox" />
              </span>
              <span className="text-lg">Remember me</span>
            </div>{" "}
          </div>
        )}
        <p className="text-gray-400 mt-8 cursor-pointer">
          {signInForm ? "New to Netflix?" : "Already registered?"}{" "}
          <span className="text-white  hover:underline " onClick={loginForm}>
            {signInForm ? "Sign up now." : "SignIn"}
          </span>{" "}
        </p>
        <p className="text-[11px] text-gray-400 mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};


export default Login;