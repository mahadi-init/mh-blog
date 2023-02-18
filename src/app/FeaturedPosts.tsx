import PostPreview from '@/components/PostPreview';
import { PostData, PostInfo } from '@/interfaces/post';
import client from '@/lib/sanity-client';

/**
 * Fetches the featured posts from Sanity CMS and returns them as an array
 * @returns an array of posts
 */
const getFeaturedPosts = async () => {
  let post: PostInfo[] = [];

  await client
    .fetch(
      `*[_type == "post"]{
      _id,
      title,
      shortDesc,
      readTime,
      _createdAt,
      tags
    }`,
      { cache: 'no-store' },
    )
    .then(res => {
      post = res.sort(
        (a: PostData, b: PostData) => b.tags.length - a.tags.length,
      );
    })
    .catch(err => console.log(err));

  return post;
};

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <>
      <h1 className='text-2xl font-semibold'>Featured</h1>
      <PostPreview content={posts} limit={3} />
    </>
  );
}
