import {useEffect, useState} from "react";
import {getQuests} from "../services/firebase";
import {QuestList} from "../types/quest.type";
import QuestView from "./Quest/QuestView";

export default function QuestsList() {
  const [questsList, setQuests] = useState<QuestList  | null>(null);
  useEffect(() => {
    getQuests(setQuests);
  }, []);
  // getQuests(setQuests);
  // getQuests().then((value => {
  //   console.log('value : ', value)
  // }))
  return (
    <div>
      <>
      <div>Quests List</div>
      {
        questsList && questsList.map((quest) => <QuestView quest={quest} />)
      }
      </>
    </div>
  )
}