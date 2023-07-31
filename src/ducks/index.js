import {combineReducers, configureStore} from "@reduxjs/toolkit";
import pageNavigatorReducer from './pageNavigator';
import loginCheckReducer from './loginCheck';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";


const reducers = combineReducers({
  pageNavigator : pageNavigatorReducer,
  loginCheck : loginCheckReducer,
})

const persistConfig = {
  key : 'root',

  // localstorage
  storage,

  // 아래에서 선언한 reducer만 storage 저장.. 전역화..
  whitelist : ['loginCheck']
}

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});


export default store;