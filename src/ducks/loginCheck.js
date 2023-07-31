import {createSlice} from "@reduxjs/toolkit";

const initialIsLoginState = {
  loginInfo : {
      isLogin : false,
      address : null,
      deliveries : null,
      id : null,
      username : null,
  }
}

const loginCheckSlise = createSlice({
  name : 'isLogin',
  initialState : initialIsLoginState,
  reducers : {

    loginInfoSet(state, action) {
      state.loginInfo = action.payload;
    },

    isLogin(state, action) {
      state.loginInfo.isLogin = action.payload;
    },

    logout(state, action) {
      state.loginInfo = action.payload;
    },

    userJobEnterdYnSet(state, action) {
      state.loginInfo.userJobEnterdYn = action.payload;
    }

  }
})

export const loginCheckAction = loginCheckSlise.actions;
export default loginCheckSlise.reducer;