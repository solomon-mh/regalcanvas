import Products from "../components/sub/Products";
import Testimonial from "../components/sub/Testimonial";
import ScrollToTop from "../utils/ScrollToTop";
import office from "../assets/office.jpg";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from "../components/sub/SocialMediaIcon";

export default function About() {
  return (
    <div>
      <div className='hero_div'>
        <h1 className='text-brightRed font-bold font-sans mb-12 text-2xl leading-loose sm:text-4xl lg:text-6.5xl  lg:px-24 '>
          About Us
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
      <div className='bg-white'>
        <section className='block px-8 grid-cols-2 gap-4 sm:px-28 lg:grid lg:px-0 lg:py-24 lg:mx-20'>
          <div className='pt-12'>
            <img src={office} alt='office' />
          </div>
          <div className='py-12 lg:pl-20'>
            <div>
              <h1 className='text-4xl text-brightRed font-bold font-sans pb-12'>
                Who we are
              </h1>
              <p className='leading-8 text-simpleLight'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem officia nesciunt quas, laudantium ex rem voluptas quod,
                distinctio eum tenetur. Placeat, quisquam, consequatur. Quam
                expedita neque nostrum iusto commodi minima!
              </p>
              <p className='leading-8 py-6 text-simpleLight'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                officia dolorem itaque necessitatibus molestiae possimus
                asperiores dolore modi non inventore accusantium in voluptatum
                tempore qui hic dolorum nulla quae similique.
              </p>
            </div>
            <div>
              <ul className='flex text-brightRed gap-4 px-8'>
                <SocialMediaIcon icon={faFacebookF} />
                <SocialMediaIcon icon={faInstagram} />
                <SocialMediaIcon icon={faTwitter} />
              </ul>
            </div>
          </div>
        </section>
        <Products />
        <Testimonial />
        <ScrollToTop />
      </div>
    </div>
  );
}
