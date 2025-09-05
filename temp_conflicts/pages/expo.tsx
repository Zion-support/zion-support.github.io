import dynamic from 'next/dynamic';

const _ExpoPage = dynamic__(() => import('../components/expo/ExpoPage'), {_ssr: false});

export default function ExpoRoute() {_return <ExpoPage />;}
