import { URLs } from "../utils/constants"
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



export const Header = () =>{
    const user = useSelector((store) => store.user)
    const navigate = useNavigate()
    const handleClick = () =>{
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            navigate('/errorpage')
          });
          

    }
    return(
        <div className="absolute bg-gradient-to-b from-black w-full flex justify-between ">
            <img className="w-48  ml-20 mt-10"  src={URLs.LOGO_URL} alt="netflix logo"/>
       
         {user && <div className="flex p-10">
            <img className="w-8 h-8 my-2 mx-2 rounded-lg object-cover" src={user?.photoURL} alt="user-photo"/>
           <div>
           <h1 className="text-red-100 font-bold ">{user?.displayName}</h1>
           <button className="mr-5 text-white  text-sm" onClick={handleClick}>SignOut</button>
           </div>
            </div>}
        </div>
    )
}