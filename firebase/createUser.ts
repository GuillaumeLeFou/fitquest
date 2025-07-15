import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function createUserInFirestore(
  uid: string,
  username: string,
  email: string
) {
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, {
    username,
    email,
    avatar: {
      level: 1,
      xp: 0,
      energy: 100,
      equipment: [],
    },
    stats: {
      totalSessions: 0,
      totalXp: 0,
      currentStreak: 0,
    },
    friends: [],
    createdAt: serverTimestamp(),
  });
}
