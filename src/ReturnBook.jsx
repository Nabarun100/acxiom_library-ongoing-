import React, { useState } from 'react';

const ReturnBook = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!bookName || !serialNo || !returnDate) {
      setError('Please provide all required details.');
    } else {
      setError('');
      // Perform return book logic
      console.log('Book returned successfully');
    }
  };

  return (
    <div>
      <h2>Return Book</h2>
      <input
        type="text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        placeholder="Book Name"
      />
      <input
        type="text"
        value={authorName}
        readOnly
        placeholder="Author Name"
      />
      <input
        type="text"
        value={serialNo}
        onChange={(e) => setSerialNo(e.target.value)}
        placeholder="Serial Number"
      />
      <input
        type="date"
        value={issueDate}
        readOnly
        placeholder="Issue Date"
      />
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        placeholder="Return Date"
      />
      <button onClick={handleSubmit}>Return Book</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ReturnBook;
