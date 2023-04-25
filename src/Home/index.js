import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <body>
        <div className="content-home">
            <h1 className="titulo">The Eddie's Gift</h1>
            <Link to="/enigma">
                <button className="btnStart">= Start =</button>
            </Link>
        </div>
    </body>
  );
}

export default Home;