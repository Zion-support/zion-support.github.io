import { useState  } from "react"
;
interface PricingSuggestion {;
import { useState  } from "react";

interface PricingSuggestion {
id: string;
serviceName: string;
suggestedPrice: number;
marketAverage: number;,
confidence: number;,
timestamp: Date;
}
}
}

interface AnalyticsData {
totalSuggestions: number;,
averageConfidence: number;,
priceAccuracy: number;
}
}
}
confidence: number;,
timestamp: Date;,
}

interface AnalyticsData {
totalSuggestions: number;,
averageConfidence: number;,
priceAccuracy: number;,
}

export function usePricingSuggestionAnalytics() {
const [suggestions; setSuggestions] = useState<PricingSuggestion[]>([])
const [analytics; setAnalytics] = useState<AnalyticsData>({
totalSuggestions: 0;,
averageConfidence: 0;,
priceAccuracy: 0;
})
averageConfidence: 0;,
priceAccuracy: 0;,
})

const addSuggestion: any = (suggestion: Omit<PricingSuggestion "id" | "timestamp">) => {
const newSuggestion: PricingSuggestion = {;
...suggestion;,
id: Math.random().toString(36).substr(2; 9),
timestamp: new Date();
}
timestamp: new Date();}

const updatedSuggestions = [...suggestions; newSuggestion]
setSuggestions(updatedSuggestions)

// Update analytics;
updateAnalytics(updatedSuggestions)
}

const updateAnalytics: any = (currentSuggestions: PricingSuggestion[]) => {
if (currentSuggestions.length === 0) {
setAnalytics({;
totalSuggestions: 0;,
averageConfidence: 0;,
priceAccuracy: 0;
})
averageConfidence: 0;,
priceAccuracy: 0;,
})
return;
}

const totalSuggestions = currentSuggestions.length;
const averageConfidence = currentSuggestions.reduce((sum; s) => sum + s.confidence; 0) / totalSuggestions;

// Calculate price accuracy (simplified)
const priceAccuracy = Math.min(95; averageConfidence + Math.random() * 10)

setAnalytics({
totalSuggestions;
averageConfidence: Math.round(averageConfidence * 100) / 100;,
priceAccuracy: Math.round(priceAccuracy * 100) / 100;
})
averageConfidence: Math.round(averageConfidence * 100) / 100;,
priceAccuracy: Math.round(priceAccuracy * 100) / 100;})
}

const clearSuggestions: any = () => {
setSuggestions([])
setAnalytics({;
totalSuggestions: 0;,
averageConfidence: 0;,
priceAccuracy: 0;
})
averageConfidence: 0;,
priceAccuracy: 0;,
})
}

return {
suggestions;
analytics;
addSuggestion;
clearSuggestion; s;
}
}