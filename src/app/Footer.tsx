import authorData from '@/data/author-data';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <hr className='my-4 h-0.5 w-5/6 rounded border-0 bg-gray-700 md:mt-6'></hr>
      <div className='mb-5 flex w-5/6 flex-col items-center justify-between gap-5 lg:flex-row lg:gap-0'>
        <div className='relative flex flex-col text-center md:flex-row'>
          <p>Copyright © 2023</p>
          <p className='invisible md:visible'>&nbsp;|&nbsp;</p>
          <p className='relative -top-3 md:-top-0'>All rights reserved.</p>
        </div>
        <div className='relative -top-3 flex gap-8 md:-top-0'>
          <a href={authorData.social.github}>
            <FaGithub size={20} />
          </a>
          <a href={authorData.social.facebook}>
            <FaFacebook size={20} />
          </a>
          <a href={authorData.social.instagram}>
            <FaInstagram size={20} />
          </a>
          <a href={authorData.social.linkedin}>
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </>
  );
}
