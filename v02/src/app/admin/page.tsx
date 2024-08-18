'use client'
import { useActiveAccount, useActiveWallet, useDisconnect } from "thirdweb/react";

import Web3Login from '@/components/Dashboard/Web3Login';
import Home from '@/components/Dashboard/Home';

export default function Login() {
  const account = useActiveAccount();
  const connectedWallet = useActiveWallet();
  return (
    <>{!account  ? <Web3Login /> : <Home />}</>
  );
}