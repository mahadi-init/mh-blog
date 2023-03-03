import Breadcrumb from '@/app/Breadcrumb';
import PostView from './PostView';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Posts',
  description: 'Posts page of the website',
};

export default async function Posts() {
  return (
    <>
      <Breadcrumb items={['Posts']} />
      <p className='mt-3 text-3xl  font-bold'>Posts</p>
      <p className='text-md mt-1'>All the articles I&apos;ve posted</p>
      <div className='mt-10'>
        <PostView />
      </div>
    </>
  );
}
