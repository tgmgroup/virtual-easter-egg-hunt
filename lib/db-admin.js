import { db } from './firebase-admin';

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

export async function getLinkById(id) {
  try {
    const doc = await db.collection('links').doc(id).get();

    return doc.data();
  } catch (error) {
    return { error };
  }
}