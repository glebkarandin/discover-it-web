import {Button, TextField} from "@mui/material";
import React, {useState} from "react";
import {IQuestBase} from "../../types/quest.type";
import {createQuest, selectQuestRef} from "./slice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import QuestionsCreate from "../Question/QuestionsCreate";

export default function QuestCreate() {
  const dispatch = useAppDispatch();
  const questReference = useAppSelector(selectQuestRef);

  const [quest, setQuest] = useState<IQuestBase>({
    title: '',
    description: '',
    questionsRef: ''
  });
  const handleChange = (event: any): void => {
    const {currentTarget: {value, id}} = event;
    setQuest(prevState => {
      const nextState: IQuestBase = {
        ...prevState,
        [id]: value
      }
      return nextState;
    })
  };
  const handleSubmit = () => {
    dispatch(createQuest(quest))
  };
  if (questReference) {
    return <QuestionsCreate questRef={questReference} />
  }
  return (
    <div>
      <div>Quest Form</div>
      <div>
        <TextField
          id="title"
          label="title"
          onChange={handleChange}
        />
        <TextField
          id="description"
          label="description"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Создать</Button>
      </div>
    </div>
  )
}
