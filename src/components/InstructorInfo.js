import React from 'react';
import jsonData from '../Json/jsonData.json';

const InstructorInfo = () => {
  const { name, social_media } = jsonData.instructor;
   console.log(jsonData , "jsonData")

  return (
    <div>
      <h2>Instructor: {name}</h2>
      <p>Follow on social media:</p>
      <ul>
        {Object.keys(social_media).map((platform, index) => (
          <li key={index}>{platform}</li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorInfo;
