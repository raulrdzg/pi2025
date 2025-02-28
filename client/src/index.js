import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'boosted/dist/css/boosted.min.css'; // Import Boosted Orange CSS
import './App.css'; // Your custom CSS (if needed)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);