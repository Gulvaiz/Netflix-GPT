import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constant";
const Login = () => {
 
   const [isSignInForm, setIsSignInForm] = useState(true)
   const [errorMessage, setErrorMessage] = useState(null)
   
   const dispatch = useDispatch()
   const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm)
   }

   const name = useRef(null)
   const email = useRef(null)
   const password = useRef(null)

   const handleButtonClick = () => {
       //  checkValidData(email, password)
       const message  = checkValidData(email.current.value, password.current.value)
       setErrorMessage(message)

       if(message) return 
           
       if(!isSignInForm){
            
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           // Signed up 
           const user = userCredential.user;
           updateProfile(user, {
            displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName} = auth.currentUser
            dispatch(
              addUser({
                uid:uid, 
                email:email, 
                displayName:displayName
              }))
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
          
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode+"-"+errorMessage)
           // ..
         });

       }
       else{
                
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });  

       }
      
   }

  return (
    <>
      <Header />
      <div className="absolute">
       <img className="h-screen object-cover md:w-screen" src={BG_URL} alt="" />
      </div>

       <form onSubmit={(e) => e.preventDefault()} className="p-12 bg-black absolute w-[95%] md:w-3/12 text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

            {!isSignInForm && (
             <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>
          )}


          <input ref={email} type="text" placeholder="Email Address" className="bg-slate-700 p-4 my-4 w-full" />

          <input ref={password} type="password" placeholder="Password" className="bg-slate-700  p-4 my-4 w-full"/>

          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>   

          <button onClick={handleButtonClick} className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
          <p className="py-4" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now...'}</p>
       </form>

    </>
  );
};

export default Login;
