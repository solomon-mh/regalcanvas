import React from "react";
import Products from "./sub/Products";
import Testimonial from "./sub/Testimonial";
import FooterSection from "./FooterSection";
import office from "../assets/office.jpg";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from "./sub/SocialMediaIcon";

export default function About() {
  return (
    <div>
      <div className='container mx-auto text-center w-full  lg:w-3/4 p-6 md:p-12 lg:p-20'>
        <h1 className='text-brightRed text-2xl sm:text-4xl lg:text-6.5xl leading-snug word-spacing-4 lg:px-24  font-bold font-sans mb-12'>
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
      <div className='bg-white py-32'>
        <section className='block px-8 sm:px-28 lg:grid grid-cols-2 lg:px-0 lg:py-24 gap-4 lg:mx-20'>
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
      </div>
      <FooterSection />
    </div>
  );
}
