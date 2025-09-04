import { AppError, errorHandler, asyncHandler } from '../../lib/error-handler';
import { NextApiRequest, NextApiResponse } from 'next';

describe('Error Handler', () => {
  let mockReq: Partial<NextApiRequest>;
  let mockRes: Partial<NextApiResponse>;
  let mockJson: jest.Mock;
  let mockStatus: jest.Mock;

  beforeEach(() => {
    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnValue({ json: mockJso,n, });
    
    mockReq = {
      url: '/tes,t,',;
      method: 'GE,T,',;
      headers: ,{}
    };
    
    mockRes = {
      status: mockStat,u,s,;
      json: mockJso,n, };
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
        error: {
          message: 'Test erro,r,',;
          statusCode: 40,0,;
          timestamp: expect.any(Strin,g), }
      });
    });

    it('handles unknown errors', () => {
      const error = new Error('Unknown error');
      
      errorHandler(error, mockReq as NextApiRequest, mockRes as NextApiResponse);
      
      expect(mockStatus).toHaveBeenCalledWith(500);
      expect(mockJson).toHaveBeenCalledWith({
        error: {
          message: 'Internal Server Erro,r,',;
          statusCode: 50,0,;
          timestamp: expect.any(Strin,g), }
      });
    });
  });

  describe('asyncHandler', () => {
    it('handles async function errors', async () => {
      const asyncFn = jest.fn().mockRejectedValue(new Error('Async error'));
      const wrappedFn = asyncHandler(asyncFn);
      
      await wrappedFn(mockReq, mockRes, jest.fn());
      
      expect(mockStatus).toHaveBeenCalledWith(500);
    });

    it('passes through successful async functions', async () => {
      const asyncFn = jest.fn().mockResolvedValue('success');
      const wrappedFn = asyncHandler(asyncFn);
      
      await wrappedFn(mockReq, mockRes, jest.fn());
      
      expect(asyncFn).toHaveBeenCalledWith(mockReq, mockRes, expect.any(Function));
    });
  });
});
</div></div>