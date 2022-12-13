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

export const plansSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__createComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = state.comments; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__createComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__createComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = [...state.comments, action.payload.data];
      // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
  },
});

export const {} = plansSlice.actions;
export default plansSlice.reducer;
