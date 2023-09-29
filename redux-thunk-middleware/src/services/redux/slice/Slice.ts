import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IProduct {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface IData {
  contents: IProduct[];
  isLoading: boolean;
  error: unknown;
}

const initialState: IData = {
  contents: [],
  isLoading: false,
  error: undefined,
};

export const fetchImageData = createAsyncThunk(
  "products/fetchImageData",
  async () => {
    const res = await axios(
      "https://65152460dc3282a6a3cde7e4.mockapi.io/sample-photos"
    ).catch((error) => {
      alert(`error is : ${error.message}`);
      throw error;
    });
    const data = res.data;
    return data;
  }
);

export const loadingImageSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImageData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      fetchImageData.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        state.isLoading = false;
        state.contents = [action.payload];
      }
    );
    builder.addCase(fetchImageData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default loadingImageSlice.reducer;
