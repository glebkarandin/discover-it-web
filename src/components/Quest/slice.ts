import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {addQuest} from "../../services/firebase";
import {IQuestBase} from "../../types/quest.type";
import {RootState} from "../../redux/store";

interface IState {
  questReference: string | null
}

const initialState: IState = {
  questReference: null
}

export const createQuest = createAsyncThunk('quest/create', async (quest: IQuestBase, thankApi) => {
  return await addQuest(quest);
})

export const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(createQuest.fulfilled, (state, action) => {
      state.questReference = action.payload
    })
  }
})

export const selectQuestRef = (state: RootState) => state.quest.questReference

export default questSlice.reducer