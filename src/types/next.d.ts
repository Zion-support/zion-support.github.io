import { NextPage } from 'next';

declare module 'next' {
  interface NextPageProps {
    params?: { [key: string]: string };
  }
}
