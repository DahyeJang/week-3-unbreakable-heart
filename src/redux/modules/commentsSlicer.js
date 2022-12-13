import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};
export const __createComments = createAsyncThunk(
  "comments/createComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/comments", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments", payload);
      //console.log("data", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__createComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments;
    },
    [__createComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__createComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, action.payload.data];
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
