import Header from '@/components/Header';
import { useAuth } from '@/lib/auth';

export default function login() {
  const auth = useAuth();

  return (
    <>
      <Header />
      <div className='flex justify-center'>
        <div className='text-center'>
          <h2>login</h2>
          <h3>
            Current User: <span>{auth.user?.email}</span>
          </h3>
          {auth.user ? (
            <button onClick={(e) => auth.signout()}>Sign out</button>
          ) : (
            <button onClick={(e) => auth.siginWithGoogle()}>Sign In</button>
          )}
        </div>
      </div>
    </>
  );
}
