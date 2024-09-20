import React from 'react';
import { Link } from 'react-router-dom';

function TransactionsMenu() {
  return (
    <div className="transactions-menu">
      <h2>Transactions</h2>
      <ul>
        <li><Link to="/issue-book">Issue Book</Link></li>
        <li><Link to="/return-book">Return Book</Link></li>
        <li><Link to="/fine-payment">Fine Payment</Link></li>
      </ul>
    </div>
  );
}

export default TransactionsMenu;
