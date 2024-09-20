import React, { useState } from 'react';

const MasterList = () => {
  const [listType, setListType] = useState('books');
  const [items, setItems] = useState([
    { id: 1, title: 'Book A', author: 'Author A' },
    { id: 2, title: 'Movie B', director: 'Director B' },
    // Add more items to the master list here
  ]);

  const filteredItems = items.filter((item) =>
    listType === 'books' ? item.author : item.director
  );

  return (
    <div>
      <h2>Master List of {listType === 'books' ? 'Books' : 'Movies'}</h2>
      <select value={listType} onChange={(e) => setListType(e.target.value)}>
        <option value="books">Books</option>
        <option value="movies">Movies</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>{listType === 'books' ? 'Author' : 'Director'}</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{listType === 'books' ? item.author : item.director}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterList;
