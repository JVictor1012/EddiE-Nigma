import React, { useState } from 'react';
import './styles.css';


function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const [revealedChars, setRevealedChars] = useState(10);
  const originalString = 'B95HH-IKI4N-ZI5FE';
  const revealedString = originalString.substring(0, revealedChars);




  const questions = [
    {
      question: 'No início de tudo, quantas pessoas estavam no grupo Pit Manos quando ele foi criado?',
      answer: '5 pessoas (Arthur, Eduardo, Manoel, Davi e Nathan)'
    },
    {
      question: 'Atualmente, qual versão do grupo Pit Manos que estamos?',
      answer: 'segunda'
    },
    {
      question: "Quem é o vilão de Vigilant's code?",
      answer: 'Detetive Thomas '
    },
    {
      question: 'Qual feriado oficial foi definido pelos membros do Pit? E qual é o seu dia?',
      answer: 'Dia mundial do Crente'
    },
    {
      question: 'Nos últimos anos, passamos por diversas aventuras das mais diversas, por isso, quais foram as 3 primeiras aventuras de RPG do Pit?',
      answer: 'The Witcher, Star Wars, Clayton '
    },
    {
      question: "Na paródia de heróis da DC, quais eram as versões do Batman, Superman e Lex Luthor?",
      answer: 'Bullman, Spacialman e Elon Husk'
    },
    {
      question: 'No total, em toda sua história, quantas pessoas já fizeram parte do grupo Pit Manos?',
      answer: 'Mais de 3 com certeza. '
    }

  ];




  function handleNextQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowAnswer(false);
  }

  function handlePreviousQuestion() {
    if (currentQuestionIndex ===0){
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex -1);
    setShowAnswer(false);
  }

  function revealAnswer() {
    setShowAnswer(true);
  }

  function revealNextChar() {
    setRevealedChars(revealedChars + 1);
  }

  return (
    <div >
      {currentQuestionIndex < questions.length ? (
        <div className='questionsBox'>
          <h2 className='pergunta'>{questions[currentQuestionIndex].question}</h2>
          <div className="ButtonsContainer">
            <button className='botoes' onClick={handlePreviousQuestion}>Pergunta Anterior</button>
            <button className='botoes' onClick={() => {revealAnswer(); revealNextChar();}} >Resposta</button>
            <button className='botoes' onClick={handleNextQuestion}>Próxima pergunta</button>
          </div>
          <p className='resposta'> {showAnswer ? questions[currentQuestionIndex].answer : "?"}</p>
          <h3>{revealedString}</h3>
        </div>
      ) : (
        <p>Aqui vai seu prêmio campeão</p>
      
        
      )}
    </div>
  );
}

export default Questions;