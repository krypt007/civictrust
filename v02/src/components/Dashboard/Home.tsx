'use client'
import { useActiveAccount, useActiveWallet, useDisconnect } from "thirdweb/react";
import { Button } from "../ui/button";
import Header from "@/components/Header";

import Link from 'next/link';


const Home = () => {
    const {disconnect} = useDisconnect();
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();
  return (
    <div className="flex flex-col justify-between bg-purple-950 px-5">

       
        <div className="fixed w-full top-0 left-0 z-50 transition-all flex justify-between p-2 bg-blue-800">
            <div className="flex text-white p-2 gap-5 justify-end ">
                <Link href="/" className="hover:text-gray-400">Dashboard</Link>
                <Link href="/projects" className="hover:text-gray-400">Projects</Link>
                
            </div>
            <Button onClick={()=> {disconnect(connectedWallet!)}}>Logout</Button>
        </div>

         {/** Main Section */}
        
    </div>
  )
}

export default Home