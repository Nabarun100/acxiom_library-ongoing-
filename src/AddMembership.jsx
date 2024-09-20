import React, { useState } from 'react';

const AddMembership = () => {
  const [membershipType, setMembershipType] = useState('6 months');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name) {
      setError('Name is required');
    } else {
      setError('');
      // Submit form logic here
    }
  };

  return (
    <div>
      <h2>Add Membership</h2>
      <input 
        type="text" 
        placeholder="Member Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <select 
        value={membershipType} 
        onChange={(e) => setMembershipType(e.target.value)}
      >
        <option value="6 months">6 months</option>
        <option value="1 year">1 year</option>
        <option value="2 years">2 years</option>
      </select>
      <button onClick={handleSubmit}>Add Membership</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddMembership;

