import PostPreview from '@/components/PostPreview';
import client from '@/lib/sanity-client';

/**
 * Fetches the recent posts from Sanity CMS and returns them as an array
 * @returns an array of posts
 */
const getRecentPosts = async () => {
  const posts = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc){
      _id,
      title,
      shortDesc,
      readTime,
      _createdAt,
    }`,
    { cache: 'no-store' },
  );

  return posts;
};

export default async function RecentPosts() {
  const posts = await getRecentPosts();

  return (
    <>
      <h1 className='text-2xl font-semibold'>Recent Posts</h1>
      <PostPreview content={posts} limit={4} />
    </>
  );
}
