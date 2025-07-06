import React from 'react';

import LinkButton from '@/components/LinkButton';

import PostList from './posts/components/PostList';

const PostListPage = () => {
  return (
    <div>
      <div className='mb-5 flex justify-end'>
        <LinkButton href='/posts/new'>글쓰기</LinkButton>
      </div>
      <PostList />
    </div>
  );
};

export default PostListPage;
