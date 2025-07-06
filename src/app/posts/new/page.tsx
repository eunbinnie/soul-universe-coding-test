'use client';

import React, { useState } from 'react';

import { usePostStore } from '@/store';
import { v4 as uuidv4 } from 'uuid';

import type { Post } from '@/types/post.types';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';

const NewPostPage = () => {
  const updatePost = usePostStore((state) => state.updatePost);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 게시글 작성 폼 제출 이벤트 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 게시글 데이터
    const postData: Post = {
      uuid: uuidv4(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    updatePost(postData); // 게시글 로컬스토리지에 저장
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-wrap items-center justify-between gap-x-5 gap-y-1'>
        <h2 className='text-xl font-bold text-gray-900'>게시글 작성</h2>
        <Button type='submit' disabled={!title || !content}>
          등록하기
        </Button>
      </div>
      <div className='mt-10 grid gap-y-4'>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='제목을 입력해 주세요'
        />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='내용을 입력해 주세요'
        />
      </div>
    </form>
  );
};

export default NewPostPage;
