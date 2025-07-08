import { usePostStore } from '@/store';
import Link from 'next/link';

const PostList = () => {
  const { keyword, posts, searchResults } = usePostStore((state) => ({
    keyword: state.keyword,
    posts: state.posts,
    searchResults: state.searchResults,
  }));

  // 검색 키워드가 있으면 검색 결과를, 없으면 전체 게시글을 보여줌
  const postList = keyword === '' ? posts : searchResults;

  return (
    <div>
      <div className='border-t border-gray-200 px-5 py-2 text-gray-500'>
        제목
      </div>

      <ul className='border-t border-gray-200'>
        {postList.length === 0 && keyword !== '' && (
          <li className='my-10 px-5 py-2 text-center text-sm text-gray-500'>
            &apos;{keyword}&apos; 에 대한 검색 결과가 없습니다.
            <br />
            다른 키워드로 다시 검색해 보세요.
          </li>
        )}
        {postList.map((post) => (
          <li
            key={post.uuid}
            className='flex items-center justify-between border-b border-gray-200 px-5 py-2 hover:bg-gray-50'
          >
            <Link
              href={`/posts/${post.uuid}`}
              className='w-full truncate font-medium text-slate-900'
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
