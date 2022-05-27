import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {IQuestion, QuestionList} from "../../types/quest.type";
import {addQuestion} from "../../services/firebase";

interface IState {
  items: QuestionList
}

const initialState: IState = {
  items: []
}

export type Args = {
  questRef: string,
  question: IQuestion
}

export const createQuestion = createAsyncThunk(
  'questionList/createQuestion',
  async (arg:Args, thunkAPI) => {
  console.log('args : ', arg);
  return await addQuestion(arg.question, arg.questRef)
})

export const questionListSlice = createSlice({
  name: 'questionList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createQuestion.fulfilled, (state, action) => {
      // return state
    })
  }
})