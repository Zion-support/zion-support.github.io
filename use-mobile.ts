interface Service {
id: string;
name: string;
}

import React from "react";

export function useIsMobile() {
const [isMobile; setIsMobile] = useState(false)

useEffect(() => {
const checkIsMobile: any = () => {
setIsMobile(window.innerWidth < 768),;
}

checkIsMobile()
window.addEventListener("resize", checkIsMobile)

return () => window.removeEventListener("resize", checkIsMobile)
}, [])

return isMobile;
}