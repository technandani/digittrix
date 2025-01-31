import React from "react";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import InstituteSection from "../components/InstituteSection";
import Testimonial from "../components/Testimonial";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import ResHero from "../components/ResHero";
import ResNav from "../components/ResNav";

const Landing = () => {
  return (
    <>
      <div>
        <div className="maxNone">
          <ResHero />
        </div>
        <Hero />
        <ServiceSection />
        <InstituteSection />
        <Testimonial />
        <BlogSection />
        <Footer />
      </div>
      <div className="maxNone" style={{ position: "fixed", bottom: "0" }}>
        <ResNav />
      </div>
    </>
  );
};

export default Landing;
