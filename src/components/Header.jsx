import {signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch()
 const navigate = useNavigate()
 const user = useSelector((store) => store.user)
 const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
    
     navigate("/error")

    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch( 
          addUser({
            uid:uid, 
            email:email, 
            displayName:displayName
          })
        )
         navigate("/browse")
         } else {
        dispatch(removeUser())
           navigate("/")
      }
    });
  
  return () => unsubscribe()

   }, [])

   const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())
   }

   const handleLanguageChange = (e) => {
       dispatch(changeLanguage(e.target.value))
   }

  return (
    <div className="absolute flex w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex-col md:flex-row md:justify-between justify-center">
        <img className="w-48 mx-auto md:mx-0"
            src={LOGO} alt="logo" />
         
         {user && (
            <div className="flex p-2 justify-between">
             {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(lang => 
                <option key={lang.identifier} value={lang.identifier}>
                     {lang.name} 
                </option>)}
              </select>}
               <button className="my-[17px] mx-1 px-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch?"Homepage" : "GPT Search"}</button>
                <img className="w-8 h-8 my-5 mx-1 md:block hidden" src="/images/usericon.jpg" alt="usericon p-2" />
                <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
            </div>
            )}
    </div>
  )
}

export default Header
