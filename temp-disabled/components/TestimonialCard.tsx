import React from 'react';

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  avatar?: string;}
}
}

export default function TestimonialCard({ name, company, content, avatar }: TestimonialCardProps) {
  return (
    <div className=\"bg-white p-6 rounded-lg shadow-md\"    />
      <div className=\"flex items-center mb-4\"    />
        {avatar && (}
          <img;}
src={avatar}
            alt={name}
            className=\"w-12 h-12 rounded-full mr-4\"
             />
        )}
        <div    />
          <h4 className=\"font-semibold text-gray-900\"    />{name}</h4>
          <p className=\"text-sm text-gray-600\"    />{company}</p>
        </div>
      </div>
      <p className=\"text-gray-700 italic\"    />\"{content}\"</p>
    </div>
  );
}