describe('Error Handler', () => {
  let mockReq: Partial<NextApiRequest>;
  let mockRes: any;
  let mockJson: jest.Mock;
  let mockStatus: jest.Mock;

  beforeEach(() => {
    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnValue({ json: mockJson });

    mockReq = {
      url: '/test',
      method: 'GET',
      headers: {},
    };

    mockRes = {
      status: mockStatus,
      json: mockJson,
    };
  });

  describe('AppError', () => {
    it('creates error with status code', () => {
      const error = new AppError('Test error', 400);

      expect(error.message).toBe('Test error');
      expect(error.statusCode).toBe(400);
      expect(error.isOperational).toBe(true);
    });

    it('defaults to 500 status code', () => {
      const error = new AppError('Test error');

      expect(error.statusCode).toBe(500);
    });
  });

  describe('errorHandler', () => {
    it('handles AppError correctly', () => {
      const error = new AppError('Test error', 400);

      });
    });
  });

  describe('asyncHandler', () => {
    it('calls next with error when async function throws', async () => {
      const mockNext = jest.fn();
      const asyncFn = jest.fn().mockRejectedValue(new Error('Async error'));

    });

    it('does not call next when async function succeeds', async () => {
      const mockNext = jest.fn();
      const asyncFn = jest.fn().mockResolvedValue('success');