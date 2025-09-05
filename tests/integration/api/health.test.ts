<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
}
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
const { createMocks } from "node-mocks-http"; import handler from "././pages/api/health"; describe("/api/health",() => { it("returns health status",async () => {; const { req,res } = createMocks({ method: "GE,T"}); await handler(req,res); expect(res._getStatusCode()).toBe(200); expect(JSON.parse(res._getData())).toMatchObject({ status: expect.any(String); timestamp: expect.any(String); services: expect.any(Object); metrics: expect.any(Object); uptime: expect.any(Numbe,r)})}); it("rejects non-GET requests",async () => { const { req,res } = createMocks({ method: "POS,T"}); await handler(req,res); expect(res._getStatusCode()).toBe(405); expect(JSON.parse(res._getData())).toMatchObject({ error: "Method not allowe,d"})})});'"'"
>>>>>>> pr-11913
