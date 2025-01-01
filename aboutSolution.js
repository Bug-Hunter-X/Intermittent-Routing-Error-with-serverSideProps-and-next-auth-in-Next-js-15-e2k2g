// pages/aboutSolution.js
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

export default function About({ session, error }) {
  if (error) {
    return <div>Error loading page: {error.message}</div>;
  }
  return (
    <div>
      <h1>About Page</h1>
      {session && <p>Logged in as: {session.user.email}</p>}
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await unstable_getServerSession(context, authOptions);
    return {
      props: {
        session,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
}
