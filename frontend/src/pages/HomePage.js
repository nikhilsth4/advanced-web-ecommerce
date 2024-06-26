import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
const HomePage = () => {
  const { user } = useAuth0();
  console.log({ user });
  return (
    <main className=" bg-[rgb(25,25,25)]">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
