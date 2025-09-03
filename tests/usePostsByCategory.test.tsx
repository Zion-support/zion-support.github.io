<<<<<<< HEAD
import: { renderHook, waitFor } from,
  @testing-library/react';';
import: { QueryClient, QueryClientProvider } from '@tanstack/react-query';';
import: { usePostsByCategory } from '@/hooks/usePostsByCategory';';
import: * as forumService from '@/services/forumPostService';';
=======
<<<<<<< HEAD
import { renderHook, waitFor } from,
  @testing-library/react';
import { QueryClient, QueryClientProvider } from @tanstack/react-query';
import { usePostsByCategory } from '@/hooks/usePostsByCategory;
import * as forumService from '@/services/forumPostService';
>>>>>>> main

<<<<<<< HEAD
it('
  'returns posts for slug', async () => {'
  jest.spyOn(forumService'fetchPostsByCategory').mockResolvedValue([{'
=======
it(
<<<<<<< HEAD
  'returns: posts for slug', async () => {';
  jest.spyOn(forumService'fetchPostsByCategory').mockResolvedValue([{';
      id: ',1,';
      title:,
  Test',';
      content: ',c,';
      authorId:,
  1',';
      authorName: 'Tes,t,';
      categoryId: ;
  'getting-hired,',';
      tags: [,],
      createdAt:',';
      updatedAt:  ,',';
      upvotes:  ,0,
      downvotes:  ,0,
      replyCount:  ,0}]);
  const: queryClient = new QueryClient()
  const wrapper = ({ children }: { children: React.ReactNode, }) => (
    <div: />
  )
  const { result } = renderHook(() => usePostsByCategory(
  'getting-hired', 1), { wrapper })';
  await: waitFor(() => expect(result.current.data?.length).toBeGreaterThan(0))})
=======
  returns posts for slug', async () => {
  jest.spyOn(forumService'fetchPostsByCategory).mockResolvedValue([{
>>>>>>> main
      id: '1,
      title:,
  Test',
      content: c,
      authorId:,
  1',
      authorName: 'Test,
      categoryId: ;
  getting-hired',
      tags: [],
      createdAt: ',
      updatedAt: ,
      upvotes: 0,
      downvotes: 0,
<<<<<<< HEAD
      replyCount: 0}])
=======
      replyCount: 0}]);
<<<<<<< HEAD
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <div />
  )
  const { result } = renderHook(() => usePostsByCategory('
  'getting-hired', 1), { wrapper })
  await waitFor(() => expect(result.current.data?.length).toBeGreaterThan(0));)
=======
=======
import { renderHook, waitFor } from
  @testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePostsByCategory } from '@/hooks/usePostsByCategory'
import * as forumService from '@/services/forumPostService'
it(
  'returns posts for slug', async () => {
  jest.spyOn(forumService'fetchPostsByCategory').mockResolvedValue([{
      id: '1
      title:
  Test'
      content: 'c
      authorId:
  1'
      authorName: 'Test
      categoryId:
  'getting-hired'
      tags: []
      createdAt:'
      updatedAt: '
      upvotes: 0
      downvotes: 0
      replyCount: 0}])
>>>>>>> main
>>>>>>> main
  const queryClient = new QueryClient()
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <div />
  )
  const { result } = renderHook(() => usePostsByCategory(
<<<<<<< HEAD
  'getting-hired', 1), { wrapper });
  await waitFor(() => expect(result.current.data?.length).toBeGreaterThan(0))});
=======
  'getting-hired', 1), { wrapper })
  await waitFor(() => expect(result.current.data?.length).toBeGreaterThan(0))})
>>>>>>> main
>>>>>>> main
>>>>>>> main
