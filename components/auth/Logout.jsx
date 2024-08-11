
"use client"
import { signOut } from "next-auth/react";


const Logout = () => {
    return (
        <button onClick={()=>{signOut({callbackUrl:"http://localhost:3000/login"})}}>
          Logout
        </button>
    );
};

export default Logout;