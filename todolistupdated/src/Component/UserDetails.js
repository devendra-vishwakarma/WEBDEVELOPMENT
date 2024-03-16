// UserDetails.js
import React from 'react';
import UserPersonalInfo from './UserPersonalInfo';
import UserContactInfo from './UserContactInfo';

function UserDetails() {
  const personalInfo = {
    name: 'John Doe',
    age: 30
  };

  const contactInfo = {
    email: 'john@example.com',
    phone: '123-456-7890'
  };

  return (
    <div>
      <h2>User Details</h2>
      <UserPersonalInfo personalInfo={personalInfo} />
      <UserContactInfo contactInfo={contactInfo} />
    </div>
  );
}

export default UserDetails;
