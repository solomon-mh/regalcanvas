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
    <div className='text-center bg-white py-6 lg:pt-4 pb-24'>
      <h1 className='text-4xl text-black font-sans pt-16 pb-28 '>
        Testimonials
      </h1>
      <div
        className='text-left grid grid-cols-1 lg:gap-8 lg:grid-cols-4 sm:px-12 box-border justify-center'
        lg:style={{ gridTemplateColumns: "repeat(4, 20%)" }}
      >
        {Testimonials.map((test) => (
          <div key={test.id} className='bg-antiquewhite py-8 px-4'>
            <div className='flex justify-between items-center space-x-4 m-3'>
              <div className='w-1/2'>
                <p className='font-extrabold text-xl leading-6 font-sans text-brightRed'>
                  {test.name}
                </p>
                <small>{test.catagory}</small>
              </div>
              <div className='w-14 h-14  rounded-full overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src={test.img}
                  alt={`person ${test.id}`}
                />
              </div>
            </div>
            <p>{test.testimony}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
