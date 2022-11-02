import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './components/Counter';
import MyGitHub from './components/MyGitHub';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App /><hr/>
    <Counter incBy={1} /><hr/>
    <Counter incBy={2} /><hr/>
    <MyGitHub /><hr/>
  </>
);
