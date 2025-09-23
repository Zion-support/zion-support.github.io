import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function KubernetesRbacAuditorPage() {
  return (
    <Layout>
      <Head>
        <title>Kubernetes RBAC Auditor | Zion Tech Group</title>
        <meta name="description" content="Detect over-permissive Kubernetes roles and unused bindings with least-privilege recommendations."  />
        <link rel="canonical" href="https://ziontechgroup.com/kubernetes-rbac-auditor"  />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-40o0 to-indigo-50o0 bg-clip-text text-transparent">Kubernetes RBAC Auditor</h1>
