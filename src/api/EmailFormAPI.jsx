// import { useRef } from "react";
import { useState } from "react";
import { whenBlurred, whenFocused } from "../utils/eventHandler";
import axios from "axios";

export const EmailForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSumbmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_m3dnecs";
    const templateId = "template_9u7uphs";
    const publicKey = "gPbrAZqWiTvm9xjqA";

    const data = {
      serviceId: serviceId,
      templateId: templateId,
      user_id: publicKey,
      template_params: {
        from_name: formData.firstName + formData.lastName,
        from_email: formData.email,
        to_name: "solomon",
        message: formData.message,
      },
    };
    try {
      const res = await axios.post(
        "https://api.emailjs.com/v1.0/email/send",
        data
      );
      console.log(res.data);
      setFormData({
        firstName: "",
        lastName: "",
        message: "",
        email: "",
      });
    } catch (error) {
      console.log("Error Sending Email", error.message);
    }
  };

  return (
    <form onSubmit={handleSumbmit} method='post'>
      <div className='lg:flex lg:space-x-8 pt-12'>
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          placeholder='First Name'
          onFocus={(e) => whenFocused(e)}
          onBlur={(e) => whenBlurred(e)}
          className='h-12 w-full my-4 pl-3 pr-20 font-light py-7 border-1 border-slate-600 rounded'
        />
        <input
          type='text'
          name='lastName'
          onChange={handleChange}
          value={formData.lastName}
          placeholder='Last Name'
          onFocus={(e) => whenFocused(e)}
          onBlur={(e) => whenBlurred(e)}
          className='h-12 w-full my-4 pl-3 pr-20 font-light py-7 border-1 border-slate-600 rounded'
        />
      </div>
      <input
        type='email'
        name='email'
        onChange={handleChange}
        value={formData.email}
        placeholder='Email Address'
        onFocus={(e) => whenFocused(e)}
        onBlur={(e) => whenBlurred(e)}
        className='h-12 w-full pl-3 pr-20 font-light py-7 border-1 border-slate-600 rounded my-4'
      />
      <textarea
        name='message'
        onChange={handleChange}
        value={formData.message}
        id=''
        cols='30'
        rows='10'
        placeholder='Write Your Massage here.'
        onFocus={(e) => whenFocused(e)}
        onBlur={(e) => whenBlurred(e)}
        className='relative w-full px-4 py-5 border-1 rounded border-slate-600'
      />
      <button className=' w-full py-3 my-3 rounded-3xl bg-brightRed text-white lg:w-1/2 text-center transition-all duration-500 hover:bg-BrighterRed'>
        Send Message
      </button>
    </form>
  );
};
