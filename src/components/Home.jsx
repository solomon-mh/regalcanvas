import Hero from "./Hero";
import SiteSection from "./SiteSection";
import BlogUpdates from "./sub/BlogUpdates";
import Sites from "./sub/Sites";

export default function Home() {
  return (
    <div>
      <Hero />
      <SiteSection />
      <BlogUpdates />
      <Sites />
    </div>
  );
}
