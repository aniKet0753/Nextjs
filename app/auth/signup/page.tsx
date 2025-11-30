"use client"

import axios from "axios"
import { useState } from "react";
import  {  useRouter } from "next/navigation";

export default  function Signup(){
  const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const router = useRouter();

  return <div>
    <div>
    <input type="text"placeholder="Enter your username" onChange={e=> {
      setUsername(e.target.value);
    }}></input></div><br/>
    <input type="text" placeholder="Enter yout password" onChange={e=>{
      setpassword(e.target.value)
    }}></input><br />
    <button className="text-black bg-white border-4 " onClick={ async () =>{
      await axios.post("http://localhost:3000/auth/signup", {
        username,
        password
    })
    router.push("/auth/signin");
    }
    }>sign up</button>
  </div>
 }
