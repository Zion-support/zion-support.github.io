<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/tests/unit/lib/error-handler.test.ts

=======
import { AppError, errorHandler, asyncHandler } from '../../lib/error-handler';
import { NextApiRequest, NextApiResponse } from 'next';
=======
import { AppError, errorHandler, asyncHandler } from '../../../lib/error-handler';
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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
<<<<<<< HEAD

      errorHandler(error, mockReq as NextApiRequest, mockRes as unknown as NextApiResponse);

      expect(mockStatus).toHaveBeenCalledWith(400);
      expect(mockJson).toHaveBeenCalledWith({
        error: {
          message: 'Test error',
          statusCode: 400,
          timestamp: expect.any(String),
        },
      });
    });

    it('handles unknown errors', () => {
      const error = new Error('Unknown error');

      errorHandler(error, mockReq as NextApiRequest, mockRes as unknown as NextApiResponse);

      expect(mockStatus).toHaveBeenCalledWith(500);
      expect(mockJson).toHaveBeenCalledWith({
        error: {
          message: 'Internal Server Error',
          statusCode: 500,
          timestamp: expect.any(String),
        },
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      });
    });
  });

  describe('asyncHandler', () => {
    it('calls next with error when async function throws', async () => {
      const mockNext = jest.fn();
      const asyncFn = jest.fn().mockRejectedValue(new Error('Async error'));
<<<<<<< HEAD
      const wrappedFn = asyncHandler(asyncFn);

      await wrappedFn(mockReq as any, mockRes as any, jest.fn());

      expect(mockStatus).toHaveBeenCalledWith(500);
=======
      
      await asyncHandler(asyncFn)(mockReq as NextApiRequest, mockRes as NextApiResponse, mockNext);
      
      expect(mockNext).toHaveBeenCalledWith(expect.any(Error));
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    });

    it('does not call next when async function succeeds', async () => {
      const mockNext = jest.fn();
      const asyncFn = jest.fn().mockResolvedValue('success');
<<<<<<< HEAD
      const wrappedFn = asyncHandler(asyncFn);

      await wrappedFn(mockReq as any, mockRes as any, jest.fn());

      expect(asyncFn).toHaveBeenCalledWith(mockReq, mockRes, expect.any(Function));
    });
  });
<<<<<<< HEAD
});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:tests/unit/lib/error-handler.test.ts
=======
});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      
      await asyncHandler(asyncFn)(mockReq as NextApiRequest, mockRes as NextApiResponse, mockNext);
      
      expect(mockNext).not.toHaveBeenCalled();
    });
  });
});
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
describe('Error Handler', () => {
  let mockReq: Partial<NextApiRequest>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
