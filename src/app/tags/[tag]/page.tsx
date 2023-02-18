import Breadcrumb from '@/components/Breadcrumb';
import PostPreview from '@/components/PostPreview';
// import { posts } from '@/data/posts';
import client from '@/lib/sanity-client';
import { Convert } from '@/util/Convert';

const tagQuery = `*[_type == 'tag' && name == $tagName][0]._id`;
const postQuery = `*[_type == 'post' && references($tagId)]{
    _id,
    title,
    shortDesc,
    readTime,
    table,
    content,
    tags
}`;

async function getPostsByTag(tagName: string) {
  try {
    const tagId = await client.fetch(tagQuery, { tagName });
    const posts = await client.fetch(postQuery, { tagId });
    return posts;
  } catch (err) {
    console.error(err);
  }
}

export default async function Tag({ params }: any) {
  const convert = new Convert();
  const { tag } = params;
  const posts = await getPostsByTag(convert.slugToString(tag));

  return (
    <main>
      <Breadcrumb items={['Tag', tag]} />
      <p className='mt-3 text-3xl font-bold'>Tag:&nbsp;{tag}</p>
      <p className='text-md mt-1'>
        All the articles with the tag &quot;{tag}&quot;
      </p>
      <div className='mt-8'>
        <PostPreview content={posts} limit={4} />
      </div>
    </main>
  );
}
