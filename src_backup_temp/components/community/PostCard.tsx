interface PostCardProps {;
  "post": "{;
    "id": string;
    "title": string;
    "content": string;
    "authorName": string;
    "createdAt": string;
    "likes": number;
    "replies": number;
    "views": number;
    author?: {;
      "name": string;
      "avatar": string;
    ;
"};
  };
}
export default function PostCard("props": "any) {;
  return (;
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4 border border-white/20 "hover": borde r-white/40 transition-all duration-300">;
      <div className="flex items-start space-x-4">;
        <img src={post.author?.avatar || '/default-avatar.png'"}
          alt={post.author?.name || post.authorName}
          className="w-10 h-10 rounded-full object-cover";
          />;
        <div className="flex-1">;
          <h3 className="text-xl font-semibold text-white mb-2 "hover": "tex t-blue-400 transition-colors duration-300">;
            {post.title"}
          </h3>;
          <p className="text-gray-300 mb-3 line-clamp-3 leading-relaxed">;
            {post.content}
          </p>;
          <div className="flex items-center justify-between text-sm text-gray-300 mb-3">;
            <span className="flex items-center gap-2">;
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>;
              By {post.author?.name || post.authorName}
            </span>;
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>;
          </div>;
          <div className="flex items-center space-x-6 text-sm text-gray-300">;
            <span className="flex items-center gap-1">;
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>;
              {post.replies} replies;
            </span>;
            <span className="flex items-center gap-1">;
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>;
              {post.likes} likes;
            </span>;
            <span className="flex items-center gap-1">;
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>;
              {post.views} views;
            </span>;
          </div>;
        </div>;
      </div>;
    </div>;
interface PostCardProps { post: { id: string; title: string; content: string; authorName: string; createdAt: string; likes: number; replies: number; views: number; author?: { name: string; avatar: string}}} export default function PostCard($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;flex items-start space-x-4&quot;> <img src={post.author?.avatar || &apos;/default-avatar.png&apos;} alt={post.author?.name || post.authorName} className=&quot;w-10 h-10 rounded-full object-cover&quot; /> <div className=&quot;flex-1&quot;> <h3 className=&quot;text-xl font-semibold text-white mb-2 hover: tex t-blue-400 transition-colors duration-300&quot;> {post.title} </h3> <p className=&quot;text-gray-300 mb-3 line-clamp-3 leading-relaxed&quot;> {post.content} </p> <div className=&quot;flex items-center justify-between text-sm text-gray-300 mb-3&quot;> <span className=&quot;flex items-center gap-2&quot;> <span className=&quot;w-2 h-2 bg-blue-400 rounded-full&quot;></span> By {post.author?.name || post.authorName} </span> <span>{new Date(post.createdAt).toLocaleDateString()}</span> </div> <div className=&quot;flex items-center space-x-6 text-sm text-gray-300&quot;> <span className=&quot;flex items-center gap-1&quot;> <span className=&quot;w-1.5 h-1.5 bg-purple-400 rounded-full&quot;></span> {post.replies} replies </span> <span className=&quot;flex items-center gap-1&quot;> <span className=&quot;w-1.5 h-1.5 bg-blue-400 rounded-full&quot;></span> {post.likes} likes </span> <span className=&quot;flex items-center gap-1&quot;> <span className=&quot;w-1.5 h-1.5 bg-green-400 rounded-full&quot;></span> {post.views} views </span> </div> </div> </div> </div> )}
interface PostCardProps {
  "post": {
    id: string;
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
    likes: number;
    replies: number;
    views: number;
    author?: {
      name: string;
      avatar: string;
};
  };
}
export default function PostCard($1) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-start space-x-4">
        <img src={post.author?.avatar || '/default-avatar.png'}
          alt={post.author?.name || post.authorName}
          className="w-10 h-10 rounded-full object-cover"
          />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 "hover": tex t-blue-400 transition-colors duration-300">
            {post.title}
          <p className="text-gray-300 mb-3 line-clamp-3 leading-relaxed">
            {post.content}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-300 mb-3">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              By {post.author?.name || post.authorName}
            </span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
              {post.replies} replies
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              {post.likes} likes
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
              {post.views} views
            </span>
          </div>
        </div>
      </div>
    </div>
    );
}
  );
}
interface PostCardProps { post: { id: string; title: string; content: string; authorName: string; createdAt: string; likes: number; replies: number; views: number; author?: { name: string; avatar: string}}} export default function PostCard($1) { return ( <div className="min-h-screen bg-white"> <div className="flex items-start space-x-4"> <img src={post.author?.avatar || '/default-avatar.png'} alt={post.author?.name || post.authorName} className="w-10 h-10 rounded-full object-cover" /> <div className="flex-1"> <h3 className="text-xl font-semibold text-white mb-2 hover: tex t-blue-400 transition-colors duration-300"> {post.title} </h3> <p className="text-gray-300 mb-3 line-clamp-3 leading-relaxed"> {post.content} </p> <div className="flex items-center justify-between text-sm text-gray-300 mb-3"> <span className="flex items-center gap-2"> <span className="w-2 h-2 bg-blue-400 rounded-full"></span> By {post.author?.name || post.authorName} </span> <span>{new Date(post.createdAt).toLocaleDateString()}</span> </div> <div className="flex items-center space-x-6 text-sm text-gray-300"> <span className="flex items-center gap-1"> <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> {post.replies} replies </span> <span className="flex items-center gap-1"> <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> {post.likes} likes </span> <span className="flex items-center gap-1"> <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> {post.views} views </span> </div> </div> </div> </div> )}