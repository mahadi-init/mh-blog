'use client';

import { MdArrowBackIos } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function GoBack() {
  const router = useRouter();

  return (
    <span
      className='flex cursor-pointer items-center gap-2 hover:text-gray-400'
      onClick={() => router.back()}
    >
      <MdArrowBackIos />
      <p>Go back</p>
    </span>
  );
}
