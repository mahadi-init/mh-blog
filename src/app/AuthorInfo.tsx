import { ImGithub } from 'react-icons/im';
import { GrFacebookOption } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import authorData from '@/data/author-data';

export default function AuthorInfo() {
  return (
    <div>
      <h1 className='text-4xl font-extrabold'>Mahadi Hasan</h1>
      <p className='mt-5 text-lg leading-8'>{authorData.description}</p>
      <div className='mt-5 flex items-center gap-3'>
        <p>Social Links: </p>
        <ul className='flex items-center gap-6'>
          <li>
            <a href={authorData.social.github}>
              <ImGithub size={20} />
            </a>
          </li>
          <li>
            <a href={authorData.social.facebook}>
              <GrFacebookOption size={20} />
            </a>
          </li>
          <li>
            <a href={authorData.social.linkedin}>
              <FaLinkedinIn size={20} />
            </a>
          </li>
        </ul>
      </div>

      <hr className='my-4 h-0.5 w-11/12 rounded border-0 bg-gray-700 md:mt-6 md:mb-10'></hr>
    </div>
  );
}
