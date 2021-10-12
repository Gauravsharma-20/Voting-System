import styles from '../styles/Home.module.css'
import app from '../firebase/clientApp';
import { getFirestore, doc, collection, getDocs, setDoc, updateDoc, increment } from "firebase/firestore";
import Voting from '../components/sections/Voting';

export default function Home() {
  const db = getFirestore(app);

  const addVoteToDocument = async (vote) => {
    if (vote == 'React') {
      await updateDoc(doc(db, "votes", "rahul"), {
        React: increment(1),
        'React Native': increment(0),
      });
    } else if (vote == "React Native") {
      await updateDoc(doc(db, "votes", "rahul"), {
        React: increment(0),
        'React Native': increment(1),
      });
    }
  };

  return (
    <div className={styles.container}>
      <Voting addVoteToDocument={addVoteToDocument} />
    </div>
  )
}
