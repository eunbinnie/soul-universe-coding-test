import React from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';

const NewPostPage = () => {
  return (
    <form>
      <div className='flex flex-wrap items-center justify-between gap-x-5 gap-y-1'>
        <h2 className='text-xl font-bold text-gray-900'>게시글 작성</h2>
        <Button type='submit'>등록하기</Button>
      </div>
      <div className='mt-10 grid gap-y-4'>
        <Input placeholder='제목을 입력해 주세요' />
        <Textarea placeholder='내용을 입력해 주세요' />
      </div>
    </form>
  );
};

export default NewPostPage;
