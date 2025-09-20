import React from "react";

interface ResourceError {
  
url: string;
type: "script" | "stylesheet" | "image" | "font" | "other";
error: string;
timestamp: number;
}
}
}
timestamp: Date.now()
};
recent: this.errors.filter(e => Date.now() - e.timestamp < 60000).length // Last minute;
};