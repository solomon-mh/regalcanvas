import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <ul className='flex gap-8 justify-end w-full p-12 pr-32 '>
      <li className='mr-auto ml-14 text-brightRed font-bold cursor-pointer'>
        MONARCHY
      </li>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/Portfolio'>
        <li>Portfolio</li>
      </Link>
      <Link to='/About'>
        <li>About</li>
      </Link>
      <Link to='/Service'>
        <li>Service</li>
      </Link>
      <Link to='/Blog'>
        <li>Blog</li>
      </Link>
      <Link to='/Contact'>
        <li>Contact</li>
      </Link>
    </ul>
  );
}
