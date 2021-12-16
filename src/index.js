import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import SimpleHabit from './components/simpleHabit';
import '@fortawesome/fontawesome-free/js/all.js';
import { getAllByAltText } from '@testing-library/dom';
// fortawesome = 부트스트랩같은거 버튼 추가하고 하는
// 그런 느낌임

ReactDOM.render(
  <React.StrictMode>
    {/* <SimpleHabit /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
