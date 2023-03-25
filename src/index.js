import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { store } from './store';
import HeaderComponent from './components/header/index.';
import GlobalStyle from './globalStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <HeaderComponent/>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
