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
    <div className='container mx-auto text-center w-3/4 p-20'>
      <h1 className='text-brightRed text-6xl word-spacing-4 font-bold font-sans mb-12'>
        Do What You <br />
        Love
      </h1>
      <p className='leading-8'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, incidunt
        vitae fugit harum architecto doloribus facere omnis recusandae pariatur
        porro quis alias quas animi, dignissimos fuga ab reprehenderit
        repudiandae ea?
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
