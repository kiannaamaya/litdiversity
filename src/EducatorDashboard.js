import React from 'react';
import FindResources from './FindResources';
import MyStat from './MyStat';
import MyClasses from './MyClasses';
import RecentActivity from './RecentActivity';
import './App.css';


const EducatorDashboard = () => {
  const todayBooks= 4;
  const monthBooks = 75;
  return (
    <div className="dashboard-container">
      <FindResources />
      <MyStat todayBooks={todayBooks} monthBooks={monthBooks} />
      <MyClasses />
      <RecentActivity />
    </div>
  );
};

export default EducatorDashboard;
