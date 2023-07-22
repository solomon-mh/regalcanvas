import React, { useEffect, useRef, useState } from "react";
import FooterSection from "./FooterSection";

export default function Contact() {
  const firstInputRef = useRef(null);
  useEffect(() => {
    firstInputRef.current.focus();
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    textArea: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSumbmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      textArea: "",
    });
  };
  return (
    <div>
      <div className='container mx-auto text-center w-3/4 pt-28 pb-64'>
        <h1 className='text-brightRed text-6xl font-bold font-sans mb-12'>
          Contact Us
        </h1>
        <p className='leading-8'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          incidunt vitae fugit harum architecto doloribus facere omnis
          recusandae pariatur porro quis alias quas animi, dignissimos fuga ab
          reprehenderit repudiandae ea?
        </p>
      </div>
      <div className='bg-white flex gap-16 justify-center items-center px-20 py-28'>
        <form onSubmit={handleSumbmit} method='post'>
          <div className='flex space-x-8'>
            <input
              ref={firstInputRef}
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder='First Name'
              onFocus={(e) => {
                e.target.style.borderColor = "rgb(240, 125, 125)";
                e.target.style.outline = "none";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "gray";
              }}
              className='h-12 w-full pl-3 pr-20 font-light py-6 border-1 border-slate-600 rounded my-4 '
            />
            <input
              type='text'
              name='lastName'
              onChange={handleChange}
              value={formData.lastName}
              placeholder='Last Name'
              onFocus={(e) => {
                e.target.style.borderColor = "rgb(240, 125, 125)";
                e.target.style.outline = "none";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "gray";
              }}
              className='h-12 w-full pl-3 pr-20 font-light py-6 border-1 border-slate-600 rounded my-4'
            />
          </div>
          <br />
          <textarea
            name='textArea'
            onChange={handleChange}
            value={formData.textArea}
            id=''
            cols='30'
            rows='10'
            placeholder='Write Your Massage here.'
            onFocus={(e) => {
              e.target.style.borderColor = "rgb(240, 125, 125)";
              e.target.style.outline = "none";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "gray";
            }}
            className='relative w-full px-4 py-5 border-1 rounded border-slate-600'
          />
          <button className='py-3 my-3 rounded-3xl bg-brightRed text-white w-1/2 text-center transition-all duration-500 hover:bg-BrighterRed'>
            Send Message
          </button>
        </form>
        <div className='w-1/4 px-2'>
          <h1 className='text-3xl py-8'>Contact info</h1>
          <b className='font-semibold pt-3 block'>Address</b>
          <p className='text-simpleLight'>
            34 Street Name, City Name Here, United States
          </p>
          <b className='font-semibold pt-3 block'>Phone</b>
          <p className='text-simpleLight'>+1 242 4942 290</p>
          <b className='font-semibold pt-3 block'>Email</b>
          <p className='text-simpleLight'>info@yourdomain.com</p>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
