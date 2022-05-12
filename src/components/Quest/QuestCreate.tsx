import {Button, TextField} from "@mui/material";
import React, {useState} from "react";
import {IQuestBase} from "../../types/quest.type";
import {addQuest} from "../../services/firebase";

export default function QuestCreate() {
  const [quest, setQuest] = useState<IQuestBase>({
    title: '',
    description: ''
  });
  const handleChange = (param: any): void => {
    const {currentTarget: {value, id}} = param;
    setQuest(prevState => {
      const nextState: IQuestBase = {
        ...prevState,
        [id]: value
      }
      return nextState;
    })
  };
  const handleSubmit = () => {
    addQuest(quest);
  };
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
