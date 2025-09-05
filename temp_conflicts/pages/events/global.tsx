import dynamic from 'next/dynamic';

const _ExpoPage = dynamic__(() => import('../../components/expo/ExpoPage'), {_ssr: false});

export default function GlobalEventRoute() {_return <ExpoPage />;}
