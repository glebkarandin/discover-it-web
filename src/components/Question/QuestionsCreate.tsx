import Button from "@mui/material/Button";
import {useState} from "react";
import QuestionForm from "./QuestionForm";

export type QuestionsCreateProps = {
  questRef: string
}

export default function QuestionsCreate(props: QuestionsCreateProps) {
  const [countQuestion, setCount] = useState(0);
  const handleCount = () => setCount((prevState) => prevState + 1)
  return (
    <div>
      <div>Question Create</div>
      <div><Button onClick={handleCount}>Add Question</Button></div>
      {
        [...Array(countQuestion)].map(() => <QuestionForm questRef={props.questRef} />)
      }
    </div>
  )
}