import React from "react";
import './App.css'
import { RouterProvider } from "react-router-dom";
import { store, persistor } from './redux/store'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './router';
// import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={routes} />
    </PersistGate>
  </Provider>
}

export default App;
