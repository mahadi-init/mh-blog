'use client';

import PostPreview from '@/components/PostPreview';
import { PostInfo } from '@/interfaces/post';
import client from '@/lib/sanity-client';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import LoadingSkeleton from '../LoadingSkeleton';

export default function PostView() {
  const [posts, setPosts] = useState<PostInfo[]>([]);
  const [filterPosts, setFilterPosts] = useState(posts);
  const [range, setRange] = useState({ start: 0, end: 3 });
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await client.fetch(
        `*[_type == "post"]{
      _id,
      title,
      shortDesc,
      _createdAt,
      readTime
      }`,
      );
      setPosts(posts);
    };
    getPosts();

    return () => {
      setPosts([]);
      setFilterPosts([]);
    };
  }, []);

  useEffect(() => {
    if (range.start === 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }
    if (range.end >= posts.length - 1) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }

    setFilterPosts(posts.slice(range.start, range.end));
  }, [range.start, range.end, posts.length, posts]);

  const goThreePrev = () => {
    if (range.start === 0) return;
    setRange({ start: range.start - 3, end: range.end - 3 });
    setFilterPosts(posts.slice(range.start - 3, range.end - 3));
  };

  const goThreeNext = () => {
    if (range.end === posts.length - 1) return;
    setRange({ start: range.start + 3, end: range.end + 3 });
    setFilterPosts(posts.slice(range.start + 3, range.end + 3));
  };

  return (
    <>
      <div className='min-h-[30vh]'>
        {posts.length != 0 ? (
          <PostPreview content={filterPosts} limit={3} />
        ) : (
          <LoadingSkeleton />
        )}
      </div>
      <div className='mt-72 flex w-5/6 justify-center gap-16'>
        <button
          className={`flex items-center gap-3 ${
            disablePrev ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={goThreePrev}
          disabled={disablePrev}
        >
          <AiOutlineArrowLeft />
          <p>Prev</p>
        </button>
        <button
          className={`flex items-center gap-3 ${
            disableNext ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={goThreeNext}
          disabled={disableNext}
        >
          <p>Next</p>
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
}
