import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let renderNewTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

state.postPage.dispatch({ type: 'SUB', observer: renderNewTree });
renderNewTree(state)
 
reportWebVitals();
