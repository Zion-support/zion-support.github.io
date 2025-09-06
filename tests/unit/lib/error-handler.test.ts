import { AppError, errorHandler, asyncHandler } from '../../lib/error-handler';
import { NextApiRequest, NextApiResponse } from 'next';

describe('Error Handler', () => {
  let mockReq: Partial<NextApiRequest>;
  let mockRes: Partial<NextApiResponse>;
  let mockJson: jest.Mock;
  let mockStatus: jest.Mock;

  beforeEach(() => {
    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnValue({ json: mockJson });
    mockReq = { url: '/test', method: 'GET', headers: {} };
    mockRes = { status: mockStatus, json: mockJson };
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
      errorHandler(error, mockReq as NextApiRequest, mockRes as NextApiResponse);
      
      expect(mockStatus).toHaveBeenCalledWith(400);
      expect(mockJson).toHaveBeenCalledWith({
        success: false,
        error: 'Test error'
      });
    });

    it('handles generic error correctly', () => {
      const error = new Error('Generic error');
      errorHandler(error, mockReq as NextApiRequest, mockRes as NextApiResponse);
      
      expect(mockStatus).toHaveBeenCalledWith(500);
      expect(mockJson).toHaveBeenCalledWith({
        success: false,
        error: 'Something went wrong'
      });
    });

    it('handles validation error correctly', () => {
      const error = new Error('Validation failed');
      error.name = 'ValidationError';
      errorHandler(error, mockReq as NextApiRequest, mockRes as NextApiResponse);
      
      expect(mockStatus).toHaveBeenCalledWith(400);
      expect(mockJson).toHaveBeenCalledWith({
        success: false,
        error: 'Validation failed'
      });
    });
  });

  describe('asyncHandler', () => {
    it('calls next with error when async function throws', async () => {
      const mockNext = jest.fn();
      const asyncFn = jest.fn().mockRejectedValue(new Error('Async error'));
      
      await asyncHandler(asyncFn)(mockReq as NextApiRequest, mockRes as NextApiResponse, mockNext);
      
      expect(mockNext).toHaveBeenCalledWith(expect.any(Error));
    });

    it('does not call next when async function succeeds', async () => {
      const mockNext = jest.fn();
      const asyncFn = jest.fn().mockResolvedValue('success');
      
      await asyncHandler(asyncFn)(mockReq as NextApiRequest, mockRes as NextApiResponse, mockNext);
      
      expect(mockNext).not.toHaveBeenCalled();
    });
  });
});