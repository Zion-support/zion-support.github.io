<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import TalentDetail from '@/pages/TalentDetail';
<<<<<<< HEAD

const server = setupServer(
=======
const server = setupServer()
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  rest.get('/api/talent/t-001', (_req, res, ctx) => {
    return res(
      ctx.json({
        id: 't-001',
        full_name: 'Test Talent',
        bio: 'Bio',
        skills: ['React'],
<<<<<<< HEAD
        average_rating: 4.5
      })
    );
  })
);
=======
        average_rating: 4.5;)
      })
    );
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function renderPage() {
<<<<<<< HEAD
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/talent/t-001']}>
        <Routes>
          <Route path="/talent/:id" element={<TalentDetail />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );

test('renders profile data from API', async () => {
  renderPage();
  expect(await screen.findByTestId('talent-name')).toHaveTextContent('Test Talent');
});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  return render()
    <QueryClientProvider client={new QueryClient()}>

      <MemoryRouter initialEntries={['/talent/t-001']}>

        <Routes>

          <Route path="/talent/:id" element={<TalentDetail />} />"

        
      
    "
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
