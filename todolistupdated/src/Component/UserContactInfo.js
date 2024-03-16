// UserContactInfo.js
import React from 'react';

function UserContactInfo({ contactInfo }) {
  return (
    <div>
      <h3>Contact Information</h3>
      <p>Email: {contactInfo.email}</p>
      <p>Phone: {contactInfo.phone}</p>
    </div>
  );
}

export default UserContactInfo;
