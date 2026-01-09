"use client"
import Link from "next/link";
import { SessionProvider,signIn,signOut,useSession } from "next-auth/react";
//usesession hook is the easyest way to check user login or not
export default function Home(){
  return <SessionProvider>
    <RealHome></RealHome>
  </SessionProvider>
}

export  function RealHome() {
  const session = useSession();
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="mt-16 bg-white text-black p-10 rounded-xl shadow-lg w-[90%] max-w-xl">
        {session.status === "authenticated" && <button onClick={()=>signOut()}>Logout</button>}
        {session.status =="unauthenticated" && <button onClick={()=> signIn()}>signIn</button>}
        <h1 className="text-3xl font-semibold text-center">Welcome to Todo App</h1>

        <div className="flex gap-4 justify-center mt-8">
          <Link 
            href="/auth//signin" 
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Sign in to Todo
          </Link>

          <Link 
            href="/auth//signup" 
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition"
          >
            Sign up to Todo
          </Link>
        </div>
      </div>
    </div>
  );
}
