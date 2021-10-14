import styles from '../styles/Home.module.css'
import app from '../firebase/clientApp';
import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";
import Voting from '../components/sections/Voting';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();
  console.log(session);

  // const db = getFirestore(app);

  // const addVoteToDocument = async (vote) => {
  //   if (vote == 'React') {
  //     await updateDoc(doc(db, "votes", "rahul"), {
  //       React: increment(1),
  //       // 'React Native': increment(0),
  //       Android: increment(0),
  //     });
  //   } else if (vote == "Android") {
  //     await updateDoc(doc(db, "votes", "rahul"), {
  //       React: increment(0),
  //       Android: increment(1),
  //       // 'React Native': increment(1),
  //     });
  //   }
  // };

  return (
    <div className={styles.container}>
      {/* <Voting addVoteToDocument={addVoteToDocument} /> */}
      <Voting  />
    </div>
  )
}
