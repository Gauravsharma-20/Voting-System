import styles from '../styles/Home.module.css'
import app from '../firebase/clientApp';
import { getFirestore, doc, collection, getDocs, setDoc, updateDoc, increment } from "firebase/firestore";
import Voting from '../components/sections/Voting';

export default function Home() {
  const db = getFirestore(app);

  async function readDocument() {
    const query = collection(db, "votes");
    const querySnapshot = await getDocs(query);
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
    querySnapshot.docs.map((doc) => console.log(doc.data()));
      // console.log(querySnapshot.data());
  };

  // readDocument();

  const addVoteToDocument = async (vote) => {
    // console.log(vote);
    // console.log(typeof(vote));

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

    // await setDoc(doc(db, "votes", "rahul"), {
    //   vote,
    // });
  };

  return (
    // <div>
    <div className={styles.container}>
      <Voting addVoteToDocument={addVoteToDocument} />
      {/* <Button addVoteToDocument={addVoteToDocument} /> */}
    </div>
  )
}
