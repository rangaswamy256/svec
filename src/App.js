// import logo from './logo.svg';
// import './App.css';

import ClassComponent from "./components/ClassComponent";
import FormRendering from "./components/FormRendering";
import ListRendering from "./components/ListRendering";

function App() {
  return (
    <>
    {/* <ClassComponent/> */}
     {/* <h1>Welcome to ReactJs</h1> */}
     <ListRendering />
     <FormRendering />
     
     </>
     
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
