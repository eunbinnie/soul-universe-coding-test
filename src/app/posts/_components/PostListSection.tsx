'use client';

import { usePostStore } from '@/store';
import { SmilePlus } from 'lucide-react';

import ClientOnly from '@/components/ClientOnly';

import PostList from './PostList';

const PostListSection = () => {
  const { keyword, posts } = usePostStore((state) => ({
    keyword: state.keyword,
    posts: state.posts,
  }));

  return (
    <ClientOnly>
      <section>
        {keyword !== '' && (
          <p className='mb-5 text-sm'>
            <span className='font-bold'>&apos;{keyword}&apos;</span> 검색 결과
          </p>
        )}
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
    </ClientOnly>
  );
};

export default PostListSection;
