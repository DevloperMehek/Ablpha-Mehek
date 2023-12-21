// pages/index.js
'use client'
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../app/firebase/config";
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import "./App.css";

import App from "./App";
// import ReactGiphySearchbox from "react-gipy-searchbox";

const Home = () => {

  // Sign-in Sign-up
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');

  console.log({user})
 
  if (!user && !userSession){
    router.push('/sign-up')
  }


  return (
    
    <div>
       {/* <button onClick={()=> {
        signOut(auth)
        sessionStorage.removeItem('user')
        }}>
          Log Out
      </button>  */}
      <App />

    </div>
  );
};

export default Home;
























// import React from "react"
// import ReactDom from 'react-dom'
// import App from './app'
// import { App } from "./app"

// ReactDom.render(<App/>,document.getElementById("root"))