import Header from '@/components/Header';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';

export default function leaderboard() {
  const { user } = useAuth();
  const { data } = useSWR(
    user ? ['api/leaderboard', user.token] : null,
    fetcher
  );
  console.log(data);
  return (
    <>
      <Header />
      <div className='flex flex-col items-center px-20 pt-10 space-y-3'>
        <h2>Leaderboard</h2>

        <table>
          <thead>
            <tr>
              <td className='px-6'>Rank</td>
              <td className='px-6'></td>
              <td className='px-6'>Name</td>
              <td className='px-6'>Egg Total</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((rank, index) => (
              <tr key={rank.user_id}>
                <td className='px-6 py-1 text-center'>{index + 1}</td>
                <td className='px-6 py-1 text-center'>
                  <img
                    src={rank.photoUrl}
                    alt=''
                    className='w-16 rounded-full'
                  />
                </td>
                <td className='px-6 py-1 space-x-2 text-center'>
                  <span>{rank.name}</span>
                </td>
                <td className='px-6 py-1 text-center'>
                  {rank.eggs} {rank.eggs > 1 ? ' eggs' : ' egg'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
