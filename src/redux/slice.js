import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    category: [],
    priceRange: [],
    // Add other filter criteria as needed
  },
  filteredProducts: [],
  sortCriteria: 'recommended', // Default sort criteria
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
    },
    setSortCriteria(state, action) {
      state.sortCriteria = action.payload;
    },
  },
});

export const { setFilters, setFilteredProducts, setSortCriteria } = filtersSlice.actions;

export default filtersSlice.reducer;
