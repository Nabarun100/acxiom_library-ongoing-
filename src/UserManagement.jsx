import React, { useState } from 'react';

const UserManagement = () => {
  const [userType, setUserType] = useState('new');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name) {
      setError('Name is required');
    } else {
      setError('');
      // Submit logic here
    }
  };

  return (
    <div>
      <h2>{userType === 'new' ? 'Add New User' : 'Update User'}</h2>
      <select 
        value={userType} 
        onChange={(e) => setUserType(e.target.value)}
      >
        <option value="new">New User</option>
        <option value="existing">Existing User</option>
      </select>
      <input 
        type="text" 
        placeholder="User Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={handleSubmit}>{userType === 'new' ? 'Add User' : 'Update User'}</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserManagement;
