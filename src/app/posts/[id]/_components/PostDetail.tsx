import dayjs from 'dayjs';

import type { Post } from '@/types/post.types';

import DeletePostDialog from './DeletePostDialog';

interface PostDetailProps {
  post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
  const { uuid, title, content, createdAt } = post;
  const formattedDate = dayjs(createdAt).format('YYYY년 MM월 DD일');

  return (
    <>
      <DeletePostDialog uuid={uuid} />
      <article className='mb-12'>
        <h1 className='text-3xl font-bold leading-[1.2] text-slate-800 lg:text-5xl'>
          {title}
        </h1>
        <div className='mt-4 text-sm text-slate-400 lg:mt-5'>
          {formattedDate}
        </div>
        <div className='mt-9 whitespace-pre leading-[1.5] text-slate-700 lg:mt-12'>
          {content}
        </div>
      </article>
    </>
  );
};

export default PostDetail;
