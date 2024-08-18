'use client'
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton, } from "thirdweb/react";
import {client} from '@/app/client'

// import { createThirdwebClient } from "thirdweb";
import { bscTestnet } from "thirdweb/chains";
import { createWallet,  inAppWallet, } from "thirdweb/wallets";
import { Button } from '../ui/button';

const wallets = [
  createWallet("io.metamask"),
  inAppWallet({
    auth: {
      options: [
        "email",
        "google",
        "apple",
        "facebook",
        "phone",
        "passkey",
      ],
    },
  }),
];

export default function Web3Login() {
  return (
    <div  className="h-full w-screen flex flex-col items-center justify-between bg-blue-600  object-fill ">
      <div className='flex w-screen object-fill justify-end p-2'>
        <Link href={`/`}><div className='bg-blue-400 hover:bg-red-950 text-white text-sm px-2 py-1 rounded-md'>Dashboard</div></Link>


      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600">
        
       
        
        <div className='flex w-full justify-center'>
          
          <div className="flex flex-col items-center w-full max-w-xs p-3">
          <ConnectButton
              client={client}
              wallets={wallets}
              accountAbstraction={{
                chain: bscTestnet,
                factoryAddress: process.env.NEXT_PUBLIC_BSC_TESTNET_FACTORY_ADDRESS as string,
                gasless: true,
              }}
              theme={"dark"}
              connectButton={{ label: "Login" }}
              connectModal={{ size: "compact", title: "Login", }}
          />
            
          </div>
        </div>
      </div>
    </div>
    
  );
}
