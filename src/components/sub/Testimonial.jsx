import React from "react";
import person1 from "../../assets/person_1.jpg";
import person2 from "../../assets/person_2.jpg";
import person3 from "../../assets/person_3.jpg";
import person4 from "../../assets/person_4.jpg";

const Testimonials = [
  {
    id: 1,
    img: person1,
    name: "Chad Hawkins",
    catagory: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!",
  },
  {
    id: 2,
    img: person2,
    name: "Ayisha Atherton",
    catagory: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!",
  },
  {
    id: 3,
    img: person3,
    name: "Jasleen Dunkley",
    catagory: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!",
  },
  {
    id: 4,
    img: person4,
    name: "Riccardo Gilliam",
    catagory: "Customer",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!",
  },
];

export default function Testimonial() {
  return (
    <div className='text-center'>
      <h1 className='text-4xl text-black font-sans font-light mt-20 mb-8 '>
        Testimonials
      </h1>
      <div
        className='text-left grid space-x-8 grid-cols-4 box-border justify-center'
        style={{ gridTemplateColumns: "repeat(4, 21%)" }}
      >
        {Testimonials.map((test) => (
          <div className='bg-antiquewhite py-8 px-6'>
            <div className='flex items-center space-x-8 m-3'>
              <div>
                <p className='font-extrabold text-xl leading-6 font-sans text-brightRed'>
                  {test.name}
                </p>
                <small>{test.catagory}</small>
              </div>
              <div className='w-20 h-20 border-2 overflow-hidden'>
                {/* <img
                  className='w-full h-full object-cover'
                  src={test.img}
                  alt={`person ${test.id}`}
                /> */}
              </div>
            </div>
            <p>{test.testimony}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
