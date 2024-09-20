import React, { useState } from 'react';

const ActiveIssues = () => {
  const [issues, setIssues] = useState([
    { id: 1, book: 'Book A', issuedTo: 'User1', issueDate: '2024-09-01' },
    { id: 2, book: 'Book B', issuedTo: 'User2', issueDate: '2024-09-05' },
    // Add more active issues here
  ]);

  return (
    <div>
      <h2>Active Issues</h2>
      <table>
        <thead>
          <tr>
            <th>Book</th>
            <th>Issued To</th>
            <th>Issue Date</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.book}</td>
              <td>{issue.issuedTo}</td>
              <td>{issue.issueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveIssues;
