'use client';

import React, { useEffect, useState } from 'react';

import { usePostStore } from '@/store';
import { useRouter } from 'next/navigation';

import LinkButton from '@/components/LinkButton';
import SearchInput from '@/components/SearchInput';

import PostListSection from './posts/_components/PostListSection';

const PostListPage = () => {
  const router = useRouter();

  const [keywordValue, setKeywordValue] = useState('');
  const { keyword, updateKeyword, searchPosts } = usePostStore((state) => ({
    keyword: state.keyword,
    updateKeyword: state.updateKeyword,
    searchPosts: state.searchPosts,
  }));

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    updateKeyword(keywordValue);
    searchPosts();
  };

  // 키워드가 변경되면 input 값 업데이트
  useEffect(() => {
    setKeywordValue(keyword);
  }, [keyword]);

  // 검색 키워드 변경 시 URL 반영
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if (keyword === '') {
      searchParams.delete('keyword');
    } else {
      searchParams.set('keyword', keyword);
    }

    router.push(`?${searchParams.toString()}`);
  }, [keyword, router]);

  return (
    <div>
      <div className='mb-5 flex items-center justify-end gap-2'>
        <SearchInput
          value={keywordValue}
          onChange={(e) => setKeywordValue(e.target.value)}
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
