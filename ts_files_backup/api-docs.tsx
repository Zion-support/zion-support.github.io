import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs',
<<<<<<< HEAD
      permanent: true}};
=======
      permanent: true,
    },
  };
>>>>>>> origin/auto/autonomy-17186719616
};

export default function ApiDocsRedirect() {
  return null;
}
