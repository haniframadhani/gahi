import { configureStore } from '@reduxjs/toolkit';
import contentSlice from './features/contentSlice';

const store = configureStore({
  reducer: {
    content: contentSlice,
  },
})


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;