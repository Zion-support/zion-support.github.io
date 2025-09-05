interface ForumCategoryInfo { "id": "string; "name": string; "description": string; "postCount": number; adminOnly?: boolean; icon?: string; lastPost?: { "title": string; "author": string"} "date": 'string'}} export default function ForumCategories export { ForumCategories }(...args[]): "{ const "categories": ForumCategoryInf o[] = [ { "id": '1'","name": 'General Discussion',"description": 'General topics and discussions about technology,business,and innovation',"postCount": '15 0',"adminOnly": 'fals e',"icon": 'message-circle',"lastPost": "{ "title": 'Welcome to the Zion Tech Group community!'","author": 'Admin',"date": '2024-01-15' },{ "id": '2',"name": 'Technical Support',"description": 'Get help with technical issues,API integration,and development questions',"postCount": '8 9',"adminOnly": 'fals e',"icon": 'code',"lastPost": "{ "title": 'API integration question'","author": 'Developer123',"date": '2024-01-14' },{ "id": '3',"name": 'AI & Machine Learning',"description": 'Discussions about AI,ML,and data science topics',"postCount": '23 4',"adminOnly": 'fals e',"icon": 'brain',"lastPost": "{ "title": 'New AI model deployment strategies'","author": 'DataScientist',"date": '2024-01-13' },{ "id": '4',"name": 'Cloud & DevOps',"description": 'Cloud infrastructure,DevOps practices,and deployment strategies',"postCount": '16 7',"adminOnly": 'fals e',"icon": 'cloud',"lastPost": "{ "title": 'Kubernetes best practices'","author": 'DevOpsEngineer',"date": '2024-01-12' },{ "id": '5',"name": 'Cybersecurity',"description": 'Security best practices,threat detection,and compliance discussions',"postCount": '9 8',"adminOnly": 'fals e',"icon": 'shield',"lastPost": "{ "title": 'Zero-day vulnerability response'","author": 'SecurityExpert',"date": '2024-01-11' },{ "id": '6',"name": 'Business & Strategy',"description": 'Business development,strategy,and industry insights',"postCount": '7 6',"adminOnly": 'fals e',"icon": 'trending-up',"lastPost": "{ "title": 'Digital transformation case studies'","author": 'BusinessAnalyst',"date": '2024-01-10' ]; return ( <section className = "py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden"> {} <div className="absolute inset-0 opacity-10"> <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div> <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div> ></div> <div className="container mx-auto px-4 relative z-10"> {} <div className="text-center mb-16"> <h2 className="text-4xl "md": "tex t-5xl font-bold text-white mb-6"> Community Forums </h2> <p className="text-xl text-zion-slate-light max-w-3xl mx-auto"> Join discussions",share knowledge,and connect with fellow tech professionals </p> </div> {} <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3 gap-8"> {categories.map((category) => ( <div key={category.id"} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 "hover": "borde r-white/40 transition-all duration-300 "hover": scal e-105 group cursor-pointer" <div className="flex items-start justify-between mb-4"> <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center"> <span className="text-2xl">💬</span> </div> {category.adminOnly && ( <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30"> Admin Only </span> )"} </div> <h3 className="text-xl font-semibold text-white mb-3 group-"hover": "tex t-zion-cyan transition-colors duration-300"> {category.name"} </h3> <p className="text-zion-slate-light mb-4 leading-relaxed"> {category.description} </p> <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4"> <span className="flex items-center gap-2"> <span className="w-2 h-2 bg-zion-cyan rounded-full"></span> {category.postCount} posts </span> </div> {category.lastPost && (; <div className="pt-4 border-t border-white/10"> <p className="text-xs text-zion-slate-light mb-1">Latest "Post": "</p> <p className="text-sm text-white font-medium truncate"> {category.lastPost.title"} </p> <p className="text-xs text-zion-slate-light"> by {category.lastPost.author} • {new Date(category.lastPost.date).toLocaleDateString()} </p> </div> )} ></div> ))} </div> {} <div className="text-center mt-16"> <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto"> <h3 className="text-2xl font-bold text-white mb-4"> Join the Conversation </h3> <p className="text-zion-slate-light mb-6"> Start contributing to discussions,ask questions,and share your expertise with the community. </p> <button className="bg-gradient-to-r from-zion-cyan to-zion-blue "hover": "fro m-zion-cyan-light "hover": t o-zion-blue-light text-zion-blue-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 "hover": scal e-105"> Start a Discussion ></div> ></div> ></div> ></div> ></div> )"}
interface ForumCategoryInfo { id: string; name: string; description: string; postCount: number; adminOnly?: boolean; icon?: string; lastPost?: { title: string; author: string; date: string}} export default function ForumCategories(...args[]): { const categories: ForumCategoryInf o[] = [ { id: &apos;1&apos;,name: &apos;General Discussion&apos;,description: &apos;General topics and discussions about technology,business,and innovation&apos;,postCount: 15 0,adminOnly: fals e,icon: &apos;message-circle&apos;,lastPost: { title: &apos;Welcome to the Zion Tech Group community!&apos;,author: &apos;Admin&apos;,date: &apos;2024-01-15&apos; },{ id: &apos;2&apos;,name: &apos;Technical Support&apos;,description: &apos;Get help with technical issues,API integration,and development questions&apos;,postCount: 8 9,adminOnly: fals e,icon: &apos;code&apos;,lastPost: { title: &apos;API integration question&apos;,author: &apos;Developer123&apos;,date: &apos;2024-01-14&apos; },{ id: &apos;3&apos;,name: &apos;AI & Machine Learning&apos;,description: &apos;Discussions about AI,ML,and data science topics&apos;,postCount: 23 4,adminOnly: fals e,icon: &apos;brain&apos;,lastPost: { title: &apos;New AI model deployment strategies&apos;,author: &apos;DataScientist&apos;,date: &apos;2024-01-13&apos; },{ id: &apos;4&apos;,name: &apos;Cloud & DevOps&apos;,description: &apos;Cloud infrastructure,DevOps practices,and deployment strategies&apos;,postCount: 16 7,adminOnly: fals e,icon: &apos;cloud&apos;,lastPost: { title: &apos;Kubernetes best practices&apos;,author: &apos;DevOpsEngineer&apos;,date: &apos;2024-01-12&apos; },{ id: &apos;5&apos;,name: &apos;Cybersecurity&apos;,description: &apos;Security best practices,threat detection,and compliance discussions&apos;,postCount: 9 8,adminOnly: fals e,icon: &apos;shield&apos;,lastPost: { title: &apos;Zero-day vulnerability response&apos;,author: &apos;SecurityExpert&apos;,date: &apos;2024-01-11&apos; };,{ id: &apos;6&apos;,name: &apos;Business & Strategy&apos;,description: &apos;Business development,strategy,and industry insights&apos;,postCount: 7 6,adminOnly: fals e,icon: &apos;trending-up&apos;,lastPost: { title: &apos;Digital transformation case studies&apos;,author: &apos;BusinessAnalyst&apos;,date: &apos;2024-01-10&apos; ]; return ( <section className = &quot;py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden&quot;> {} <div className=&quot;absolute inset-0 opacity-10&quot;>; <div className=&quot;absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl&quot;></div> <div className=&quot;absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl&quot;></div> </div>; <div className=&quot;container mx-auto px-4 relative z-10&quot;> {} <div className=&quot;text-center mb-16&quot;> <h2 className=&quot;text-4xl md: tex t-5xl font-bold text-white mb-6&quot;> Community Forums </h2> <p className=&quot;text-xl text-zion-slate-light max-w-3xl mx-auto&quot;> Join discussions,share knowledge,and connect with fellow tech professionals </p> </div> {} <div className=&quot;grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8&quot;> {categories.map((category) => ( <div key={category.id} className=&quot;bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover: borde r-white/40 transition-all duration-300 hover: scal e-105 group cursor-pointer&quot; <div className=&quot;flex items-start justify-between mb-4&quot;> <div className=&quot;w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center&quot;> <span className=&quot;text-2xl&quot;>💬</span> </div> {category.adminOnly && ( <span className=&quot;px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30&quot;> Admin Only </span> )} </div> <h3 className=&quot;text-xl font-semibold text-white mb-3 group-hover: tex t-zion-cyan transition-colors duration-300&quot;> {category.name} </h3> <p className=&quot;text-zion-slate-light mb-4 leading-relaxed&quot;> {category.description} </p> <div className=&quot;flex items-center justify-between text-sm text-zion-slate-light mb-4&quot;> <span className=&quot;flex items-center gap-2&quot;> <span className=&quot;w-2 h-2 bg-zion-cyan rounded-full&quot;></span> {category.postCount} posts </span> </div> {category.lastPost && (; <div className=&quot;pt-4 border-t border-white/10&quot;> <p className=&quot;text-xs text-zion-slate-light mb-1&quot;>Latest Post:</p> <p className=&quot;text-sm text-white font-medium truncate&quot;> {category.lastPost.title} </p> <p className=&quot;text-xs text-zion-slate-light&quot;> by {category.lastPost.author} • {new Date(category.lastPost.date).toLocaleDateString()} </p> </div> )} </div>; ))} </div> {} <div className=&quot;text-center mt-16&quot;> <div className=&quot;bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto&quot;> <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;> Join the Conversation </h3> <p className=&quot;text-zion-slate-light mb-6&quot;> Start contributing to discussions,ask questions,and share your expertise with the community. </p> <button className=&quot;bg-gradient-to-r from-zion-cyan to-zion-blue hover: fro m-zion-cyan-light hover: t o-zion-blue-light text-zion-blue-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover: scal e-105&quot;> Start a Discussion </button>; </div>; </div>; </div>; </section>; )}
interface ForumCategoryInfo {
  "id": string;
  name: string;
  description: string;
  postCount: number;
  adminOnly?: boolean;
  icon?: string;
lastPost?: {
    title: string;
    author: string;
    date: string}}
export default function ForumCategories(...args[]):  {
  const "categories": ForumCategoryInf o[] = [{
      id: '1',
      "name": 'General Discussion',
      "description": 'General topics and discussions about technology, business, and innovation',
      "postCount": 15 0,
      "adminOnly": fals e,
      "icon": 'message-circle',
      "lastPost": {
        title: 'Welcome to the Zion Tech Group community!',
        "author": 'Admin',
        "date": '2024-01-15'
    },
    {
      "id": '2',
      "name": 'Technical Support',
      "description": 'Get help with technical issues, API integration, and development questions',
      "postCount": 8 9,
      "adminOnly": fals e,
      "icon": 'code',
      "lastPost": {
        title: 'API integration question',
        "author": 'Developer123',
        "date": '2024-01-14'
    },
    {
      "id": '3',
      "name": 'AI & Machine Learning',
      "description": 'Discussions about AI, ML, and data science topics',
      "postCount": 23 4,
      "adminOnly": fals e,
      "icon": 'brain',
      "lastPost": {
        title: 'New AI model deployment strategies',
        "author": 'DataScientist',
        "date": '2024-01-13'
    },
    {
      "id": '4',
      "name": 'Cloud & DevOps',
      "description": 'Cloud infrastructure, DevOps practices, and deployment strategies',
      "postCount": 16 7,
      "adminOnly": fals e,
      "icon": 'cloud',
      "lastPost": {
        title: 'Kubernetes best practices',
        "author": 'DevOpsEngineer',
        "date": '2024-01-12'
    },
    {
      "id": '5',
      "name": 'Cybersecurity',
      "description": 'Security best practices, threat detection, and compliance discussions',
      "postCount": 9 8,
      "adminOnly": fals e,
      "icon": 'shield',
      "lastPost": {
        title: 'Zero-day vulnerability response',
        "author": 'SecurityExpert',
        "date": '2024-01-11'
    };,
    {
      "id": '6',
      "name": 'Business & Strategy',
      "description": 'Business development, strategy, and industry insights',
      "postCount": 7 6,
      "adminOnly": fals e,
      "icon": 'trending-up',
      "lastPost": {
        title: 'Digital transformation case studies',
        "author": 'BusinessAnalyst',
        "date": '2024-01-10'
  ];
  return (
    <section className = "py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden"> {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">;
        <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div>
      </div>;
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl "md": tex t-5xl font-bold text-white mb-6">
            Community Forums
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Join discussions, share knowledge, and connect with fellow tech professionals
          </p>
        </div>
        {/* Categories Grid */}
        <div className="grid grid-cols-1 "md": gri d-cols-2 lg: gri d-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 "hover": borde r-white/40 transition-all duration-300 hover: scal e-105 group cursor-pointer"
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                {category.adminOnly && (
                  <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                    Admin Only
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-"hover": tex t-zion-cyan transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                  {category.postCount} posts
                </span>
              </div>
              {category.lastPost && (;
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-zion-slate-light mb-1">Latest "Post": </p>
                  <p className="text-sm text-white font-medium truncate">
                    {category.lastPost.title}
                  </p>
                  <p className="text-xs text-zion-slate-light">
                    by {category.lastPost.author} • {new Date(category.lastPost.date).toLocaleDateString()}
                  </p>
                    </div>
  );
}
            </div>;
          ))}
        </div>
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Conversation
            <p className="text-zion-slate-light mb-6">
              Start contributing to discussions, ask questions, and share your expertise with the community.
            </p>
            <button className="bg-gradient-to-r from-zion-cyan to-zion-blue "hover": fro m-zion-cyan-light hover: t o-zion-blue-light text-zion-blue-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover: scal e-105">
              Start a Discussion
            </button>;
          </div>;
        </div>;
      </div>;
    </section>;
  );
}';
';';
interface ForumCategoryInfo { id: string; name: string; description: string; postCount: number; adminOnly?: boolean; icon?: string; lastPost?: { title: string; author: string} date: 'string'}} export default function ForumCategories export { ForumCategories }(...args[]): { const categories: ForumCategoryInf o[] = [ { id: '1',name: 'General Discussion',description: 'General topics and discussions about technology,business,and innovation',postCount: '15 0',adminOnly: 'fals e',icon: 'message-circle',lastPost: { title: 'Welcome to the Zion Tech Group community!',author: 'Admin',date: '2024-01-15' },{ id: '2',name: 'Technical Support',description: 'Get help with technical issues,API integration,and development questions',postCount: '8 9',adminOnly: 'fals e',icon: 'code',lastPost: { title: 'API integration question',author: 'Developer123',date: '2024-01-14' },{ id: '3',name: 'AI & Machine Learning',description: 'Discussions about AI,ML,and data science topics',postCount: '23 4',adminOnly: 'fals e',icon: 'brain',lastPost: { title: 'New AI model deployment strategies',author: 'DataScientist',date: '2024-01-13' },{ id: '4',name: 'Cloud & DevOps',description: 'Cloud infrastructure,DevOps practices,and deployment strategies',postCount: '16 7',adminOnly: 'fals e',icon: 'cloud',lastPost: { title: 'Kubernetes best practices',author: 'DevOpsEngineer',date: '2024-01-12' },{ id: '5',name: 'Cybersecurity',description: 'Security best practices,threat detection,and compliance discussions',postCount: '9 8',adminOnly: 'fals e',icon: 'shield',lastPost: { title: 'Zero-day vulnerability response',author: 'SecurityExpert',date: '2024-01-11' },{ id: '6',name: 'Business & Strategy',description: 'Business development,strategy,and industry insights',postCount: '7 6',adminOnly: 'fals e',icon: 'trending-up',lastPost: { title: 'Digital transformation case studies',author: 'BusinessAnalyst',date: '2024-01-10' ]; return ( <section className = "py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden"> {} <div className="absolute inset-0 opacity-10"> <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div> <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div> ></div> <div className="container mx-auto px-4 relative z-10"> {} <div className="text-center mb-16"> <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6"> Community Forums </h2> <p className="text-xl text-zion-slate-light max-w-3xl mx-auto"> Join discussions,share knowledge,and connect with fellow tech professionals </p> </div> {} <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8"> {categories.map((category) => ( <div key={category.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover: borde r-white/40 transition-all duration-300 hover: scal e-105 group cursor-pointer" <div className="flex items-start justify-between mb-4"> <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center"> <span className="text-2xl">💬</span> </div> {category.adminOnly && ( <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30"> Admin Only </span> )} </div> <h3 className="text-xl font-semibold text-white mb-3 group-hover: tex t-zion-cyan transition-colors duration-300"> {category.name} </h3> <p className="text-zion-slate-light mb-4 leading-relaxed"> {category.description} </p> <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4"> <span className="flex items-center gap-2"> <span className="w-2 h-2 bg-zion-cyan rounded-full"></span> {category.postCount} posts </span> </div> {category.lastPost && (; <div className="pt-4 border-t border-white/10"> <p className="text-xs text-zion-slate-light mb-1">Latest Post:</p> <p className="text-sm text-white font-medium truncate"> {category.lastPost.title} </p> <p className="text-xs text-zion-slate-light"> by {category.lastPost.author} • {new Date(category.lastPost.date).toLocaleDateString()} </p> </div> )} ></div> ))} </div> {} <div className="text-center mt-16"> <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto"> <h3 className="text-2xl font-bold text-white mb-4"> Join the Conversation </h3> <p className="text-zion-slate-light mb-6"> Start contributing to discussions,ask questions,and share your expertise with the community. </p> <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover: fro m-zion-cyan-light hover: t o-zion-blue-light text-zion-blue-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover: scal e-105"> Start a Discussion ></div> ></div> ></div> ></div> ></div> )}
}
interface ForumCategoryInfo { id: string; name: string; description: string; postCount: number; adminOnly?: boolean; icon?: string; lastPost?: { title: string; author: string; date: string}} export default function ForumCategories(...args[]): { const categories: ForumCategoryInf o[] = [ { id: '1',name: 'General Discussion',description: 'General topics and discussions about technology,business,and innovation',postCount: 15 0,adminOnly: fals e,icon: 'message-circle',lastPost: { title: 'Welcome to the Zion Tech Group community!',author: 'Admin',date: '2024-01-15' },{ id: '2',name: 'Technical Support',description: 'Get help with technical issues,API integration,and development questions',postCount: 8 9,adminOnly: fals e,icon: 'code',lastPost: { title: 'API integration question',author: 'Developer123',date: '2024-01-14' },{ id: '3',name: 'AI & Machine Learning',description: 'Discussions about AI,ML,and data science topics',postCount: 23 4,adminOnly: fals e,icon: 'brain',lastPost: { title: 'New AI model deployment strategies',author: 'DataScientist',date: '2024-01-13' },{ id: '4',name: 'Cloud & DevOps',description: 'Cloud infrastructure,DevOps practices,and deployment strategies',postCount: 16 7,adminOnly: fals e,icon: 'cloud',lastPost: { title: 'Kubernetes best practices',author: 'DevOpsEngineer',date: '2024-01-12' },{ id: '5',name: 'Cybersecurity',description: 'Security best practices,threat detection,and compliance discussions',postCount: 9 8,adminOnly: fals e,icon: 'shield',lastPost: { title: 'Zero-day vulnerability response',author: 'SecurityExpert',date: '2024-01-11' };,{ id: '6',name: 'Business & Strategy',description: 'Business development,strategy,and industry insights',postCount: 7 6,adminOnly: fals e,icon: 'trending-up',lastPost: { title: 'Digital transformation case studies',author: 'BusinessAnalyst',date: '2024-01-10' ]; return ( <section className = "py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden"> {} <div className="absolute inset-0 opacity-10">; <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div> <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div> </div>; <div className="container mx-auto px-4 relative z-10"> {} <div className="text-center mb-16"> <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6"> Community Forums </h2> <p className="text-xl text-zion-slate-light max-w-3xl mx-auto"> Join discussions,share knowledge,and connect with fellow tech professionals </p> </div> {} <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8"> {categories.map((category) => ( <div key={category.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover: borde r-white/40 transition-all duration-300 hover: scal e-105 group cursor-pointer" <div className="flex items-start justify-between mb-4"> <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center"> <span className="text-2xl">💬</span> </div> {category.adminOnly && ( <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30"> Admin Only </span> )} </div> <h3 className="text-xl font-semibold text-white mb-3 group-hover: tex t-zion-cyan transition-colors duration-300"> {category.name} </h3> <p className="text-zion-slate-light mb-4 leading-relaxed"> {category.description} </p> <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4"> <span className="flex items-center gap-2"> <span className="w-2 h-2 bg-zion-cyan rounded-full"></span> {category.postCount} posts </span> </div> {category.lastPost && (; <div className="pt-4 border-t border-white/10"> <p className="text-xs text-zion-slate-light mb-1">Latest Post:</p> <p className="text-sm text-white font-medium truncate"> {category.lastPost.title} </p> <p className="text-xs text-zion-slate-light"> by {category.lastPost.author} • {new Date(category.lastPost.date).toLocaleDateString()} </p> </div> )} </div>; ))} </div> {} <div className="text-center mt-16"> <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto"> <h3 className="text-2xl font-bold text-white mb-4"> Join the Conversation </h3> <p className="text-zion-slate-light mb-6"> Start contributing to discussions,ask questions,and share your expertise with the community. </p> <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover: fro m-zion-cyan-light hover: t o-zion-blue-light text-zion-blue-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover: scal e-105"> Start a Discussion </button>; </div>; </div>; </div>; </section>; )}