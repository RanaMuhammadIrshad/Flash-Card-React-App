import React, { useState } from 'react';

const CardViewer = (props) => {
  const [current, setCurrent] = useState(0);
  const [frontSide, setFrontSide] = useState(true);

  const nextCard = () => {
    const next = (current + 1) % props.myCards.length;
    setCurrent(next);
    setFrontSide(true);
  };

  const flipCard = () => {
    setFrontSide((frontSide) => !frontSide);
  };

  if (props.myCards.length > 0) {
    return (
      <div className="container">
        <h2>Viewer</h2>
        <div className="card" onClick={flipCard}>
          <div>
            {frontSide
              ? props.myCards[current].frontCard
              : props.myCards[current].backCard}
          </div>
        </div>
        <button onClick={nextCard}>Next Card</button>
        <hr />
        <button onClick={props.switchMode}>Switch to Editor</button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Error</h1>
        <div className="card">
          <div>
            <p>You have to add a new card</p>
            <p>Go back to editor and create card</p>
          </div>
        </div>
        <hr />
        <button onClick={props.switchMode}>Switch to Editor</button>
      </div>
    );
  }
};

export default CardViewer;
