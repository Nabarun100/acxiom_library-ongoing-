import React, { useState } from 'react';

const IssueBook = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [error, setError] = useState('');

  const handleBookSelect = (e) => {
    setBookName(e.target.value);
    // Simulate auto-population of author based on the book
    if (e.target.value === 'Book A') {
      setAuthorName('Author A');
    } else if (e.target.value === 'Book B') {
      setAuthorName('Author B');
    }
  };

  const handleSubmit = () => {
    if (!bookName || !issueDate) {
      setError('Please provide all required details.');
    } else {
      setError('');
      // Perform issue book logic
      console.log('Book issued successfully');
    }
  };

  return (
    <div>
      <h2>Issue Book</h2>
      <select value={bookName} onChange={handleBookSelect}>
        <option value="">Select Book</option>
        <option value="Book A">Book A</option>
        <option value="Book B">Book B</option>
      </select>
      <input
        type="text"
        value={authorName}
        readOnly
        placeholder="Author Name"
      />
      <input
        type="date"
        value={issueDate}
        onChange={(e) => setIssueDate(e.target.value)}
        placeholder="Issue Date"
      />
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        placeholder="Return Date"
      />
      <button onClick={handleSubmit}>Issue Book</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default IssueBook;
