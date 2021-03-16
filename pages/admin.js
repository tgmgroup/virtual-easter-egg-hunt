import { v4 as uuid } from 'uuid';
import { createLinks, startGame, endGame, resetGame } from '@/lib/db';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';

export default function admin() {
  const { data } = useSWR('api/links', fetcher);

  const buttonHandler = () => {
    let uids = [];
    for (let i = 0; i < 10; i++) {
      const uid = uuid();
      uids.push(uid);
    }
    createLinks(uids);
  };

  return (
    <div className='flex flex-col items-center space-x-2'>
      <div>
        <button className='btn' onClick={buttonHandler}>
          Create link
        </button>
        <button className='btn' onClick={startGame}>
          Start Game
        </button>
        <button className='btn' onClick={endGame}>
          End Game
        </button>
        <button className='btn' onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <table className='border-2 border-collapse border-black table-auto'>
        <thead>
          <tr>
            <td className='td'>Link</td>
            <td className='td'>User Id</td>
            <td className='td'>Name</td>
            <td className='td'>Taken</td>
          </tr>
        </thead>
        <tbody>
          {data?.links.map((link) => (
            <tr key={link.id}>
              <td className='td'>{link.id}</td>
              <td className='td'>{link.user_id}</td>
              <td className='td'>{link.name}</td>
              <td className='td'>{link.taken ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
