import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './Slice/categoriesSlice'
import questionsReducer from './Slice/questionsSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
})