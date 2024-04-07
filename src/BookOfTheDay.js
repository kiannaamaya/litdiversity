import React, { useRef } from 'react';

const BookOfTheDay = ({ book }) => {
  const renderBadge = (label) => (
    <span style={{
      backgroundColor: '#f0a500',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '15px',
      marginRight: '5px',
      marginBottom: '5px',
      display: 'inline-block',
    }}>
      {label}
    </span>
  );

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px', 
    outline: 'none',
  };

  const synthRef = useRef(window.speechSynthesis); 
  const utteranceRef = useRef(new SpeechSynthesisUtterance(book.summary)); 

  const speakSummary = () => {
    synthRef.current.speak(utteranceRef.current);
  };

  const stopSpeaking = () => {
    synthRef.current.cancel();
  };

  return (
    <div style={{ padding: '20px', margin: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Book of the Day</h2>
      <img src={book.cover} alt={book.title} style={{ width: '200px', height: '300px', marginBottom: '10px' }} />
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <div style={{ margin: '10px 0' }}>
        {book.diversity.blackAuthor && renderBadge('Black Author')}
        {book.diversity.womenAuthor && renderBadge('Women Author')}
      </div>
      <p>ISBN: {book.isbn}</p>
      <p>Genre: {book.genre}</p>
      <p>Age Range: {book.ageRange}</p>
      <p>{book.summary}</p>
      <p>
        Get the book from:
        <a href={book.purchaseLinks.amazon} target="_blank" rel="noopener noreferrer"> Amazon</a> |
        <a href={book.purchaseLinks.barnesAndNoble} target="_blank" rel="noopener noreferrer"> Barnes & Noble</a> |
        <a href={book.purchaseLinks.libraries} target="_blank" rel="noopener noreferrer"> Libraries</a>
      </p>
      <div>
        <button onClick={speakSummary} style={buttonStyle}>Hear Summary</button>
        <button onClick={stopSpeaking} style={{ ...buttonStyle, backgroundColor: '#f44336' }}>Stop</button>
      </div>
    </div>
  );
};

export default BookOfTheDay;
