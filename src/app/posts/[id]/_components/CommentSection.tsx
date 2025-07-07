'use client';

import type { Post } from '@/types/post.types';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

interface CommentSectionProps {
  post: Post;
}

const CommentSection = ({ post }: CommentSectionProps) => {
  const { comments } = post;
  const COMMENTS_LENGTH = comments?.length ?? 0;

  return (
    <section>
      <span className='text-sm font-medium text-zinc-900'>
        댓글 {COMMENTS_LENGTH}
      </span>
      <CommentForm postUuid={post.uuid} />
      <CommentList comments={comments} />
    </section>
  );
};

export default CommentSection;
