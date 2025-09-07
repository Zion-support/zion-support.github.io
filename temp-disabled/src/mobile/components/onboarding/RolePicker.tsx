:src/mobile/components/onboarding/RolePicker.tsx
className={`cursor-pointer transition-all ${
            selectedRole === 'client' 
              ? "border-primary bg-primary/5" 
              : "border-border hover:border-primary/40"
          }`}
          onClick={() => handleSelect('client')}
        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">I'm hiring</h3>
                <p className="text-sm text-muted-foreground">Post jobs and find talented professionals</p>
              </div>
              {selectedRole === 'client' && (
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Check } from 'lucide-react';
origin/cursor/automate-test-improve-and-merge-code-2533

                <Check className="h-5 w-5 text-primary" />
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Briefcase, Users, Check } from 'lucide-react';
type UserRole = "talent" | "client" | null,;
interface RolePickerProps {;
  onSelect: (role: UserRole) => void;
}
;
export function RolePicker({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),;
  const handleSelect = (role: UserRole) => {;
    setSelectedRole(role);
    onSelect(role);
  };
  return (
    <div className='space-y-4 px-4'>;
      <h2 className='text-xl font-medium'>What brings you to Zion?</h2>;
      <p className='text-muted-foreground'>;
        Choose how you want to use our platform;
      </p>;

      <div className='space-y-3 mt-6'>;
        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === 'talent'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/40'
          }`}

              )}

            </div>;
          </CardContent>;
        </Card>;

        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === 'client'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/40'
          }`}

        >;
          <CardContent className='p-5'>;
            <div className='flex items-center'>;
              <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4'>;
                <Users className='h-6 w-6 text-primary' />;
              </div>;
              <div className='flex-1'>;
                <h3 className='font-medium'>I'm hiring</h3>;
                <p className='text-sm text-muted-foreground'>;
                  Post jobs and find talented professionals;
                </p>;
              </div>;
              {selectedRole === 'client' && (;
                <Check className='h-5 w-5 text-primary' />;
              )}

import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Briefcase, Users, Check } from 'lucide-react';
type UserRole = 'talent' | 'client' | null;
interface RolePickerProps {
  on_select: (role: UserRole) => void;
export /**
 * RolePicker - Function description
 */
function RolePicker() {
  const [selected_role, setSelectedRole] = useState < UserRole>(null);
  const handle_select = (role: UserRole) =>: any {
    setSelectedRole (role);
    on_select (role);
  }
  return (
    <div className='space - y-4 px - 4'>;
      <h2 className='text - xl font - medium'>What brings you to Zion?</h2>;
      <p className='text - muted - foreground'>;
        Choose how you want to use our platform;
      </p>;
      <div className='space - y-3 mt - 6'>;
        <Card;
          className={`cursor - pointer transition - all ${
            selected_role === 'talent';
              ? 'border - primary bg - primary / 5';
              : 'border - border hover:border - primary / 40';
          }`}
          on_click = {(, ) => handle_select ('talent'), }
        >;
          <CardContent className='p - 5'>;
            <div className='flex items - center'>;
              <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4'>;
                <Briefcase className='h - 6 w - 6 text - primary' />;
              </div>;
              <div className='flex - 1'>;
                <h3 className='font - medium'>I'm offering services</h3>;
                <p className='text - sm text - muted - foreground'>;
                  Find work and showcase your skills;
                </p>;
              </div>;
              {selected_role === 'talent' && (
                <Check className='h - 5 w - 5 text - primary' />)}

className={`cursor-pointer transition-all ${
            selectedRole === 'client'''
              ? "border-primary bg-primary/5"""
              : "border-border hover:border-primary/40""
          }`}"
          onClick={() => handleSelect('client')}'
        >'
          <CardContent className="p-5">"
</CardContent>"
            <div className="flex items-center">"
</div>"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">"
</div>"
                <Users className="h-6 w-6 text-primary" />"
</Users>
              </div>"
              <div className="flex-1">"
</div>"
                <h3 className="font-medium">I'm hiring</h3>''
                <p className="text-sm text-muted-foreground">Post jobs and find talented professionals</p>"
              </div>"
                <Check className="h-5 w-5 text-primary" />"
</Check>
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),;
</UserRole>"
    <div className='space-y-4 px-4'>;'
</div>'
      <h2 className='text-xl font-medium'>What brings you to Zion?</h2>;''
      <p className='text-muted-foreground'>;'
</p>
      </p>;'
      <div className='space-y-3 mt-6'>;'
</div>
        <Card;
          className={`cursor-pointer transition-all ${'
            selectedRole === 'talent'''
              ? 'border-primary bg-primary/5'''
              : 'border-border hover:border-primary/40''
          }`}'
          onClick={() => handleSelect('talent')}'
</Card>'
          <CardContent className="p-5">;"
</CardContent>"
            <div className="flex items-center">;"
</div>"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;"
</div>"
                <Briefcase className="h-6 w-6 text-primary" />;"
</Briefcase>
              </div>;"
              <div className="flex-1">;"
</div>"
                <h3 className="font-medium">I'm offering services</h3>;''
                <p className="text-sm text-muted-foreground">Find work and showcase your skills</p>;"
              </div>;"
                <Check className="h-5 w-5 text-primary" />;"
</Check>
:temp-disabled/src/mobile/components/onboarding/RolePicker.tsx
            </div>;
          </CardContent>;
        </Card>;
        <Card;
:src/mobile/components/onboarding/RolePicker.tsx
          className={`cursor - pointer transition - all ${
            selected_role === 'client';
              ? 'border - primary bg - primary / 5';
              : 'border - border hover:border - primary / 40';
          }`}
          on_click = {() => handle_select ('client'), }
        >;
          <CardContent className='p - 5'>;
            <div className='flex items - center'>;
              <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4'>;
                <Users className='h - 6 w - 6 text - primary' />;
              </div>;
              <div className='flex - 1'>;
                <h3 className='font - medium'>I'm hiring</h3>;
                <p className='text - sm text - muted - foreground'>;
                  Post jobs and find talented professionals;
                </p>;
              </div>;
              {selected_role === 'client' && (
                <Check className='h - 5 w - 5 text - primary' />)}
          className={`cursor-pointer transition-all ${"
            selectedRole === 'client'''
              ? 'border-primary bg-primary/5'''
              : 'border-border hover:border-primary/40''
          }`}'
          onClick={() => handleSelect('client')}'
</Card>'
          <CardContent className="p-5">;"
</CardContent>"
            <div className="flex items-center">;"
</div>"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;"
</div>"
                <Users className="h-6 w-6 text-primary" />;"
</Users>
              </div>;"
              <div className="flex-1">;"
</div>"
                <h3 className="font-medium">I'm hiring</h3>;''
                <p className="text-sm text-muted-foreground">Post jobs and find talented professionals</p>;"
              </div>;"
                <Check className="h-5 w-5 text-primary" />;"
</Check>
  const [selected_role, setSelectedRole] = useState < UserRole>(null);
  const handle_select = (role: UserRole) =>: any {
  // TODO: Implement
}
    setSelectedRole (role);
    on_select (role);
  }
  return ("
    <div className='space - y-4 px - 4'>;'
</div>'
      <h2 className='text - xl font - medium'>What brings you to Zion?</h2>;''
      <p className='text - muted - foreground'>;'
</p>
      </p>;'
      <div className='space - y-3 mt - 6'>;'
</div>
        <Card;
          className={`cursor - pointer transition - all ${'
            selected_role === 'talent';''
              ? 'border - primary bg - primary / 5';''
              : 'border - border hover:border - primary / 40';'
          }`})'
          on_click = {(, ) => handle_select ('talent'), }'
</Card>'
          <CardContent className='p - 5'>;'
</CardContent>'
            <div className='flex items - center'>;'
</div>'
              <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4'>;'
</div>'
                <Briefcase className='h - 6 w - 6 text - primary' />;'
</Briefcase>
              </div>;'
              <div className='flex - 1'>;'
</div>'
                <h3 className='font - medium'>I'm offering services</h3>;''
                <p className='text - sm text - muted - foreground'>;'
</p>
                </p>;
              </div>;'
                <Check className='h - 5 w - 5 text - primary' />)}'
</Check>
            </div>;
          </CardContent>;
        </Card>;
        <Card;
          className={`cursor - pointer transition - all ${'
            selected_role === 'client';''
              ? 'border - primary bg - primary / 5';''
              : 'border - border hover:border - primary / 40';'
          }`}'
          on_click = {() => handle_select ('client'), }'
</Card>'
          <CardContent className='p - 5'>;'
</CardContent>'
            <div className='flex items - center'>;'
</div>'
              <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4'>;'
</div>'
                <Users className='h - 6 w - 6 text - primary' />;'
</Users>
              </div>;'
              <div className='flex - 1'>;'
</div>'
                <h3 className='font - medium'>I'm hiring</h3>;''
                <p className='text - sm text - muted - foreground'>;'
</p>
                </p>;
              </div>;'
                <Check className='h - 5 w - 5 text - primary' />)}'
</Check>
:temp-disabled/src/mobile/components/onboarding/RolePicker.tsx

            </div>;
          </CardContent>;
        </Card>;
:src/mobile/components/onboarding/RolePicker.tsx
      </div>;

    </div>);
}
;
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
className={`cursor-pointer transition-all ${
            selectedRole === 'client
              ? "border-primary bg-primary/5"""
              : "border-border hover:border-primary/40""`;
          }`}"
          onClick={() => handleSelect('client')}
        >
          <CardContent className="p-5">"
"
            <div className="flex items-center">"
</div>"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">"
                <Users className="h-6 w-6 text-primary" />"

              <div className="flex-1">"
                <h3 className="font-medium">I'm hiring</h3>
                <p className="text-sm text-muted-foreground">Post jobs and find talented professionals</p>"
                <Check className="h-5 w-5 text-primary" />"

  const [selectedRole, setSelectedRole] = useState<UserRole>(null),;
    <div className='space-y-4 px-4'>;
</div>
      <h2 className='text-xl font-medium'>What brings you to Zion?</h2>;
      <p className='text-muted-foreground'>;
</p>
      </p>;
      <div className='space-y-3 mt-6'>;
        <Card;`;
            selectedRole === 'talent
              ? 'border-primary bg-primary/5
              : 'border-border hover:border-primary/40`;
          }`}
          onClick={() => handleSelect('talent')}

          <CardContent className="p-5">;"
            <div className="flex items-center">;"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;"
                <Briefcase className="h-6 w-6 text-primary" />;"

              </div>;"
              <div className="flex-1">;"
                <h3 className="font-medium">I'm offering services</h3>;
                <p className="text-sm text-muted-foreground">Find work and showcase your skills</p>;"
                <Check className="h-5 w-5 text-primary" />;"

            </div>;
          ;
          className={`cursor-pointer transition-all ${"

                <Users className="h-6 w-6 text-primary" />;"

                <h3 className="font-medium">I'm hiring</h3>;
                <p className="text-sm text-muted-foreground">Post jobs and find talented professionals</p>;"

  const [selected_role, setSelectedRole] = useState < UserRole>(null);
  const handle_select = (role: UserRole) =>: any {
  // TODO: Implement
}
    setSelectedRole (role);
    on_select (role);
  return ("
    <div className='space - y-4 px - 4'>;
      <h2 className='text - xl font - medium'>What brings you to Zion?</h2>;
      <p className='text - muted - foreground'>;
      <div className='space - y-3 mt - 6'>;
          className={`cursor - pointer transition - all ${
            selected_role === 'talent';
              ? 'border - primary bg - primary / 5';
              : 'border - border hover:border - primary / 40';`;
          }`})
          on_click = {(, ) => handle_select ('talent'), }

          <CardContent className='p - 5'>;

            <div className='flex items - center'>;
              <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4'>;
                <Briefcase className='h - 6 w - 6 text - primary' />;

              <div className='flex - 1'>;
                <h3 className='font - medium'>I'm offering services</h3>;
                <p className='text - sm text - muted - foreground'>;
                <Check className='h - 5 w - 5 text - primary' />)}

            selected_role === 'client';
          on_click = {() => handle_select ('client'), }


                <Users className='h - 6 w - 6 text - primary' />;

                <h3 className='font - medium'>I'm hiring</h3>;

    </div>);`;
pr-12325
        <Card;
          className={`cursor - pointer transition - all ${selected_role === 'client';
              ? 'border - primary bg - primary / 5';}
              : 'border - border hover:border - primary / 40';}
          }`}
          on_click = {() = /> handle_select ('client') }
        >;
          <CardContent className='p - 5' />;
            <div className='flex items - center' />;
              <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4' />;
                <Users className='h - 6 w - 6 text - primary' />;
              </div>;
              <div className='flex - 1' />;
                <h3 className='font - medium' />I'm hiring</h3>;
                <p className='text - sm text - muted - foreground' />;
                  Post jobs and find talented professionals;
                </p>;
              </div>;
              {selected_role === 'client' && (<Check className='h - 5 w - 5 text - primary' />)}</div>;
          </CardContent>;
        </Card>;
      </div>
    </div>
  );
}</div>;
          </CardContent>;
        </Card>;
      </div>;

    </div>);'

:temp-disabled/src/mobile/components/onboarding/RolePicker.tsx
