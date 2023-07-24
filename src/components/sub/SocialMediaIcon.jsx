import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaIcon({ icon }) {
  return (
    <li className='w-12 h-12 rounded-full bg-lightRed transition duration-1000 flex items-center justify-center cursor-pointer hover:text-red-800'>
      <FontAwesomeIcon icon={icon} />
    </li>
  );
}
export function SmallSocialMediaIcon({ icon }) {
  return (
    <li className='transition duration-300 flex items-center justify-center cursor-pointer hover:text-BrighterRed'>
      <FontAwesomeIcon icon={icon} />
    </li>
  );
}
