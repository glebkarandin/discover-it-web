import TextField from "@mui/material/TextField";
import {useState} from "react";
import {IQuestion} from "../../types/quest.type";
import {QuestionsCreateProps} from "./QuestionsCreate";
import {Args, createQuestion} from "../QuestionList/slice";
import {useAppDispatch} from "../../redux/hooks";
import {Button} from "@mui/material";

export default function QuestionForm(props: QuestionsCreateProps) {
  const {questRef} = props;
  const initialState: IQuestion = {
    questionText: '',
    answerText: ''
  }
  const dispatch = useAppDispatch();
  const [question, setQuestion] = useState(initialState)
  const handleChange = (event: any) => {
    const {currentTarget: {value, id}} = event
    setQuestion((prevState) => {
      return {
        ...prevState,
        [id]: value
      }
    })
  }
  const handlerSubmit = () => {
    const args: Args = {
      questRef,
      question
    }
    dispatch(createQuestion(args))
  }
  return (
    <div>
      <div>
        <div>Question</div>
        <div><TextField
          id='questionText'
          value={question.questionText}
          onChange={handleChange}
        /></div>
      </div>
      <div>
        <div>Answer</div>
        <div><TextField
          id='answerText'
          value={question.answerText}
          onChange={handleChange}
        /></div>
      </div>
      <div><Button onClick={handlerSubmit}>Добавить</Button></div>
    </div>
  )
}