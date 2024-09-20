import React, { useState } from 'react';

const CheckAvailability = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book A', author: 'Author A', available: true },
    { id: 2, title: 'Book B', author: 'Author B', available: false },
    // Add more books here
  ]);

  return (
    <div>
      <h2>Check Book Availability</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.available ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckAvailability;
