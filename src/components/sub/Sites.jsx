import google from "../../assets/client_google.png";
import invision from "../../assets/client_invision.png";
import microfot from "../../assets/client_microsoft.png";
import nike from "../../assets/client_nike.png";

export default function Sites() {
  return (
    <div className='grid grid-cols-4 text-center items-center py-12 bg-white'>
      <div>
        <img src={google} alt='google logo' />
      </div>
      <div>
        <img src={invision} alt='invasion logo' />
      </div>
      <div>
        <img src={nike} alt='nike logo' />
      </div>
      <div>
        <img src={microfot} alt='microsoft logo' />
      </div>
    </div>
  );
}
