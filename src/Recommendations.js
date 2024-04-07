import React from 'react';
import FilterBooks from './FilterBooks'; 

const Recommendations = () => {
  return (
    <div style={{ margin: '20px' }}>
      <h2>Recommendations</h2>
      <p>Check out these recommendations...</p>
      <FilterBooks /> 
    </div>
  );
};

export default Recommendations;
