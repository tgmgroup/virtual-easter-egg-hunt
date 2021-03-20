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
              <td className='px-6'>Name</td>
              <td className='px-6'>Eggs</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((rank, index) => (
              <tr key={rank.user_id}>
                <td className='px-6 py-1 text-center'>{index + 1}</td>
                <td className='px-6 py-1 text-center'>
                  {rank.name} <img src={rank.photoUrl} alt='' />
                </td>
                <td className='px-6 py-1 text-center'>{rank.eggs} Eggs</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
