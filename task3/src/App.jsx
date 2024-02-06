import React, { useState } from 'react';

const Card = ({ id, name, description, status, onStatusChange }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <select value={status} onChange={(e) => onStatusChange(id, e.target.value)}>
        <option value="notCompleted">Not Completed</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

const App = () => {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleStatusChange = (cardId, newStatus) => {
    const updatedCards = cards.map((card) =>
      card.id === cardId ? { ...card, status: newStatus } : card
    );
    setCards(updatedCards);
  };

  const handleSave = () => {
    const newCard = {
      id: Date.now(),
      name: name,
      description: description,
      status: 'notCompleted',
    };
    setCards([...cards, newCard]);
    setName('');
    setDescription('');
  };

  return (
    <div className="app">
      <div className="input-section">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>

      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            description={card.description}
            status={card.status}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>

      <div className="dialog-box">
        <h2>Completed Cards</h2>
        <ul>
          {cards
            .filter((card) => card.status === 'completed')
            .map((card) => (
              <li key={card.id}>Card {card.id} - {card.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;


// import React, { useState } from 'react';

// const MainComponent = () => {
//   const [cards, setCards] = useState([
//     { id: 1, title: 'Card 1', status: 'incomplete' },
//     { id: 2, title: 'Card 2', status: 'incomplete' },
//     { id: 3, title: 'Card 3', status: 'incomplete' },
//     { id: 4, title: 'Card 4', status: 'incomplete' },
//     { id: 5, title: 'Card 5', status: 'incomplete' }
//   ]);
//   const [completedCards, setCompletedCards] = useState([]);
//   const [showCompletedDialog, setShowCompletedDialog] = useState(false);

//   const handleStatusChange = (id, newStatus) => {
//     setCards(prevCards => prevCards.map(card => {
//       if (card.id === id) {
//         return { ...card, status: newStatus };
//       }
//       return card;
//     }));
//   }

//   const handleStatusButtonClick = (card) => {
//     if (card.status === 'completed') {
//       setCompletedCards(prevCompletedCards => [...prevCompletedCards, card]);
//     }
//   }

//   const handleShowCompletedDialog = () => {
//     setShowCompletedDialog(true);
//   }

//   return (
//     <div>
//       {cards.map(card => (
//         <div key={card.id}>
//           <h3>{card.title}</h3>
//           <select value={card.status} onChange={(e) => handleStatusChange(card.id, e.target.value)}>
//             <option value="incomplete">Incomplete</option>
//             <option value="completed">Completed</option>
//           </select>
//           <button onClick={() => handleStatusButtonClick(card)}>Status</button>
//         </div>
//       ))}
//       <button onClick={handleShowCompletedDialog}>Show Completed Cards</button>
//       {showCompletedDialog && (
//         <DialogBox onClose={() => setShowCompletedDialog(false)}>
//           <h3>Completed Cards</h3>
//           {completedCards.map(card => (
//             <div key={card.id}>
//               <h3>{card.title}</h3>
//               <p>Status: {card.status}</p>
//             </div>
//           ))}
//         </DialogBox>
//       )}
//     </div>
//   );
// }

// const DialogBox = ({ children, onClose }) => {
//   return (
//     <div className="dialog">
//       <div className="dialog-content">
//         {children}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }

// export default MainComponent;

// import React, { useState } from 'react';
// const CardComponent = () => {
//   const [cards, setCards] = useState([
//     { id: 1, status: 'not completed' },
//     { id: 2, status: 'completed' },
//     // Add more cards as needed
//   ]);

//   const handleStatusButtonClick = () => {
//     const completedCards = cards.filter((card) => card.status === 'completed');
//     // Open a dialog box or modal to display the completed cards
//     alert(`Completed cards: ${completedCards.map((card) => card.id).join(', ')}`);
//   };

//   return (
//     <div>
//       {cards.map((card) => (
//         <div key={card.id}>
//           <p>Card {card.id}</p>
//           <select value={card.status} onChange={(e) => {
//             const updatedCards = cards.map((c) => {
//               if (c.id === card.id) {
//                 return { ...c, status: e.target.value };
//               }
//               return c;
//             });
//             setCards(updatedCards);
//           }}>
//             <option value="not completed">Not Completed</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div>
//       ))}
//       <button onClick={handleStatusButtonClick}>Status</button>
//     </div>
//   );
// };

// export default CardComponent;


// import React, { useState } from 'react';

// const Card = ({ id, status, onChangeStatus, onDelete }) => {
//   return (
//     <div className="card">
//       <p>Card {id}</p>
//       <select value={status} onChange={(e) => onChangeStatus(id, e.target.value)}>
//         <option value="notCompleted">Not Completed</option>
//         <option value="completed">Completed</option>
//       </select>
//       <button onClick={() => onDelete(id)}>Delete</button>
//     </div>
//   );
// };

// const DialogBox = ({ completedCards, onClose }) => {
//   return (
//     <div className="dialog-box">
//       <h2>Completed Cards</h2>
//       <ul>
//         {completedCards.map((card) => (
//           <li key={card.id}>Card {card.id}</li>
//         ))}
//       </ul>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// const App = () => {
//   const [cards, setCards] = useState([
//     { id: 1, status: 'notCompleted' },
//     { id: 2, status: 'notCompleted' },
//     // ... add more cards as needed
//   ]);

//   const [completedCards, setCompletedCards] = useState([]);
//    const [showDialog, setShowDialog] = useState(false);

//   const handleStatusChange = (cardId, newStatus) => {
//     const updatedCards = cards.map((card) =>
//       card.id === cardId ? { ...card, status: newStatus } : card
//     );
//     setCards(updatedCards);

//     if (newStatus === 'completed') {
//       const completedCard = cards.find((card) => card.id === cardId);
//       setCompletedCards([...completedCards, completedCard]);
//       setShowDialog(true);
//     }
//   };

//   const handleDelete = (cardId) => {
//     const updatedCards = cards.filter((card) => card.id !== cardId);
//     setCards(updatedCards);
//   };

//   const handleCloseDialog = () => {
//     setShowDialog(false);
//   };

//   return (
//     <div className="app">
//       {cards.map((card) => (
//         <Card
//           key={card.id}
//           id={card.id}
//           status={card.status}
//           onChangeStatus={handleStatusChange}
//           onDelete={handleDelete}
//         />
//       ))}

//       {showDialog && (
//         <DialogBox completedCards={completedCards} onClose={handleCloseDialog} />
//       )}
//     </div>
//   );
// };

// export default App;
