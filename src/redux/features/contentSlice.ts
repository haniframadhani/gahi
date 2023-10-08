import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Content = {
  date: string,
  title: string,
  copyright: string,
  hdurl: string,
  url: string,
  thumbnail_url: string,
  media_type: string,
  explanation: string
}

type InitialState = {
  loading: boolean,
  error: string,
  content: Partial<Content>
}

const initialState: InitialState & { content: Partial<Content> } = {
  loading: false,
  error: '',
  content: {}
}

export const fetchContent = createAsyncThunk('content/fetchContent', (date) => {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&thumbs=true&date=${date}`)
    .then(Response => Response.data);
})

export const translateContentExplanation = createAsyncThunk('content/translateExplanation', () => {
  return axios.get(`https://api.mymemory.translated.net/get?q=${initialState.content.explanation}&langpair=en|id&de=${process.env.MYMEMORY_EMAIL}`)
    .then(Response => Response.data);
})

export const translateContentTitle = createAsyncThunk('content/translateTitle', () => {
  return axios.get(`https://api.mymemory.translated.net/get?q=${initialState.content.title}&langpair=en|id&de=${process.env.MYMEMORY_EMAIL}`)
    .then(Response => Response.data);
})

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchContent.pending, (state) => { state.loading = true });
    builder.addCase(fetchContent.fulfilled, (state, action: PayloadAction<Content>) => {
      state.loading = false;
      state.content = action.payload;
      state.error = '';
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'something went wrong';
    })
    // builder.addCase(translateContentTitle.pending, (state) => { state.loading = true });
    // builder.addCase(translateContentTitle.fulfilled, (state, action: PayloadAction<Content>) => {
    //   state.loading = false;
    //   state.content.title = action.payload.responseData.translatedText;
    //   state.error = '';
    // })
    // builder.addCase(translateContentTitle.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message || 'something went wrong';
    // })
  }
})

export default contentSlice.reducer;