import { useState } from "react";
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
    <section className='container mx-auto text-center p-6 md:p-12 lg:p-16'>
      <h1
        style={{
          lineHeight: "1.19",
        }}
        className='text-brightRed text-5xl  w-3/5 m-auto lg:text-6.5xl lg:px-24 font-extrabold mb-12'
      >
        Do What You Love
      </h1>
      <p className='leading-8 w-4/5 m-auto hidden sm:block'>
        When You do what you love most life become so much easier and so much
        fun.So you will start enjoying it.So don&apos;t ever afraid to jump into
        doing what you love most,Because life is all about savoring the
        moment.So enjoy it.
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
    </section>
  );
}
