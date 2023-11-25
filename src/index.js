import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import reducer, { store } from './context/reducer';
import { StateProvider } from './context/stateProvider';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider store={store} reducer={reducer}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StateProvider>
);

