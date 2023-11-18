import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { ThirdwebProvider } from "../components/ThirdwebProvider";
import { Sepolia } from "@thirdweb-dev/chains";

const activeChain = Sepolia;

// Always remember this will be our root component. Consider this index file. Do not change file name
const HomePage = () => {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="YOUR_CLIENT_ID" // You can get a client id from dashboard settings
    >
      <Header />
      <Hero />
    </ThirdwebProvider>
  );
};

export default HomePage;
