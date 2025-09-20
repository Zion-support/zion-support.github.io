import React from "react";

interface PerformanceMetric {name: string; startTime: number;
}
endTime?: number;}
} catch (error) {console.warn("LCP observer failed:", error)}
} catch (error) {console.warn("FID observer failed:", error)}
} catch (error) {console.warn("CLS observer failed: ", error)}
}
}

startTiming(name: string): void {const metric: PerformanceMetric = {
name;
return result} catch (error) {this.endTiming(name);
return result} catch (error) {this.endTiming(name);
cleanup(): void {this.observers.forEach(observer => observer.disconnect());