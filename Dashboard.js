import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h1>SMP Marks Card Dashboard</h1>

      <ul>
        <li><Link to='/add'>Marks Card Entry</Link></li>
        <li><Link to='/search'>Search Module</Link></li>
        <li><Link to='/reports'>Reports Module</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;
