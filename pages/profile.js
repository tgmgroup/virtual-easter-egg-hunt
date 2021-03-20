import Header from '@/components/Header';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';

export default function profile() {
  const { user, signout } = useAuth();
  const { data } = useSWR(user ? ['api/eggs', user.token] : null, fetcher);
  console.log(data);
  return (
    <>
      <Header />
      <div className='flex flex-col items-center pt-5 space-y-2 full-screen'>
        <h3>Hi, {user?.name}</h3>
        <h3>You got : {data?.length} eggs</h3>
        <button onClick={signout} className='btn'>
          Sign out
        </button>
      </div>
    </>
  );
}
