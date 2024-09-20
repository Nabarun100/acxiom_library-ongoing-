import React, { useState } from 'react';

const OverdueReturns = () => {
  const [overdueItems, setOverdueItems] = useState([
    { id: 1, book: 'Book A', dueDate: '2024-09-10' },
    { id: 2, book: 'Book B', dueDate: '2024-09-05' },
    // Add more overdue returns here
  ]);

  return (
    <div>
      <h2>Overdue Returns</h2>
      <table>
        <thead>
          <tr>
            <th>Book</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {overdueItems.map((item) => (
            <tr key={item.id}>
              <td>{item.book}</td>
              <td>{item.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OverdueReturns;
