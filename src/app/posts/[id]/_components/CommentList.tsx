import dayjs from 'dayjs';

import type { Comment } from '@/types/post.types';

interface CommentListProps {
  comments?: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.uuid} className='mb-3 rounded-2xl bg-zinc-100 p-5'>
          <div>
            <span className='text-xs font-bold text-zinc-900'>
              {dayjs(comment.createdAt).format('YYYY.MM.DD HH:mm')}
            </span>
          </div>
          <span className='whitespace-pre text-sm font-medium text-zinc-700'>
            {comment.content}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
