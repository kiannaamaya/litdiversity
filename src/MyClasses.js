import React from 'react';
import './MyClasses.css'; 

const MyClasses = () => {
  const classes = [
    { name: 'English 9', description: 'Description 1' },
    { name: 'English 10', description: 'Description 2' },
  ];

  return (
    <div className="my-classes-container">
      <h3>My Classes</h3>
      <div className="classes-list">
        {classes.map((classItem, index) => (
          <div key={index} className="class-item">
            <span className="class-name">{classItem.name}</span>
            <p className="class-description">{classItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;