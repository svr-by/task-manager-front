import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import user from './slices/userSlice';

const rootReducer = combineReducers({
  user,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
