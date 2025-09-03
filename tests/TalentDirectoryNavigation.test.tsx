
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )}

  const firstCard = await screen.findByText(
  'Alexandra Chen')
  fireEvent.click(firstCard)
  expect(await screen.findByTestId(
  'talent-details')).toHaveTextContent(
  'Alexandra Chen')})


