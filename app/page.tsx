import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Always remember this will be our root component. Consider this index file. Do not change file name
const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default HomePage;