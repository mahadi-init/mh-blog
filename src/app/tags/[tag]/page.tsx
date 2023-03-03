import Breadcrumb from '@/app/Breadcrumb';
import PostPreview from '@/app/PostPreview';
import { Convert } from '@/util/Convert';
import getPostsByTag from './get-posts-by-tag';

export async function generateMetadata({ params: { tag } }: any) {
  const title = `Tag | ${tag}`;

  return {
    title,
    description: `All the articles with the tag "${tag}"`,
  };
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
