import React from 'react';
type AnyProps = Record<string, any>;
function createElement(tag: any, props: AnyProps) {;
  const { children, ...rest } = props || {};