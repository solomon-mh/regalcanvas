import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const handlePlayClick = () => {
    setShowVideo(true);
  };
  const handleCloseClick = () => {
    setShowVideo(false);
  };
  return (
    <div className='container mx-auto text-center w-full  lg:w-3/4 p-6 md:p-12 lg:p-20 mb-28'>
      <h1
        style={{
          lineHeight: "1.09",
        }}
        className='text-brightRed text-2xl sm:text-4xl lg:text-6.5xl lg:px-24 font-extrabold mb-12'
      >
        Do What You Love
      </h1>
      <p className='leading-8 hidden sm:block'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, incidunt
        vitae fugit harum architecto doloribus facere omnis recusandae pariatur
        porro quis alias quas animi, dignissimos fuga ab reprehenderit
        repudiandae ea?
      </p>
      <p className='leading-8 block sm:hidden'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem
        nulla quos suscipit laborum fugit aspernatur rem pariatur illo.
      </p>
      <div className='my-12'>
        {!showVideo ? (
          <button
            className='w-17 h-17 rounded-full bg-brightRed text-white'
            onClick={handlePlayClick}
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        ) : (
          <div>
            <div className='relative'>
              <button
                className='absolute top-2 right-2 text-white bg-gray-600 rounded-full w-8 h-8 flex justify-center items-center'
                onClick={handleCloseClick}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <iframe
                width='640'
                height='360'
                src='https://www.youtube.com/embed/F6a09khYxRo'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
