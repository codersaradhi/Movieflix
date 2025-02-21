import { URLs } from "../utils/constants"
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect } from 'react';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser ,removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from "../utils/gptSlice";



export const Header = () =>{
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)
    const navigate = useNavigate()
    const handleClick = () =>{
        signOut(auth).then(() => {

          }).catch((error) => {
            navigate('/errorpage')
          });
    }
    useEffect(()=>{
      const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const{uid,displayName,email,photoURL} = user;
              dispatch(addUser({user:uid,displayName: displayName, email: email ,photoURL:photoURL}))
              navigate("/browse")
              
            } else {
              dispatch(removeUser())
              navigate('/')
            }
          });
          //unsubscribe when component unmounts
          return () => unsubscribe();
    },[])
    const handleGptSearchClick = () => {
      // Toggle GPT Search
      dispatch(toggleGptSearchView());
    };
    return(
        <div className="absolute bg-gradient-to-b from-black w-full flex justify-between z-10 ">
            <img className="w-44 h-20  ml-20 mt-4 "  src={URLs.LOGO_URL} alt="netflix logo"/>
       
         {user && <div className="flex px-16 py-5">
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
            <img className="w-12 h-12 my-1 mx-2  object-cover" src={URLs.USER_AVATAR} alt="user-photo"/>
           <div>
           <h1 className="text-red-100 font-bold text-base">{user?.displayName}</h1>
           <button className="mr-5 text-white  font-bold text-base cursor-pointer" onClick={handleClick}>Strark</button>
           </div>
            </div>}
        </div>
    )
}