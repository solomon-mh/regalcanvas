import Hero from "../components/Hero";
import SiteSection from "../components/SiteSection";
import BlogUpdates from "../components/sub/BlogUpdates";
import Sites from "../components/sub/Sites";
import ScrollToTop from "../utils/ScrollToTop";

export default function Home() {
  return (
    <main id='home'>
      <Hero />
      <SiteSection />
      <BlogUpdates />
      <Sites />
      <ScrollToTop />
    </main>
  );
}
