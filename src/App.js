import React, { useState } from 'react';
import './App.css';
import CardEditor from './components/CardEditor';
import CardViewer from './components/CardViewer';

function App() {
  const [editor, setEditor] = useState(true);
  const [myCards, setMyCards] = useState([]);

  const switchMode = () => {
    setEditor((editor) => !editor);
  };

  const addCard = (card) => {
    setMyCards((myCards) => [...myCards, card]);
  };

  const removeCard = (index) => {
    const newCards = myCards.filter((card, i) => i !== index);
    setMyCards(newCards);
  };

  if (editor) {
    return (
      <CardEditor
        myCards={myCards}
        switchMode={switchMode}
        addCard={addCard}
        removeCard={removeCard}
      />
    );
  } else {
    return <CardViewer myCards={myCards} switchMode={switchMode} />;
  }
}

export default App;
