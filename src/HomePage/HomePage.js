import { Link } from 'react-router-dom';
import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/inline">Inline cart page</Link>
      <br />
      <Link to="/lightbox">Lightbox cart page</Link>
    </div>
  )
}

export default HomePage;
