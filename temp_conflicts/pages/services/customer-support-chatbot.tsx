import type { NextPage } from 'next',
import Head from 'next/head',
import Link from 'next/link',
import UseTokensButton from '../../components/tokens/UseTokensButton',

const CustomerSupportChatbot: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CustomerSupportChatbot - Zion Tech Solutions</title>
        <meta name="description" content="CustomerSupportChatbot service" />
      </Head>
      
      <main className="space-y-4">
        <h1>CustomerSupportChatbot</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  )
},

export default CustomerSupportChatbot,