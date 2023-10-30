import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className='text-center'>
      <h1 className='text-4xl leading-loose'>Sorry! the page is not Found.</h1>
      <Link
        to='/'
        className='bg-brightRed text-white  my-8 mx-auto block p-2 w-1/4 rounded-full transition-all duration-500 hover:scale-105'
      >
        Return To Home
      </Link>
    </div>
  );
}

export default PageNotFound;
