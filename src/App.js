import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NoteDetail from './pages/NoteDetail';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='' element={<Home />} />
        <Route path='/detail/:id' element={<NoteDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
