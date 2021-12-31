import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './components/Functional';
import ClassComponent from './components/ClassComponent';
import UnionBank from './components/UnionBank';
import CorporationBank from './components/CorporationBank';
import StateinClassComponent from './components/StateinClassComponent';
import StatesinFunctionalComponent from './components/StatesinFunctionalComponent';

ReactDOM.render(
  <React.StrictMode>
    <ClassComponent/>
     {/* <App /> 
     <Functional/>
     <React.createElement/> */}
        {/* <UnionBank />
        <CorporationBank />*/}

      {/* <StatesinFunctionalComponent />   */}
      <StateinClassComponent /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
