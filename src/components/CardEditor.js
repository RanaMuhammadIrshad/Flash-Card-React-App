import React, { useState } from 'react';

const CardEditor = (props) => {
  const [frontCard, setFrontCard] = useState('');
  const [backCard, setBackCard] = useState('');

  const onChangeHandler = (e) => {
    if (e.target.name === 'frontCard') {
      setFrontCard(e.target.value);
    } else {
      setBackCard(e.target.value);
    }
  };

  const createCard = () => {
    props.addCard({ frontCard, backCard });
    setFrontCard('');
    setBackCard('');
  };

  const rows = props.myCards.map((card, i) => (
    <tr key={i}>
      <td>{card.frontCard}</td>
      <td>{card.backCard}</td>
      <td>
        <button onClick={() => props.removeCard(i)}>delete card</button>
      </td>
    </tr>
  ));

  return (
    <div className="container">
      <h2>Editor</h2>
      <div>
        <table>
          <thead>
            <tr>
              <td>Front</td>
              <td>Back</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
      <div>
        <input
          onChange={onChangeHandler}
          name="frontCard"
          value={frontCard}
          placeholder="Front of Card"
        />
        <input
          onChange={onChangeHandler}
          name="backCard"
          value={backCard}
          placeholder="Back of Card"
        />
        <button onClick={createCard}>Add Card</button>
      </div>
      <hr />
      <button onClick={props.switchMode}>Switch to Viewer</button>
    </div>
  );
};

export default CardEditor;
