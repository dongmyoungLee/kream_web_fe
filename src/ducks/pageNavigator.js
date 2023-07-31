import {createSlice} from "@reduxjs/toolkit";

const initialPageNavigatorState = {
  isCompany : false,
  isMobileMenu : false,
  isMobileTooltipMenu : false,
}

const pageNavigatorSlise = createSlice({
  name : 'userType',
  initialState : initialPageNavigatorState,
  reducers : {
    isCompany(state, action) {
      state.isCompany = action.payload;
    },

    isMobileMenu(state, action) {
      state.isMobileMenu = action.payload;
    },

    isMobileTooltipMenu(state, action) {
      state.isMobileTooltipMenu = action.payload;
    }
  }
})

export const pageNavigatorAction = pageNavigatorSlise.actions;
export default pageNavigatorSlise.reducer;