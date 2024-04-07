import React from 'react';
import './RecentActivity.css';

const activities = [
  { id: 1, user: 'Alicia', action: 'uploaded a new assignment', timestamp: '2 mins ago' },
  { id: 2, user: 'Naomi', action: 'finished a book', timestamp: '10 mins ago' },
  { id: 3, user: 'Darrion', action: 'messaged you', timestamp: '1 hour ago' },
];

const RecentActivity = () => {
  return (
    <div className="recent-activity-container">
      <h3>Recent Activity</h3>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <strong>{activity.user}</strong> {activity.action}
            <span className="timestamp">{activity.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
