import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/health';

describe('/api/health', () => {
  it('returns health status', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toMatchObject({
      status: expect.any(String),
      timestamp: expect.any(String),
      services: expect.any(Object),
      metrics: expect.any(Object),
      uptime: expect.any(Number)
    });
  });

  it('rejects non-GET requests', async () => {
    const { req, res } = createMocks({
      method: 'POST'
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData())).toMatchObject({
      error: 'Method not allowed'
    });
  });
});