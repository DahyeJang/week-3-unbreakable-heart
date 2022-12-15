import { createSlice, current } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const DB = process.env.REACT_APP_APPDBSERVER;

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};
export const __getComment = createAsyncThunk(
  "comments/getcomments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${DB}/comments`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __createComments = createAsyncThunk(
  "comments/cre atecomments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`${DB}/comments`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComments = createAsyncThunk(
  "todos/deletecomments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`${DB}/comments/${payload}`);
      //todos: state.comments.filter((comment) => comment.id !== payload)
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __updateComments = createAsyncThunk(
  "comments/updateComments",
  async (payload, thunkAPI) => {
    const { id, ...rest } = payload;

    try {
      const data = await axios.patch(`${DB}/comments/${id}`, rest);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.error);
    }
  }
);
export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 plans에 서버에서 가져온 plans를 넣습니다.
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__createComments.rejected]: (state) => {
      state.isLoading = false;
      state.comments = state.comments;
    },
    [__createComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__createComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, action.payload];
    },
    [__deleteComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComments.rejected]: (state) => {
      state.isLoading = false;
      state.comments = state.comments;
    },
    [__deleteComments.fulfilled]: (state, action) => {
      //state.comments = state.comments;
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [__updateComments.rejected]: (state) => {
      state.isLoading = false;
    },
    [__updateComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.map((comment) => {
        if (comment.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return comment;
        }
      });
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
