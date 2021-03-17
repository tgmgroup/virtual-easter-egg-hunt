import Header from '@/components/Header';
import { useAuth } from '@/lib/auth';

export default function profile() {
  const auth = useAuth();

  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center full-screen'>
        <div>profile</div>
        <button onClick={(e) => auth.signout()} className='btn'>
          Sign out
        </button>
      </div>
    </>
  );
}
