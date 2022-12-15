import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  plans: [],
  isLoading: false,
  error: null,
};

export const __updatePlans = createAsyncThunk(
  "plans/updatePans",

  async (payload, thunkAPI) => {
    // const { id, ...rest } = payload;
    try {
      const data = await axios.patch(
        `https://jet-sulfuric-licorice.glitch.me/plans/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __createPlans = createAsyncThunk(
  "plans/createPlans",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://jet-sulfuric-licorice.glitch.me/plans",
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getPlans = createAsyncThunk(
  "todos/getPlans",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://jet-sulfuric-licorice.glitch.me/plans"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deletePlans = createAsyncThunk(
  "todos/deleteTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `https://jet-sulfuric-licorice.glitch.me/plans/${payload.id}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
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
    [__createPlans.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.plans = state.plans; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__createPlans.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__createPlans.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.plans = [...state.plans, action.payload];

      // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__deletePlans.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePlans.rejected]: (state) => {
      state.isLoading = false;
      state.plans = state.plans;
    },
    [__deletePlans.fulfilled]: (state, action) => {
      state.plans = state.plans.filter((planT) => {
        console.log(planT.id, "111", action.payload.id);
        if (planT.id !== action.payload.id) {
          return true;
        }
        return false;
      });
    },
    [__updatePlans.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePlans.rejected]: (state) => {
      state.isLoading = false;
      state.plans = state.plans;
    },
    [__updatePlans.fulfilled]: (state, action) => {
      state.plans = state.plans;
    },
  },
});

export const {} = plansSlice.actions;
export default plansSlice.reducer;
