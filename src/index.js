import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';

import './index.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <App />
      <ToastContainer autoClose={1500} />
    </BrowserRouter>
  </Provider>
);
