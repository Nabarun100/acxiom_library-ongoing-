import React from 'react';
import { Link } from 'react-router-dom';

const ReportsMenu = () => {
  return (
    <div>
      <h2>Reports Menu</h2>
      <nav>
        <Link to="/active-issues">Active Issues</Link>
        <Link to="/master-list">Master List (Books, Movies, Memberships)</Link>
        <Link to="/overdue-returns">Overdue Returns</Link>
      </nav>
    </div>
  );
};

export default ReportsMenu;
