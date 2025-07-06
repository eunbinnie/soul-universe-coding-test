import React from 'react';

import Button from '@/components/Button';

const NewPostPage = () => {
  return (
    <form>
      <div className='flex flex-wrap items-center justify-between gap-x-5 gap-y-1'>
        <h2 className='text-xl font-bold text-gray-900'>게시글 작성</h2>
        <Button type='submit'>등록하기</Button>
      </div>
    </form>
  );
};

export default NewPostPage;
