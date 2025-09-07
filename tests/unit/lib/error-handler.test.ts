import { AppError, errorHandler, asyncHandler } from '../../../lib/error-handler';
import type { NextApiRequest, NextApiResponse } from 'next';
describe('Error Handler', () => {
  let mockReq: Partial<NextApiRequest>;
