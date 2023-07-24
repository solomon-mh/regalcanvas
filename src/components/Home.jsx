import React from "react";
import Hero from "./Hero";
import SiteSection from "./SiteSection";
import BlogUpdates from "./sub/BlogUpdates";
import Sites from "./sub/Sites";
import FooterSection from "./FooterSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <SiteSection />
      <BlogUpdates />
      <Sites />
      <FooterSection />
    </div>
  );
}
