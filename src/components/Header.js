import { SUPPORTED_LANGUAGES, URLs } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/errorpage");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            user: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute md:fixed  bg-gradient-to-b from-black w-full flex-col md:flex-row flex   justify-between z-10 ">
      <img
        className="w-44 h-20  mx-auto mt-4 md:mt-4 md:ml-20"
        src={URLs.LOGO_URL}
        alt="netflix logo"
      />

      {user && (
        <div className="flex px-16 py-5">
          {showGptSearch && <select className="bg-gray-900 text-white p-2 m-2" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="py-1 px-2 mx-4 my-2 bg-black border-2 border-gray-500 text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home": "GPT Search"}
          </button>
          <img
            className="w-12 h-12 my-1 mx-2  object-cover"
            src={URLs.USER_AVATAR}
            alt="user-photo"
          />
          <div>
            <h1 className="text-red-100 font-bold text-base">
              {user?.displayName}
            </h1>
            <button
              className="mr-5 text-white  font-bold text-base cursor-pointer"
              onClick={handleClick}
            >
              Strark
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
