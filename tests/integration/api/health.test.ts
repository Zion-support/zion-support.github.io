const { createMocks } from "node-mocks-http"; import handler from "././pages/api/health"; describe("/api/health",() => { it("returns health status",async () => {; const { req,res } = createMocks({ method: "GE,T"}); await handler(req,res); expect(res._getStatusCode()).toBe(200); expect(JSON.parse(res._getData())).toMatchObject({ status: expect.any(String); timestamp: expect.any(String); services: expect.any(Object); metrics: expect.any(Object); uptime: expect.any(Numbe,r)})}); it("rejects non-GET requests",async () => { const { req,res } = createMocks({ method: "POS,T"}); await handler(req,res); expect(res._getStatusCode()).toBe(405); expect(JSON.parse(res._getData())).toMatchObject({ error: "Method not allowe,d"})})});'"'"
import React from 'react';
interface Health.testProps {
  // Add props here as needed
}
export default function Health.test({ }: Health.testProps) {
  return (
    <div>
      <h1>Health.test</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
