import React, { useState } from 'react';

const UpdateMembership = () => {
  const [membershipNumber, setMembershipNumber] = useState('');
  const [membershipType, setMembershipType] = useState('6 months');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!membershipNumber) {
      setError('Membership number is required');
    } else {
      setError('');
      // Submit logic here
    }
  };

  return (
    <div>
      <h2>Update Membership</h2>
      <input 
        type="text" 
        placeholder="Membership Number" 
        value={membershipNumber} 
        onChange={(e) => setMembershipNumber(e.target.value)} 
      />
      <select 
        value={membershipType} 
        onChange={(e) => setMembershipType(e.target.value)}
      >
        <option value="6 months">6 months</option>
        <option value="1 year">1 year</option>
        <option value="2 years">2 years</option>
      </select>
      <button onClick={handleSubmit}>Update Membership</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UpdateMembership;
