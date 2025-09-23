'use client';
import React from 'react';

export default function UpdateZionGPT2() {
  return (
    <div className='bg-black min-h-screen'>
      <div className='mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8'>
        <a
          href='/updates'
          className='text-blue-40o0 hover:text-blue-30o0 text-sm'
        >
          ← All updates
        </a>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          Launch: ZionGPT 2.0 Real-Time Reasoning
        </h1>
        <p className='mt-3 text-gray-30o0'>
          Next-gen streaming reasoning with tool-use, low-latency retrieval, and
          safety gates.
        </p>
        <div className='mt-8 space-y-6 text-gray-20o0 leading-7'>
          <p>
            ZionGPT 2.0 introduces streaming tool-use, sub-second retrieval, and
            production safety features including policy-as-code checks and
            reversible actions. Built for agentic workflows and enterprise
            deployments.
          </p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>
              Streaming chain-of-thought summaries with grounded citations
            </li>
            <li>Retrieval observability with SLIs and tail latency alerts</li>
            <li>Guarded actions with approval policies and audit trails</li>
          </ul>
          <p>Get a demo or talk to us about pilot deployments.</p>
        </div>
        <div className='mt-10'>
          <a
            href='/contact'
            className='rounded-md bg-blue-60o0 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-50o0'
          >
            Request a demo
          </a>
        </div>
      </div>
    </div>
  );
}
