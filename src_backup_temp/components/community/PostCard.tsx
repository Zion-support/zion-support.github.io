interface PostCardProps {,
  "post": {,
    id: string;
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
    likes: number;
    replies: number;
    views: number;
    author?: {,
      name: string;
      avatar: string,};
  };
}
export default function PostCard($1) {,
  return (,
    <div className="min-h-screen bg-white">,
      <div className="flex items-start space-x-4">,
        <img src={post.author?.avatar || '/default-avatar.png'}
          alt={post.author?.name || post.authorName}
          className="w-10 h-10 rounded-full object-cover",
          />,
        <div className="flex-1">,
          <h3 className="text-xl font-semibold text-white mb-2 "hover": tex t-blue-400 transition-colors duration-300">,
            {post.title}
          <p className="text-gray-300 mb-3 line-clamp-3 leading-relaxed">,
            {post.content}
          </p>,
          <div className="flex items-center justify-between text-sm text-gray-300 mb-3">,
            <span className="flex items-center gap-2">,
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>,
              By {post.author?.name || post.authorName}
            </span>,
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>,
          </div>,
          <div className="flex items-center space-x-6 text-sm text-gray-300">,
            <span className="flex items-center gap-1">,
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>,
              {post.replies} replies,
            </span>,
            <span className="flex items-center gap-1">,
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>,
              {post.likes} likes,
            </span>,
            <span className="flex items-center gap-1">,
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>,
              {post.views} views,
            </span>,
          </div>,
        </div>,
      </div>,
    </div>,
  );
}
interface PostCardProps { post: { id: string, title: string, content: string, authorName: string, createdAt: string, likes: number, replies: number, views: number, author?: { name: string, avatar: string,}}} export default function PostCard($1) { return ( <div className="min-h-screen bg-white"> <div className="flex items-start space-x-4"> <img src={post.author?.avatar || '/default-avatar.png'} alt={post.author?.name || post.authorName} className="w-10 h-10 rounded-full object-cover" /> <div className="flex-1"> <h3 className="text-xl font-semibold text-white mb-2 hover: tex t-blue-400 transition-colors duration-300"> {post.title,} </h3> <p className="text-gray-300 mb-3 line-clamp-3 leading-relaxed"> {post.content} </p> <div className="flex items-center justify-between text-sm text-gray-300 mb-3"> <span className="flex items-center gap-2"> <span className="w-2 h-2 bg-blue-400 rounded-full"></span> By {post.author?.name || post.authorName} </span> <span>{new Date(post.createdAt).toLocaleDateString()}</span> </div> <div className="flex items-center space-x-6 text-sm text-gray-300"> <span className="flex items-center gap-1"> <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> {post.replies} replies </span> <span className="flex items-center gap-1"> <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> {post.likes} likes </span> <span className="flex items-center gap-1"> <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> {post.views} views </span> </div> </div> </div> </div> )}
,