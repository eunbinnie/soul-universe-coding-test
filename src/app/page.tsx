import React from 'react';

import LinkButton from '@/components/LinkButton';

const PostListPage = () => {
  return (
    <div>
      <div className='mb-5 flex justify-end'>
        <LinkButton href='/posts/new'>글쓰기</LinkButton>
      </div>
      게시글 목록 페이지
    </div>
  );
};

export default PostListPage;
