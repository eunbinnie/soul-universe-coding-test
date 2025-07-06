import React from 'react';

import LinkButton from '@/components/LinkButton';

import PostListSection from './posts/_components/PostListSection';

const PostListPage = () => {
  return (
    <div>
      <div className='mb-5 flex justify-end'>
        <LinkButton href='/posts/new'>글쓰기</LinkButton>
      </div>
      <PostListSection />
    </div>
  );
};

export default PostListPage;
