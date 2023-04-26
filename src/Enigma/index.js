import React from 'react';
import './styles.css';
import Questions from '../questions';


function Enigma() {
  return (
    <body>
        <div className="content-enigma">
            <h1 className="tituloEnigma">Responda para liberar o grande Prêmio!</h1>
            <Questions></Questions>
            
        </div>
    </body>
  );
}

export default Enigma;