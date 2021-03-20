import { getAllTakenLinks } from '@/lib/db-admin';

export default async (_, res) => {
  try {
    const { links } = await getAllTakenLinks();
    const leaderboard = {};

    links.forEach((link) => {
      if (!leaderboard[link.user_id]) {
        leaderboard[link.user_id] = {
          name: link.name,
          eggs: 1,
          photoUrl: link.photoUrl
        };
      } else {
        leaderboard[link.user_id].eggs++;
      }
    });

    const rank = [];
    for (const key in leaderboard) {
      leaderboard[key].user_id = key;
      rank.push(leaderboard[key]);
    }

    rank.sort((a, b) => b - a);

    res.status(200).json(rank);
  } catch (error) {
    res.status(500).json({ error });
  }
};
