import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { portfolioObj } from "../../data/PortfolioData";
import person1 from "../../assets/person_1.jpg";

export default function BlogUpdates() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='mx-4 px-2 mb-12'>
      <div style={{ wordSpacing: "1px" }} className='py-12 px-10 w-full'>
        <h1 className='text-3xl font-sans font-bold my-6'>Blog Updates</h1>
        <p className='leading-9 text-xl pr-10 text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          ducimus facere quam eos tempore beatae non eius, provident
        </p>
      </div>
      <div className='w-full px-6'>
        <Slider {...settings}>
          {portfolioObj.map((portfolio) => (
            <div
              key={portfolio.id}
              className='flex justify-center overflow-hidden mx-auto items-center'
            >
              <div className='m-4 h-48 w-full box-border overflow-hidden'>
                <img
                  className='w-full h-full object-cover transition-all duration-500 hover:scale-105'
                  src={portfolio.image}
                  alt={`img ${portfolio.id + 1}`}
                />
              </div>
              <div className='m-4'>
                <p className='text-lg font-semibold'>October 18, 2019</p>
                <h2 className='text-2xl font-semibold font-sans'>
                  Google saying pseudo-telephoto is more important
                </h2>
              </div>
              <div className='flex justify-around pr-4'>
                <div className='w-14 h-14 rounded-full overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={person1}
                    alt=''
                  />
                </div>
                <p>
                  by John Freeman <br /> Thinker and Designer
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style>
        {`
          /* Custom dot size */
          .custom-dots li button:before {
            width: 12px;
            height: 12px;
            margin: 12px;
            background-color: black;
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
}
