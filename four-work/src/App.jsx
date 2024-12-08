import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import DndPage from './pages/DndPage';
function App() {
  return (
  <Router>
    <Routes>
      <Route path="https://smirars.github.io/React-DnD/" element={<TodoPage />} />
      <Route path="https://smirars.github.io/React-DnD/#/dnd" element={<DndPage />} />
    </Routes>
  </Router>
  );
}
export default App;

