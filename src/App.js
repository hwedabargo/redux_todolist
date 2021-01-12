import React from "react";
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AddTask/>
       <ListTask/>
      </header>
    </div>
  );
}

export default App;
