import {IQuest} from "../../types/quest.type";

export default function QuestView({quest}: {quest: IQuest}) {
  return (
    <div>
      <div>{quest.id}</div>
      <div>{quest.title}</div>
      <div>{quest.description}</div>
      <div>{quest.questionsRef}</div>
    </div>
  )
}