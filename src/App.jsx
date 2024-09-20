import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import MaintenanceMenu from './MaintenanceMenu';
import ReportsMenu from './ReportsMenu';
import TransactionsMenu from './TransactionsMenu';
import AddMembership from './AddMembership';
import UpdateMembership from './UpdateMembership';
import AddBookMovie from './AddBookMovie';
import UpdateBookMovie from './UpdateBookMovie';
import UserManagement from './UserManagement';
import ActiveIssues from './ActiveIssues';
import MasterList from './MasterList';
import OverdueReturns from './OverdueReturns';
import CheckAvailability from './CheckAvailability';
import IssueBook from './IssueBook';
import ReturnBook from './ReturnBook';
import FinePayment from './FinePayment';

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <div className="container">
        {!role ? (
          <Login setRole={setRole} />
        ) : (
          <>
            <Routes>
              <Route path="/maintenance" element={<MaintenanceMenu />} />
              <Route path="/reports" element={<ReportsMenu />} />
              <Route path="/transactions" element={<TransactionsMenu />} />
              <Route path="/add-membership" element={<AddMembership />} />
              <Route path="/update-membership" element={<UpdateMembership />} />
              <Route path="/add-book-movie" element={<AddBookMovie />} />
              <Route path="/update-book-movie" element={<UpdateBookMovie />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/active-issues" element={<ActiveIssues />} />
              <Route path="/master-list" element={<MasterList />} />
              <Route path="/overdue-returns" element={<OverdueReturns />} />
              <Route path="/check-availability" element={<CheckAvailability />} />
              <Route path="/issue-book" element={<IssueBook />} />
              <Route path="/return-book" element={<ReturnBook />} />
              <Route path="/fine-payment" element={<FinePayment />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
