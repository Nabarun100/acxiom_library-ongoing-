import React, { useState } from 'react';

const FinePayment = () => {
  const [fineAmount, setFineAmount] = useState(0);
  const [finePaid, setFinePaid] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [error, setError] = useState('');

  const handlePayment = () => {
    if (fineAmount > 0 && !finePaid) {
      setError('Please pay the fine before completing the transaction.');
    } else {
      setError('');
      // Perform the fine payment logic here
      console.log('Fine paid successfully. Transaction completed.');
    }
  };

  return (
    <div>
      <h2>Fine Payment</h2>
      <div>
        <label>Fine Amount: </label>
        <input
          type="number"
          value={fineAmount}
          onChange={(e) => setFineAmount(e.target.value)}
          readOnly
        />
      </div>
      <div>
        <label>Fine Paid: </label>
        <input
          type="checkbox"
          checked={finePaid}
          onChange={(e) => setFinePaid(e.target.checked)}
        />
      </div>
      <div>
        <label>Remarks: </label>
        <input
          type="text"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Add any remarks (optional)"
        />
      </div>
      <button onClick={handlePayment}>Confirm Payment</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FinePayment;
