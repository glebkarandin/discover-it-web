import {useEffect, useState} from "react";
import {getQuests} from "../../services/firebase";
import {QuestList as QuestListType} from "../../types/quest.type";
import QuestView from "./QuestView";

export default function QuestList() {
  const [questsList, setQuests] = useState<QuestListType | null>(null);
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