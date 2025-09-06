import React from \'react\'; import type { AppProps } from \'next/app\'; import Layout from \'../components/Layout\'; import \'../styles/globals.css\'; export default function App({ Component,pageProps }: AppProps) { return ( <Layout> <Component {...pageProps} /> </Layout> )}
const React from "react"; import type { AppProps } from "next/app"; import Layout from "./components/Layout"; import "./styles/globals.css"; export default function App({ Component,pageProps }: AppProps) { return ( <Layout> <Component {.pageProps} /> </Layout> )}''"
<<<<<<< HEAD
import _React from 'react'; import type { AppProps } from 'next/app'; import Layout from '../components/Layout'; import '../styles/globals.css'; export default function App({ Component,pageProps }: AppProps) { return ( <Layout> <Component {...pageProps} /> </Layout> )}
=======
import _React from 'react'; import type { AppProps } from 'next/app'; import Layout from '../components/Layout'; import '../styles/globals.css'; export default function App({ Component,pageProps }: AppProps) { return ( <Layout> <Component {...pageProps} /> </Layout> )}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
