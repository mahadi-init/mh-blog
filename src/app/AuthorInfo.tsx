import { ImGithub } from 'react-icons/im';
import { GrFacebookOption } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';

export default function AuthorInfo() {
  return (
    <div>
      <h1 className='text-4xl font-extrabold'>Mahadi Hasan</h1>
      <p className='mt-5 text-lg leading-8'>
        A software engineer who loves to code and write. I write about
        programming, web development, and tech in general. I also write about my
        personal experiences and thoughts. I am a self-taught programmer and I
        am currently learning web development. I am also a student of Computer
        Science and Engineering at the Daffodil International University.
      </p>

      <div className='mt-5 flex items-center gap-3'>
        <p>Social Links: </p>
        <ul className='flex items-center gap-6'>
          <li>
            <a href='https://github.com/im-mahadi'>
              <ImGithub size={20} />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/this.mahadi/'>
              <GrFacebookOption size={20} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/mahadi-hasan-637a87240/'>
              <FaLinkedinIn size={20} />
            </a>
          </li>
        </ul>
      </div>

      <hr className='my-4 h-0.5 w-11/12 rounded border-0 bg-gray-700 md:mt-6 md:mb-10'></hr>
    </div>
  );
}
