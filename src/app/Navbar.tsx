import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import HorizontalDivider from './HorizontalDivider';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <>
      <div className='flex w-full flex-col items-center justify-between gap-3 md:flex-row'>
        <Link href='/' className='text-2xl font-semibold'>
          mh-blog
        </Link>
        <div className='text-md flex items-center gap-8 font-mono font-medium'>
          <Link href='/posts'>Posts</Link>
          <Link href='/tags'>Tags</Link>
          <Link href='/about'>About</Link>
          <Link href='/search'>
            <FiSearch size={22} />
          </Link>
          <ThemeToggle />
        </div>
      </div>
      <HorizontalDivider />
    </>
  );
}
