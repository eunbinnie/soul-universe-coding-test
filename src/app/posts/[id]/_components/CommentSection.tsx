'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

import { usePostStore } from '@/store';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import type { Comment, Post } from '@/types/post.types';

import Button from '@/components/Button';
import Textarea from '@/components/Textarea';

interface CommentSectionProps {
  post: Post;
}

const CommentSection = ({ post }: CommentSectionProps) => {
  const addComment = usePostStore((state) => state.addComment);
  const { comments } = post;
  const COMMENTS_LENGTH = comments?.length ?? 0;

  const [comment, setComment] = useState('');

  // 댓글 남기기 함수
  const handleCommentSubmit = () => {
    const data: Comment = {
      uuid: uuidv4(),
      content: comment,
      createdAt: new Date().toISOString(),
    };

    addComment(post.uuid, data);
    setComment('');
    toast.success('댓글이 등록되었습니다.');
  };

  return (
    <section>
      <span className='text-sm font-medium text-zinc-900'>
        댓글 {COMMENTS_LENGTH}
      </span>
      {/* 댓글 남기는 영역 */}
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
      {/* 댓글 영역 */}
      <div>
        {comments?.map((comment) => (
          <div key={comment.uuid} className='mb-3 rounded-2xl bg-zinc-100 p-5'>
            <div>
              <span className='text-xs font-bold text-zinc-900'>
                {dayjs(comment.createdAt).format('YYYY-MM-DD')}
              </span>
            </div>
            <span className='whitespace-pre text-sm font-medium text-zinc-700'>
              {comment.content}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
