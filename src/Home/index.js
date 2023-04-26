import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <body>
        <div className="content-home">
            <h1 className="tituloHome">T u t u   and  J o n n y ' s   G i f t</h1>
            <Link to="/enigma">
                <button className="btnStart">= Start =</button>
            </Link>
        </div>
    </body>
  );
}

export default Home;