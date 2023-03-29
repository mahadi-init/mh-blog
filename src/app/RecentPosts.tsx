import client from '@/lib/sanity-client';
import PostPreview from './PostPreview';

const getRecentPosts = async () => {
  const posts = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc){
      _id,
      title,
      shortDesc,
      readTime,
      _createdAt,
    }`,
  );

  return posts;
};

export default async function RecentPosts() {
  const posts = await getRecentPosts();

  return (
    <>
      <h1 className='text-2xl font-semibold'>Recent Posts</h1>
      <PostPreview content={posts} limit={3} />
    </>
  );
}
