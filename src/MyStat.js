import React from 'react';
import './MyStat.css'; 

const MyStat = ({ todayBooks, monthBooks }) => {
  return (
    <div className="my-stat-container">
        <p className="books-read-title">Books Read By Students:</p>
      <div className="stat">
        <p className="stat-title">Today</p>
        <p className="stat-number">{todayBooks} Books</p>
      </div>
      <div className="stat">
        <p className="stat-title">This Month</p>
        <p className="stat-number">{monthBooks} Books</p>
      </div>
      <div className="stat-link">
        <a href="/books">Go to my students</a>
      </div>
    </div>
  );
};

export default MyStat;
