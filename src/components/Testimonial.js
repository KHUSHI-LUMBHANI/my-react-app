import React from 'react';
import jsonData from '../Json/jsonData.json';

const TestimonialPage = () => {
  const { text, reviewer_name, reviewer_designation, date } = jsonData.testimonial;
  return (
    <div>
      <h1>Testimonial</h1>
      <p>{text}</p>
      <p>Reviewer: {reviewer_name}</p>
      <p>Designation: {reviewer_designation}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default TestimonialPage;
