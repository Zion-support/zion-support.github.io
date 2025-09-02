import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePostsByCategory } from '@/hooks/usePostsByCategory';
import * as forumService from '@/services/forumPostService';

it(
  'returns posts for slug', async () => {
  jest.spyOn(forumService, 'fetchPostsByCategory').mockResolvedValue([
    {
      id: '1',
      title: 'Test',
      content: 'content',
      authorId: '1',
      authorName: 'Test Author',
      categoryId: 'getting-hired',
      tags: [],
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01',
      upvotes: 0,
      downvotes: 0,
      replyCount: 0,
    },
  ]);

  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <div />
  );

  const { result } = renderHook(() => usePostsByCategory('getting-hired', 1), { wrapper });

  await waitFor(() => expect(result.current.data?.length).toBeGreaterThan(0));
});
