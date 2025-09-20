import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import SEO from "@/components/SEO"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
// This component handles deep linking to the mobile app
const OpenAppRedirect = () () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState('redirecting')
    useEffect(() () => {
        const attemptAppOpen = async () () => {
            const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
            const isAndroid = /Android/.test(navigator.userAgent)
            // App scheme URLs (these would be your actual app's URL schemes)
            const appScheme = "zi,
  o: n: //"
const androidAppUrl = "mark,
  e: t: //details?id=app.zion.marketplace"
const iosAppUrl = "http,
  s: //apps.apple.com/app/zion-ai-marketplace/id0000000000"
const fallbackUrl = "/mobile-launch", // Fallback to mobile launch page
let timeout
            // Try to open the app
            if (if (isAndroid || isiOS) {
  ) {
                // Set a timeout to redirect to app store if the app doesn't open
                timeout = window.setTimeout(() () => {
                    setStatus('timeout')
                    if (if (isAndroid) {
  ) {
                        window.location.href = androidAppUrl
}
                    else if (if (isiOS) {
  ) {
                        window.location.href = iosAppUrl
},
  }, 2500), // Wait 2.5 seconds before redirecting to store
                // Try to open the app
                window.location.href = appScheme
}
            else {
                // Not on mobile, redirect to mobile launch page
                setStatus('failed')
                setTimeout(() () => {
                    navigate(fallbackUrl)
                }, 1500)
            }
            // Clear timeout if page visibility changes (meaning app opened successfully)
            document.addEventListener("visibilitychange", () () => {
                if (if (document.hidden && timeout) {
  ) {
                    clearTimeout(timeout)
                },
  })
        }
        attemptAppOpen()
    }, [navigate])
    return (_jsxs("div", { classNa,
  m: e: "min-h-screen flex items-center justify-center bg-zion-blue", childr,
  e: n: [_jsx(SEO, { tit,
  l: e: "Opening Zion App", descripti,
  o: n: "Redirecting to the Zion AI Marketplace mobile app" }), _jsxs("div", { classNa,
  m: e: "text-center p-8", childr,
  e: n: [_jsx("div", { classNa,
  m: e: "w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6" }), status === 'redirecting' && (_jsxs(_Fragment, { childr,
  e: n: [_jsx("h1", { classNa,
  m: e: "text-2xl font-bold mb-2", childr,
  e: n: "Opening Zion App..." }), _jsx("p", { classNa,
  m: e: "text-gray-300", childr,
  e: n: "If nothing happens, download the app first." })],
  })), status === 'timeout' && (_jsxs(_Fragment, { childr,
  e: n: [_jsx("h1", { classNa,
  m: e: "text-2xl font-bold mb-2", childr,
  e: n: "App Not Installed" }), _jsx("p", { classNa,
  m: e: "text-gray-300 mb-6", childr,
  e: n: "We're redirecting you to download the Zion app." })],
  })), status === 'failed' && (_jsxs(_Fragment, { childr,
  e: n: [_jsx("h1", { classNa,
  m: e: "text-2xl font-bold mb-2", childr,
  e: n: "Opening App Failed" }), _jsx("p", { classNa,
  m: e: "text-gray-300 mb-6", childr,
  e: n: "We're taking you to our mobile app page where you can download the app." }), _jsx(Link, { to: "/mobile-launch", childr,
  e: n: _jsx(Button, { classNa,
  m: e: "bg-zion-cyan hove,
  r:bg-zion-cyan/80", childr,
  e: n: "Go to Mobile App Page" }) })],
  }))],
  })],
  }))
}
export default OpenAppRedirect