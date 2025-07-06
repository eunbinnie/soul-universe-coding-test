'use client';

import React, { useEffect, useState } from 'react';

import { usePostStore } from '@/store';
import { LoaderCircle, SmilePlus } from 'lucide-react';

import PostList from './PostList';

const PostListSection = () => {
  const posts = usePostStore((state) => state.posts);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section className='mt-20 w-full'>
        <LoaderCircle className='mx-auto animate-spin' />
      </section>
    );
  }

  return (
    <section>
      {posts.length > 0 ? (
        <PostList />
      ) : (
        // 등록된 게시글이 없을 경우
        <div className='mt-20 flex flex-col items-center gap-4'>
          <SmilePlus />
          <p className='text-center text-sm'>
            아직 등록된 게시글이 없습니다.
            <br />첫 글을 작성해보세요!
          </p>
        </div>
      )}
    </section>
  );
};

export default PostListSection;
