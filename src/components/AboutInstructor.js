import React from 'react';
import jsonData from '../Json/jsonData.json';

const AboutInstructorPage = () => {
  const { html_content } = jsonData.about_instructor;

  return (
    <div>
      <h1>About the Instructor</h1>
      <div dangerouslySetInnerHTML={{ __html: html_content }} />
    </div>
  );
};

export default AboutInstructorPage;
