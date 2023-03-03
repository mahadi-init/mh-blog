import AuthorInfo from './AuthorInfo';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import FeaturedPosts from './FeaturedPosts';
import RecentPosts from './RecentPosts';
import HorizontalDivider from './HorizontalDivider';

export default function Home() {
  return (
    <main>
      <AuthorInfo />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      <HorizontalDivider />
      {/* @ts-expect-error Server Component */}
      <RecentPosts />
      <div className='flex w-5/6 justify-center'>
        <Link
          className='mt-12 flex w-fit items-center gap-2 hover:text-sky-300'
          href='/posts'
        >
          All Posts <AiOutlineArrowRight />
        </Link>
      </div>
    </main>
  );
}
