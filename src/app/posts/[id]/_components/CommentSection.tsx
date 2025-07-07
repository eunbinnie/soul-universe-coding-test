'use client';

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import type { Comment, Post } from '@/types/post.types';

import Button from '@/components/Button';
import Textarea from '@/components/Textarea';

interface CommentSectionProps {
  post: Post;
}

const CommentSection = ({ post }: CommentSectionProps) => {
  const { comments } = post;
  const COMMENTS_LENGTH = comments?.length ?? 0;

  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    const data: Comment = {
      uuid: uuidv4(),
      content: comment,
      createdAt: new Date().toISOString(),
    };

    console.log(data);
  };

  return (
    <section>
      <span className='text-sm font-medium text-zinc-900'>
        댓글 {COMMENTS_LENGTH}
      </span>
      <div className='mt-4 flex flex-col'>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='댓글을 입력해 주세요! 입력한 댓글은 수정하거나 삭제할 수 없습니다.'
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
    </section>
  );
};

export default CommentSection;
