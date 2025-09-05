  it('should render the AI assistant interface', () => {
    renderWithProviders(<AIChatAssistant />);
    expect(screen.getByText('AI Assistant')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
  it('should send a message when user types and clicks send', async () => {
    renderWithProviders(<AIChatAssistant />);
    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByRole('button');
    fireEvent.click(sendButton);
    await waitFor(() => {
  it('should send a message when user presses Enter', async () => {
    renderWithProviders(<AIChatAssistant />);
    const input = screen.getByPlaceholderText('Type your message...');
  it('should not send empty messages', () => {
    renderWithProviders(<AIChatAssistant />);
    const sendButton = screen.getByRole('button');
  it('should display AI response after sending message', async () => {
    renderWithProviders(<AIChatAssistant />);
    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByRole('button');
    fireEvent.click(sendButton);
    // Wait for AI response
    await waitFor(() => {
>>>>>>> main
