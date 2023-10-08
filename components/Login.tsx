'use client'
import { logo } from "@/public";
import {signIn } from "next-auth/react"
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center">
      <Image 
          src={logo}
          alt="logo"
          width={300}
          height={300}
      />
      <button onClick={()=>  signIn('google')} className="text-white text-3xl font-bold animate-pulse">Sign In</button>
    </div>
  )
}

export default Login