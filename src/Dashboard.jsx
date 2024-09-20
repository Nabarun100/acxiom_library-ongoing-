import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ role }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="/reports">Reports</Link>
        <Link to="/transactions">Transactions</Link>
        {role === 'admin' && <Link to="/maintenance">Maintenance</Link>}
      </nav>
    </div>
  );
};

export default Dashboard;
