import PortfolioImgCont from "../components/PortfolioImgCont";
import ScrollToTop from "../utils/ScrollToTop";

export default function Portfolio() {
  return (
    <div>
      <div className='hero_div'>
        <h1 className='hero_header'>Our Portfolio</h1>
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
      <section
        style={{
          backgroundColor: "white",
        }}
        className='py-16'
      >
        <PortfolioImgCont />
      </section>
      <ScrollToTop />
    </div>
  );
}
