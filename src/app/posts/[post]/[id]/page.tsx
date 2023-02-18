import TagView from '@/app/tags/TagView';
import { PostData } from '@/interfaces/post';
import client from '@/lib/sanity-client';
import { Convert } from '@/util/Convert';
import { BiCalendar } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import GoBack from './GoBack';

const getPost = async (id: string) => {
  const post = await client.fetch(
    `*[_type == "post" && _id == $id]{
      _id,
      title,
      shortDesc,
      table,
      content,
      readTime,
      _createdAt,
      "tags": tags[]->name,
    }`,
    { id },
  );
  return post[0];
};

export default async function Post({
  params,
}: {
  params: { id: string; post: string };
}) {
  const convert = new Convert();
  const { id, post: title } = params;
  const data: PostData = await getPost(id);
  const tags = data?.tags;

  return (
    <>
      <GoBack />
      <div className='mt-6'>
        <p className='font-mono text-3xl font-semibold text-sky-500'>
          {convert.slugToString(title)}
        </p>
        <div className='ml-1 flex items-center text-xs text-gray-400'>
          <>
            <BiCalendar size={16} />
            &nbsp;
            {convert.dateToTime(data?._createdAt)}
            &nbsp;|&nbsp;
            {data?.readTime}
            &nbsp;min Read Time
          </>
        </div>
      </div>
      <div className='mt-5 flex w-5/6 flex-col gap-8'>
        <p>{data?.shortDesc || ''}</p>
        <div>
          <p className='mb-2 text-xl font-semibold'>Table of Contents</p>
          {data?.table.map((item: string, index: number) => {
            return (
              <ol key={index} className='text-md ml-5 list-disc'>
                <li>{item}</li>
              </ol>
            );
          })}
        </div>
        <article
          className='prose prose-pink prose-p:text-black prose-blockquote:text-black prose-strong:text-black prose-code:text-black
           dark:text-white dark:prose-headings:text-white dark:prose-p:text-white dark:prose-blockquote:text-white dark:prose-strong:text-white
            dark:prose-code:text-white'
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data?.content}
          </ReactMarkdown>
        </article>
        <div className='flex items-center gap-4'>
          <p className='text-lg text-cyan-400'>Used Tags: </p>
          {tags ? <TagView items={tags} /> : null}
        </div>
      </div>
    </>
  );
}
