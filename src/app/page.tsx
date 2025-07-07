'use client';

import React, { useState } from 'react';

import LinkButton from '@/components/LinkButton';
import SearchInput from '@/components/SearchInput';

import PostListSection from './posts/_components/PostListSection';

const PostListPage = () => {
  const [keyword, setKeyword] = useState('');

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(keyword);
  };

  return (
    <div>
      <div className='mb-5 flex items-center justify-end gap-2'>
        <SearchInput
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='게시글을 검색해 보세요'
          onSubmit={handleSearch}
        />
        <LinkButton href='/posts/new'>글쓰기</LinkButton>
      </div>
      <PostListSection />
    </div>
  );
};

export default PostListPage;
