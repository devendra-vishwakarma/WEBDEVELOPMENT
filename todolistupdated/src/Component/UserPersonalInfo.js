// UserPersonalInfo.js
import React from 'react';

function UserPersonalInfo({ personalInfo }) {
  return (
    <div>
      <h3>Personal Information</h3>
      <p>Name: {personalInfo.name}</p>
      <p>Age: {personalInfo.age}</p>
    </div>
  );
}

export default UserPersonalInfo;
