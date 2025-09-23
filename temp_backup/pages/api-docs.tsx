<<<<<<< HEAD
=======
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs',
      permanent: true,
    },
  };
};

export default function ApiDocsRedirect() {
  return null;
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
