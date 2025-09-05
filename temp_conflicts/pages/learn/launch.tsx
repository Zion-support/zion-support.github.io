
export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/academy/founder-course', _permanent: false}};
};

export default function LaunchRedirect() {_return null;}
