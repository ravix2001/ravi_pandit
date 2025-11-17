import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  // const { theme, setTheme } = useTheme();
  return (
    <>
      <div className=" min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <Hero />
        {/* <Testimonials /> */}
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};

export default Home;
