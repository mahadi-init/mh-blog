import { Convert } from '@/util/Convert';
import Link from 'next/link';
import { FaHashtag } from 'react-icons/fa';

export default function TagView({ items }: { items: string[] }) {
  const convert = new Convert();

  return (
    <div className='flex flex-wrap gap-10'>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Link
              href={`/tags/${convert.spaceToDash(item)}`}
              className='flex items-center border-b-2 border-dashed pb-0.5 text-lg font-medium transition-transform hover:text-sky-400'
            >
              <FaHashtag />
              {item}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
