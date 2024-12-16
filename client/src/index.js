import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import VacancyStore from './store/VacancyStore';
import './index.css'
import ProfileStore from './store/ProfileStore';
import ApplicationStore from './store/ApplicationStor';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    vacancy: new VacancyStore(),
    profile: new ProfileStore(),
    application: new ApplicationStore(),
  }}>
    <App />
  </Context.Provider>,
);
