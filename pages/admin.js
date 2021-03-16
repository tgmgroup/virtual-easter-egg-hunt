import { createLinks, startGame, endGame, resetGame } from '@/lib/db';
import { v4 as uuid } from 'uuid';

export default function admin() {
  const buttonHandler = () => {
    let uids = [];
    for (let i = 0; i < 10; i++) {
      const uid = uuid();
      uids.push(uid);
    }
    createLinks(uids);
  };

  return (
    <div className='flex justify-center space-x-2'>
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
      <ul></ul>
    </div>
  );
}
