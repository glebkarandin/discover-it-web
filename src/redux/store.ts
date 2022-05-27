import {configureStore } from '@reduxjs/toolkit';

import questListReducer from "../components/QuestList/slice";
import questReducer from "../components/Quest/slice"

const store = configureStore ({
  reducer: {
    questList: questListReducer,
    quest: questReducer,
  }
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch