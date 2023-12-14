import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {items} from './state'
import useFetch from './hooks/useFetch'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <App ></App>
  </BrowserRouter>
);


