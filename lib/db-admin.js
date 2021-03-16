import db from './firebase-admin';

export async function getAllLinks() {
  try {
    const snapshot = await db.collection('links').get();

    const links = [];

    snapshot.forEach((doc) => {
      links.push({ ...doc.data() });
    });

    return { links };
  } catch (error) {
    return { error };
  }
}
