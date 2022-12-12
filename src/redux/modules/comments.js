import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // 썽크함수 추가
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      //return thunkAPI.fulfillWithValue(data.data); //axios가 정상적으로 처리되었는지 , fulfill
      console.log(data);
    } catch (error) {
      //return thunkAPI.rejectWithValue(error); //axios가 실패했는지 , reject
      console.log(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      console.log("fulfilled 상태", state, action);
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
