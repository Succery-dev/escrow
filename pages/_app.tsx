import React from 'react';
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  Theme,
  lightTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  walletConnectWallet,
  safeWallet,
  metaMaskWallet,
  imTokenWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  goerli,
  sepolia,
  polygonMumbai,
  localhost,
  gnosis,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import "../styles/globals.css";
import type { AppProps } from "next/app";

import merge from "lodash.merge";

const AlchemyApiKey = `${process.env.ALCHEMY_API_KEY}`;

const { chains, provider } = configureChains(
  [goerli, sepolia, polygonMumbai, localhost, gnosis],
  [alchemyProvider({ apiKey: AlchemyApiKey }), publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ chains }),
      safeWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      imTokenWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const customWalletTheme: Theme = merge(lightTheme(), {
  colors: {
    accentColor: "#3E8EEC",
  },
} as Theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} coolMode theme={customWalletTheme}>
          {/* <Navbar /> */}
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
