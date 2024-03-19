import Hero from "../components/Hero";
import SiteSection from "../components/SiteSection";
import BlogUpdates from "../components/sub/BlogUpdates";
import Sites from "../components/sub/Sites";

export default function Home() {
  return (
    <main>
      <Hero />
      <SiteSection />
      <BlogUpdates />
      <Sites />
    </main>
  );
}
