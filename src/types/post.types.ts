// 게시글 댓글 타입
interface Comment {
  uuid: string;
  content: string;
  createdAt: string;
}

// 게시글 타입
export interface Post {
  uuid: string;
  title: string;
  content: string;
  createdAt: string;
  comments?: Comment[];
}
