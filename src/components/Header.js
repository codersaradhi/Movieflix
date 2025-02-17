import { URLs } from "../utils/constants"


export const Header = () =>{
    return(
        <div className="absolute bg-gradient-to-b from-black w-full ">
            <img className="w-48  ml-20 mt-10"  src={URLs.LOGO_URL} alt="netflix logo"/>
        </div>
    )
}