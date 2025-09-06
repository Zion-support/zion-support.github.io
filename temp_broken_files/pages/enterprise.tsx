import type { GetServerSideProps } from 'next',;
;
export const getServerSideProps:GetServerSideProps = async () => {;
  return {;
    redirect:{;
      destination:'/plans/enterprise',;
      permanent:false}},;
},;
;
export default function EnterpriseRedirect() { return null, }import React from 'react';
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>enterprise</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
  );
}
