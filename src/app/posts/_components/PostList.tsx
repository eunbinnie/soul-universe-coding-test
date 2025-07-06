import { usePostStore } from '@/store';
import Link from 'next/link';

const PostList = () => {
  const posts = usePostStore((state) => state.posts);

  return (
    <div>
      <div className='border-t border-gray-200 px-5 py-2 text-gray-500'>
        제목
      </div>

      <ul className='border-t border-gray-200'>
        {posts.map((post) => (
          <li
            key={post.uuid}
            className='flex items-center justify-between border-b border-gray-200 px-5 py-2'
          >
            <Link
              href={`/posts/${post.uuid}`}
              className='truncate font-medium text-slate-900'
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
