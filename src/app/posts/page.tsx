import Breadcrumb from '@/components/Breadcrumb';
import PostView from './PostView';

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
