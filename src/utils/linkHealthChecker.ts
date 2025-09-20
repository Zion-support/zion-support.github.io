import React from "react";

export interface LinkHealthResult {
  
url: string;
status: "healthy" | "unhealthy" | "error";
statusCode?: number;
responseTime?: number;
error?: string;,
lastChecked: Date;
}
}
}
followRedirects: config.followRedirects !== false;
};
redirect: this.config.followRedirects ? "follow" : "manual"
});
lastChecked: new Date()
};
lastChecked: new Date()
};
errors: number;
averageResponseTime: number;
} {