import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">
        Главная
      </Link>
    </nav>
  );
};

export default Navigation;