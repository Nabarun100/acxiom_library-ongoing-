import React from 'react';
import { Link } from 'react-router-dom';

const MaintenanceMenu = () => {
  return (
    <div className="container maintenance-menu">
      <h2>Maintenance Menu</h2>
      <Link to="/add-membership"><button>Add Membership</button></Link>
      <Link to="/update-membership"><button>Update Membership</button></Link>
      <Link to="/add-book-movie"><button>Add Book/Movie</button></Link>
      <Link to="/update-book-movie"><button>Update Book/Movie</button></Link>
      <Link to="/active-issues"><button>Active Issues</button></Link>
      <Link to="/master-list"><button>Master List</button></Link>
      <Link to="/overdue-returns"><button>Overdue Returns</button></Link>
      <Link to="/check-availability"><button>Check Availability</button></Link>
      <Link to="/issue-book"><button>Issue Book</button></Link>
      <Link to="/return-book"><button>Return Book</button></Link>
      <Link to="/fine-payment"><button>Fine Payment</button></Link>
    </div>
  );
};

export default MaintenanceMenu;
