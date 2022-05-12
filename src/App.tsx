import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

import QuestList from "./components/QuestList/QuestList";
import QuestCreate from "./components/Quest/QuestCreate";

function App() {

  return (
    <div className="App">
      <header className="App-header">Discover it! sss</header>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quest-list">Quest List</Link></li>
          <li><Link to="/quest-create">Create Quest</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/quest-list" element={<QuestList />} />
        <Route path="/quest-create" element={<QuestCreate />} />
      </Routes>
    </div>
  );
}

export default App;
