import React,{Suspense} from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import axios from "axios";
import { Provider } from "react-redux";
import {store} from './redux/store'


axios.defaults.baseURL = 'http://localhost:3000'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Suspense fallback="...loading">
            <App />
        </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

