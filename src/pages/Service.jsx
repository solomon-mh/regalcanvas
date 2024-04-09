import Products from "../components/sub/Products";
import Testimonial from "../components/sub/Testimonial";
import ScrollToTop from "../utils/ScrollToTop";

export default function Service() {
  return (
    <div>
      <div className='hero_div'>
        <h1 className='text-brightRed leading-loose word-spacing-4 font-bold font-sans mb-12 text-2xl sm:text-4xl lg:text-6.5xl lg:px-24 '>
          Our Services
        </h1>
        <p className='leading-8 hidden sm:block'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          incidunt vitae fugit harum architecto doloribus facere omnis
          recusandae pariatur porro quis alias quas animi, dignissimos fuga ab
          reprehenderit repudiandae ea?
        </p>
        <p className='leading-8 block sm:hidden'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem
          nulla quos suscipit laborum fugit aspernatur rem pariatur illo.
        </p>
      </div>
      <Products />
      <Products />
      <Testimonial />
      <ScrollToTop />
    </div>
  );
}
