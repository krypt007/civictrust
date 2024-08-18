'use client'
import { useActiveAccount, useActiveWallet, useDisconnect } from "thirdweb/react";
import { Button } from "../ui/button";

const Home = () => {
    const {disconnect} = useDisconnect();
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();
  return (
    <div className="flex flex-col justify-between bg-purple-950 px-5">

        {/** Header */}
        <div className="fixed w-full top-0 left-0 z-50 transition-all flex justify-between p-2 bg-[#9003fc]">
            <div className="flex flex-col text-white">
                
            </div>
            <Button onClick={()=> {disconnect(connectedWallet!)}}>Logout</Button>
        </div>

         {/** Main Section */}
        
    </div>
  )
}

export default Home