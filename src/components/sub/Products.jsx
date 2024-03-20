export default function Products() {
  return (
    <div className='block py-12 px-4 bg-white items-center  flex-wrap  lg:flex lg:space-x-6 lg:justify-center lg:px-12'>
      <div className='lg:my-8 mx-4 w-full md:w-90perc px-12 lg:w-30perc'>
        <p className='text-7xl text-brightRed font-bold'>&#9813;</p>
        <h1 className='text-xl font-bold my-6'>Interface Design</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          voluptatem reiciendis minus, a dolores.
        </p>
      </div>
      <div className='my-8 mx-4 w-full px-12 md:w-90perc lg:w-30perc'>
        <p className='text-7xl text-brightRed font-bold'>&#9921;</p>
        <h1 className='text-xl font-bold my-6'>Product Design</h1>{" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          voluptatem reiciendis minus, a dolores.
        </p>
      </div>
      <div className='mx-4 w-full px-12 md:w-90perc lg:my-8 lg:w-30perc'>
        <p className='text-7xl text-brightRed font-bold'>&#9965;</p>
        <h2 className='text-xl font-bold my-6'>Quality Results</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          voluptatem reiciendis minus, a dolores.
        </p>
      </div>
    </div>
  );
}
