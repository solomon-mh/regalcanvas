import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcon, { SmallSocialMediaIcon } from "./sub/SocialMediaIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faSkype,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function FooterSection() {
  return (
    <div>
      <div className='grid grid-cols-4 gap-6 mx-12 px-12 py-24'>
        <div className='mx-auto'>
          <h1 className='font-bold text-brightRed'>MONARCHY</h1>
          <p className='leading-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            nostrum culpa commodi similique qui, eaque necessitatibus, saepe hic
            repellat suscipit.
          </p>
        </div>
        <div className='mx-auto leading-10'>
          <ul>
            <li className='nav-links'>
              <Link to='/Contact'>Contact</Link>
            </li>
            <li className='nav-links'>hello@mydomain.com</li>
            <li className='nav-links'>+1 829 2293 382</li>
            <li className='nav-links'>Support</li>
          </ul>
        </div>
        <div className='mx-auto leading-10'>
          <ul>
            <li className='nav-links'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-links'>
              <Link to='/Blog'>Blog</Link>
            </li>
            <li className='nav-links'>
              <Link to='/Service'>Services</Link>
            </li>
            <li className='nav-links'>
              <Link to='/About'>About Us</Link>
            </li>
          </ul>
        </div>
        <div className='mx-auto leading-10'>
          <ul>
            <li className='nav-links'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-links'>
              <Link to='/Blog'>Blog</Link>
            </li>
            <li className='nav-links'>
              <Link to='/Service'>Services</Link>
            </li>
            <li className='nav-links'>
              <Link to='/About'>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex mx-auto py-12'>
        <ul className='flex mx-auto text-brightRed gap-4'>
          <SmallSocialMediaIcon icon={faFacebookF} />
          <SmallSocialMediaIcon icon={faInstagram} />
          <SmallSocialMediaIcon icon={faTwitter} />
          <SmallSocialMediaIcon icon={faLinkedin} />
          <SmallSocialMediaIcon icon={faSkype} />
        </ul>
      </div>
      <div className='text-center pb-12'>
        <p>Copyright ©2023 All rights reserved | This template is cloned by</p>
        <p className='text-brightRed'>Solomon</p>
      </div>
      <div className='text-center p-4 items-center m-0 bg-gradient-to-br from-slate-300 to-slate-600 transition-all duration-2000 text-slate-200 hover:bg-gradient-to-br hover:from-slate-600 hover:to-purple-300 hover:text-black'>
        <a className='text-2xl font-mono font-extrabold' href='#nav-bar'>
          Top &uarr;
        </a>
      </div>
    </div>
  );
}
