import {initializeApp} from 'firebase/app';
import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore/lite';
import firebaseConfig from './firebaseConfig';
import {IQuest, IQuestBase, QuestList} from "../types/quest.type";

const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp);

export async function getQuests() {
  const questCol = collection(db, 'quests');
  const questsSnapshot = await getDocs(questCol);
  const questList: QuestList = questsSnapshot.docs.map((doc) => {
    const el = doc.data();
    const qRef = collection(doc.ref, 'questions')
    const quest: IQuest = {
      id: doc.id,
      title: el.title,
      description: el.description,
      questionsRef: qRef.path
    }
    return quest;
  });

  return questList;
}

export async function addQuest(quest: IQuestBase) {
  const questCol = collection(db, 'quests');
  return await addDoc(questCol, quest);
}