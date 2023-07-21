import React from "react";
import Products from "./sub/Products";
import Testimonial from "./sub/Testimonial";
import FooterSection from "./FooterSection";
import office from "../assets/office.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from "./sub/SocialMediaIcon";

export default function About() {
  return (
    <div>
      <div className='container mx-auto text-center w-3/4 pt-28 pb-64'>
        <h1 className='text-brightRed text-6xl font-extrabold font-sans mb-12'>
          About Us
        </h1>
        <p className='leading-8'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          incidunt vitae fugit harum architecto doloribus facere omnis
          recusandae pariatur porro quis alias quas animi, dignissimos fuga ab
          reprehenderit repudiandae ea?
        </p>
      </div>
      <div className='bg-white py-32'>
        <section className='grid grid-cols-2 gap-4 mx-20'>
          <div className='pt-12'>
            <img src={office} alt='office' />
          </div>
          <div className='pl-20'>
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
