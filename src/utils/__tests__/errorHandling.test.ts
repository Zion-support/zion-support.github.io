import { AppError, handleError } from '../errorHandling';

describe('Error Handling', () => {
  describe('AppError', () => {
    it('should create an error with message and context', () => {
      const error = new AppError('Test error', 'test-context');
      expect(error.message).toBe('Test error');
      expect(error.context).toBe('test-context');
      expect(error.name).toBe('AppError');
      expect(error.timestamp).toBeInstanceOf(Date);
    });
  });

  describe('handleError', () => {
    it('should return error info with timestamp', () => {
      const error = new Error('Test error');
      const errorInfo = handleError(error, 'test-context');
      
      expect(errorInfo.message).toBe('Test error');
      expect(errorInfo.context).toBe('test-context');
      expect(errorInfo.timestamp).toBeInstanceOf(Date);
    });
  });
});