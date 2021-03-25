import { getGame } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';

export default async (req, res) => {
  try {
    const user = await auth.verifyIdToken(req.headers.token);
    const game = await getGame();

    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error });
  }
};
