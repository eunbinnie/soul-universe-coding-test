'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

import { usePostStore } from '@/store';
import { v4 as uuidv4 } from 'uuid';

import type { Comment } from '@/types/post.types';

import Button from '@/components/Button';
import Textarea from '@/components/Textarea';

interface CommentFormProps {
  postUuid: string;
}

const CommentForm = ({ postUuid }: CommentFormProps) => {
  const addComment = usePostStore((state) => state.addComment);

  const [comment, setComment] = useState('');

  // 댓글 남기기 함수
  const handleCommentSubmit = () => {
    const data: Comment = {
      uuid: uuidv4(),
      content: comment,
      createdAt: new Date().toISOString(),
    };

    addComment(postUuid, data);
    setComment('');
    toast.success('댓글이 등록되었습니다.');
  };

  return (
    <div className='mb-5 mt-4 flex flex-col'>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='댓글을 입력해 주세요. 입력한 댓글은 수정하거나 삭제할 수 없습니다.'
        className='h-20'
      />
      <Button
        disabled={!comment}
        onClick={handleCommentSubmit}
        className='ml-auto mt-2'
      >
        댓글 남기기
      </Button>
    </div>
  );
};

export default CommentForm;
