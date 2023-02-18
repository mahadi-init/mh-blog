import Breadcrumb from '@/components/Breadcrumb';
import client from '@/lib/sanity-client';
import TagView from './TagView';

const getTags = async () => {
  const res: [{ name: string }] = await client.fetch(
    `*[_type == "tag"]{name}`,
    { next: { revalidate: 30 } },
  );
  return res.map(item => item.name);
};

export default async function Tags() {
  const tags: string[] = await getTags();

  return (
    <>
      <Breadcrumb items={['Tags']} />
      <p className='mt-3 text-3xl font-bold'>Tags</p>
      <p className='text-md mt-1'>All Tags used in posts</p>
      <div className='mt-10 w-11/12'>
        <TagView items={tags} />
      </div>
    </>
  );
}
