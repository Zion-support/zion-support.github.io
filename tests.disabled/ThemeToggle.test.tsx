
  render(
    <ThemeProvider>
      <ModeToggle />
    </ThemeProvider>

  ')  fireEvent.click(button!)
  await waitFor(: unknown { // Added waitFor for the assertion
    expect(document.documentElement.classList.contains('dark)).toBe(true)  })})


