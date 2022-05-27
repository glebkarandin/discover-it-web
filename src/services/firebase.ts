import {initializeApp} from 'firebase/app';
import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore/lite';
import firebaseConfig from './firebaseConfig';
import {IQuest, IQuestBase, IQuestion, QuestList} from "../types/quest.type";

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
  const documentReference = await addDoc(questCol, quest);
  return documentReference.path;
}

export async function addQuestion(question: IQuestion, questRef: string) {
  const questionsCol = collection(db, `${questRef}/questions`);
  console.log('question col : ', questionsCol)
  const documentReference = await addDoc(questionsCol, question)
  console.log('document ref : ', documentReference.path)
  return documentReference.path;
}