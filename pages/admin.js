import { v4 as uuid } from 'uuid';
import { createLinks, startGame, endGame, resetGame } from '@/lib/db';
import useSWR, { mutate } from 'swr';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';
import React, { useState } from 'react';

export default function admin() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['api/links', user.token] : null, fetcher);
  const { data: gameData } = useSWR(
    user ? ['api/game', user.token] : null,
    fetcher
  );

  const [linkTotal, setLinkTotal] = useState(10);
  const [copied, setCopied] = useState([]);

  const buttonHandler = async () => {
    let uids = [];
    for (let i = 0; i < linkTotal; i++) {
      const uid = uuid();
      uids.push(uid);
    }
    await createLinks(uids);
    mutate(['api/links', user.token]);
  };

  const buttonStartGameHandler = async () => {
    await startGame();
    mutate(['api/game', user.token]);
  };

  const buttonEndGameHandler = async () => {
    await endGame();
    mutate(['api/game', user.token]);
  };

  const clickToCopy = (e, idx) => {
    const newCopied = [...copied];
    newCopied[idx] = true;
    setCopied(newCopied);
    navigator.clipboard.writeText(e.target.innerHTML);
  };

  if (!user) {
    return (
      <div className='flex flex-col items-center justify-center h-screen space-y-5'>
        You are not login
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center space-y-5'>
      <div className='space-x-3'>
        <input
          type='text'
          value={linkTotal}
          className='w-20 px-2 border-2 border-gray-700 rounded-md'
          onChange={(e) => setLinkTotal(e.target.value)}
        />
        <button className='btn' onClick={buttonHandler}>
          Create link
        </button>
        <button className='btn' onClick={buttonStartGameHandler}>
          Start Game
        </button>
        <button className='btn' onClick={buttonEndGameHandler}>
          End Game
        </button>
        <button className='btn' onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div>Game is {gameData?.start ? 'Start' : 'End'}</div>
      <table className='border-2 border-collapse border-black table-auto'>
        <thead>
          <tr>
            <td className='td'>No</td>
            <td className='td'>Link</td>
            <td className='td'>User Id</td>
            <td className='td'>Name</td>
            <td className='td'>Taken</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((link, index) => (
            <tr key={link.id}>
              <td className='td'>{index + 1}</td>
              <td className='td'>
                <span
                  onClick={(e) => clickToCopy(e, index)}
                  className={`cursor-pointer hover:text-blue-700 hover:underline ${
                    copied[index] ? 'font-bold line-through' : ''
                  }`}
                >{`${window.location.origin}/egg/${link.id}`}</span>
                <span className='font-bold text-red-700'>{` ${
                  copied[index] ? 'copied' : ''
                }`}</span>
              </td>
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
