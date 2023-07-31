import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import router from './Router';
import {Provider} from "react-redux";
import store from './ducks';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

export let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);

reportWebVitals();
