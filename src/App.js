import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Navigation from './components/Navigation';
import './styles/App.css';
import './styles/components/buttons.css';
import './styles/components/table.css';
import './styles/components/forms.css';
import './styles/components/pagination.css';
import './styles/pages/home.css';
import './styles/pages/profile.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;