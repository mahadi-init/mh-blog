'use client';

import Breadcrumb from '@/components/Breadcrumb';
import PostPreview from '@/components/PostPreview';
import { PostInfo } from '@/interfaces/post';
import client from '@/lib/sanity-client';
import { useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState<PostInfo[]>([]);
  console.log('🚀 ~ file: page.tsx:12 ~ Search ~ posts', posts);

  const getPosts = async (title: string) => {
    const posts = await client.fetch(
      `*[_type == "post" && title match $title]{
      _id,
      title,
      shortDesc,
      readTime,
      _createdAt
    }`,
      { title },
    );

    setPosts(posts);
  };

  return (
    <>
      <Breadcrumb items={['Search']} />
      <h1 className='mt-3 text-3xl font-bold'>Search</h1>
      <p className='text-md mt-1'>Search any article...</p>
      <div className='mt-10'>
        <input
          type='text'
          placeholder='search for anything'
          className='mb-2 w-5/6 rounded-md dark:text-black'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              console.log('Hello');

              getPosts(search);
            }
          }}
        />
      </div>
      <PostPreview content={posts} limit={10} />
    </>
  );
}
