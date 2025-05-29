import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getQuestions = "https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions"

export type Question = {
  id: number;
  image_uri: string;
  order: number;
  subtitle: string;
  title: string;
  uri: string;
}

type QuestionsState = {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

const initialState: QuestionsState = {
  questions: [],
  loading: false,
  error: null
}

// Async thunk: API'den veri çeker
export const fetchQuestions: any = createAsyncThunk<Question[]>('questions/fetchQuestions', async () => {
  const response = await axios.get(getQuestions)
  const questions: Question[] = response.data
  return questions.sort((a, b) => a.order - b.order)
})

// Slice
const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload
        state.loading = false
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default questionsSlice.reducer
