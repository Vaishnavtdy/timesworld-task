import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCountriesAPI } from "./countriesAPI";

export const fetchCountries = createAsyncThunk("countries/fetchCountries", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchCountriesAPI();
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    data: [],
    loading: false,
    error: null,
    selectedRegion: "All",
  },
  reducers: {
    setSelectedRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedRegion } = countriesSlice.actions;
export default countriesSlice.reducer;
