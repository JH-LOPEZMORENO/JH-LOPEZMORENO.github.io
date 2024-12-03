import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Account from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Account />
  </React.StrictMode>
);