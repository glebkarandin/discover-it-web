import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

import QuestsList from "./components/quests-list";
import QuestForm from "./components/Quest/QuestForm";

function App() {

  return (
    <div className="App">
      <header className="App-header">Discover it! sss</header>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quests-list">Quest List</Link></li>
          <li><Link to="/create-quest">Create Quest</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/quests-list" element={<QuestsList />} />
        <Route path="/create-quest" element={<QuestForm />} />
      </Routes>
    </div>
  );
}

export default App;
