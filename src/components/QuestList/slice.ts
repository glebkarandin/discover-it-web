import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {QuestList} from "../../types/quest.type";
import {RootState} from "../../redux/store";
import {getQuests} from "../../services/firebase";

interface IState {
  items: QuestList
}

const initialState: IState = {
  items: []
}

export const fetchQuests = createAsyncThunk('questList/fetchQuests', getQuests)

export const questListSlice = createSlice({
  name: 'questList',
  initialState,
  reducers: {
    getList: state => {}
  },
  extraReducers: builder => {
    builder.addCase(fetchQuests.fulfilled,(state, action) => {
      state.items = action.payload
    })
  }
})

export const {getList} = questListSlice.actions;

export const selectListItems = (state: RootState) => state.questList.items;

export default questListSlice.reducer
