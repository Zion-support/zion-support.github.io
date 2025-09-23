import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs',
<<<<<<< HEAD
      permanent: true,
    },
  };
=======
      permanent: true}};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
};

export default function ApiDocsRedirect() {
  return null;
}
