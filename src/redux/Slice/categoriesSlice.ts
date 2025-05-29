import { createSlice, createAsyncThunk, AsyncThunkAction } from '@reduxjs/toolkit'
import axios from 'axios'

const getCategories = "https://dummy-api-jtg6bessta-ey.a.run.app/getCategories"

export interface PlantCategory {
  id: number;
  name: string;
  title: string;
  rank: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: any;
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type Meta = {
  pagination: Pagination;
};

export type PlantCategoryResponse = {
  data: PlantCategory[];
  meta: Meta;
};

// Async thunk: API'den veri çeker
export const fetchCategories: any = createAsyncThunk<PlantCategoryResponse>('categories/fetchCategories', async () => {
  const response = await axios.get(getCategories)
  return response.data
})

// Slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    categoriesLoading: false,
    categoriesError: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesLoading = true
        state.categoriesError = null
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        state.categoriesLoading = false
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesLoading = false
        state.categoriesError = action.error.message
      })
  }
})

export default categoriesSlice.reducer
