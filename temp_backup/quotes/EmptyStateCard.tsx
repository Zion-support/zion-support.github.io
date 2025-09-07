/* eslint-disable */
 import {;
  {;
  {;
  MessageSquare, ArchiveIcon ;
}from 'lucide-react' type EmptyStateCardProps = {';''
  type: 'active' | 'archived' ;
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({;'
  type ;''
}) => {';''
  const isActive = type === 'active';
bg-zion-blue-dark border border-zion-blue-light text-center py-12'> <CardContent> <div className=' mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4'> {';''
  isActive ? (<MessageSquare className=' h-8 w-8 text-white'/>) : (<ArchiveIcon className=' h-8 w-8 text-white' />) ;
}</div> </p> </CardContent> </Card>) ;''
};''''
''''''