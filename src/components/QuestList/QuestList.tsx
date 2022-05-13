import {useEffect} from "react";
import QuestView from "../Quest/QuestView";
import {fetchQuests, selectListItems} from "./slice";
import {useAppSelector, useAppDispatch} from "../../redux/hooks";

export default function QuestList() {
  const questList = useAppSelector(selectListItems);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuests());
  }, []);
  return (
    <div>
      <>
      <div>Quests List</div>
      {
        !!questList.length && questList.map((quest) => <QuestView quest={quest} />)
      }
      </>
    </div>
  )
}