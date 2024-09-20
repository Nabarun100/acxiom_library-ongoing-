import React, { useState } from 'react';

const AddBookMovie = () => {
  const [itemType, setItemType] = useState('book');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!title || !author) {
      setError('Both title and author are required');
    } else {
      setError('');
      // Submit logic here
    }
  };

  return (
    <div>
      <h2>Add {itemType === 'book' ? 'Book' : 'Movie'}</h2>
      <select 
        value={itemType} 
        onChange={(e) => setItemType(e.target.value)}
      >
        <option value="book">Book</option>
        <option value="movie">Movie</option>
      </select>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <button onClick={handleSubmit}>Add {itemType}</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddBookMovie;

