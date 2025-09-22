import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox",
import { SkillsFilterProps } from "@/types/filters",
// Common skills in AI and tech
const POPULAR_SKILLS = [

const POPULAR_SKILLS = [

import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { SkillsFilterProps } from '@/types/filters';

// Common skills in AI and tech;
const POPULAR_SKILLS = [;
  'Machine Learning',;
  'Deep Learning',;
  'Python',;
  'TensorFlow',;
  'PyTorch',;
  'Computer Vision',;
  'NLP',;
  'Data Science',;
  'AWS',;
  'Docker',;
  'Kubernetes',;
  'React',;
  'Node && Node.js',;
  'TypeScript',;
  'DevOps',;
  'Security',;
];

export function SkillsFilter(): any ({;
  selectedSkills,;
  toggleSkill,;
  expanded,;
  toggleSection,;
  isMobileFilterOpen,;
}: SkillsFilterProps) {;
  "Machine Learning",
  "Deep Learning",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Computer Vision",
  "NLP",
  "Data Science",
  "AWS",
  "Docker",
  "Kubernetes",
  "React",
  "Node.js",
  "TypeScript",
  "DevOps",
  "Security"
],

export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
            <div key={skill} className='flex items-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {

  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>;
      <button
        onClick={toggleSection}

        className="flex w-full items-center justify-between text-white font-medium"
      >

        <span>Skills</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
</button>

      {expanded && (
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => (
            <div key={skill} className="flex items-center">
              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`skill-${skill}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { SkillsFilterProps } from "@/types/filters",;
// Common skills in AI and tech;
const POPULAR_SKILLS = [;
  "Machine Learning",;
  "Deep Learning",;
  "Python",;
  "TensorFlow",;
  "PyTorch",;
  "Computer Vision",;
  "NLP",;
  "Data Science",;
  "AWS",;
  "Docker",;
  "Kubernetes",;
  "React",;
  "Node.js",;
  "TypeScript",;
  "DevOps",;
  "Security";
];
export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;

              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills && selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
:src/components/talent/filters/SkillsFilter.tsx

                {skill}
              ">
className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'
              />
              <label
                htmlFor={`skill-${skill}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >
                {skill}
:src/components/talent/filters/SkillsFilter.tsx
              </label>
            </div>
          ))}

    </div>;
  );
};
}

:src/components/talent/filters/SkillsFilter.tsx
    </div>
  );
}
export /**
 * SkillsFilter - Function description
 */
function SkillsFilter() {
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Skills</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {POPULAR_SKILLS.map(skill => (;
            <div key={skill} className="flex items-center">;
              <Checkbox;
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label;
                htmlFor={`skill-${skill}`}
                html_for={`skill-${skill}`}
                className='ml - 2 text - sm text - zion - slate - light cursor - pointer';
              >                {skill}                className="ml - 2 text - sm text - zion - slate - light cursor - pointer";
              html_for="input-;
                {skill}
              ">;
              </label>;
            </div>))}
        </div>)}
    </div>);
}
        </div>

                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
                {skill}
              </label>;
            </div>;
          ))}
        </div>;
      )}
    </div>;
  );
}

;
      )};

    </div>;
  );
};
}

;
origin/cursor/automate-test-improve-and-merge-code-2533
