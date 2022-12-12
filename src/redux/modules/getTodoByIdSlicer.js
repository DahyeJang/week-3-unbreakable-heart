import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  plan: {},
  isLoading: false,
  error: null,
};

export const __getTodoByID = createAsyncThunk(
  "plans/getTodoByID",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/plans");
      console.log(data); // 잘처리되면 fullfiled
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPlans.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getPlans.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.plans = action.payload; // Store에 있는 plans에 서버에서 가져온 plans를 넣습니다.
    },
    [__getPlans.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = plansSlice.actions;
export default plansSlice.reducer;
