import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';
import { PostInfo } from '../interfaces/post';
import { Convert } from '../util/Convert';

export default function PostPreview({
  content,
  limit,
}: {
  content: PostInfo[];
  limit: number;
}) {
  const convert = new Convert();

  return (
    <div className='mt-5 flex flex-col gap-12'>
      {content.slice(0, limit).map((item) => (
        <div key={item._id}>
          <Link
            href={`/posts/${convert.stringToSlug(item.title)}/${item._id}`}
            className='text-lg font-semibold text-sky-600 dark:text-sky-400'
          >
            {item?.title}
          </Link>
          <div className='ml-1 flex items-center text-xs text-gray-400'>
            <>
              <BiCalendar size={16} />
              &nbsp;
              {convert.dateToTime(item?._createdAt)}
              &nbsp;|&nbsp;
              {item?.readTime}
              &nbsp;min Read Time
            </>
          </div>
          <p className='text-md mt-2'>{item.shortDesc}</p>
        </div>
      ))}
    </div>
  );
}
