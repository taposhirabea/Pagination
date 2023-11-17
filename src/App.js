
import './App.css';
import React from 'react';
import HomePage from './pages/HomePage'

// import { EthereumClient, modalConnectors, walletConnectProvider } from "@web3modal/ethereum";
// import { Web3Modal } from "@web3modal/react";
// import { configureChains, createClient, WagmiConfig } from "wagmi";
// import { arbitrum, mainnet, polygon } from "wagmi/chains";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

import { useWeb3Modal } from '@web3modal/wagmi/react'


function App() {

  // const chains = [mainnet, polygon, arbitrum]
  const projectId = '53a58e69b07b6ceb3896491eb5bcdfd9'

  // 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

const { open, close } = useWeb3Modal()
open({ view: 'Account' })


  // const { provider } = configureChains(chains, [
  //   walletConnectProvider({ projectId }),
  // ]);
  // const wagmiClient = createClient({
  //   autoConnect: true,
  //   connectors: modalConnectors({
  //     projectId,
  //     version: "1", // or "2"
  //     appName: "web3Modal",
  //     chains,
  //   }),
  //   provider,
  // });
  
  // // Web3Modal Ethereum Client
  // const ethereumClient = new EthereumClient(wagmiClient, chains);


  return (
    <>
    {/* <WagmiConfig client={wagmiClient}>
      <h1>toooo</h1>
    </WagmiConfig> */}
    

    {/* <Web3Modal
      projectId={projectId}
      ethereumClient={ethereumClient}
    /> */}

<WagmiConfig config={wagmiConfig}>
   <HomePage/>
    </WagmiConfig>

    <w3m-button />
  </>
  );
}

export default App;

