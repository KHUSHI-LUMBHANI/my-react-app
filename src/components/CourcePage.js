import React from 'react';
import jsonData from '../Json/jsonData.json';

const CoursePage = () => {
  const { title, fee, inclusions, about, what_to_expect, key_topics } = jsonData.course;

  return (
    <div>
      <h1>Course: {title}</h1>
      <p>Fee: {fee.amount} {fee.currency}</p>
      <p>Inclusions:</p>
      <ul>
        <li>On-demand videos: {inclusions.on_demand_videos}</li>
        <li>Live Q&A sessions: {inclusions.live_qa_sessions.toString()}</li>
        <li>WhatsApp community: {inclusions.whatsapp_community.toString()}</li>
      </ul>
      <h2>About the Course</h2>
      <div dangerouslySetInnerHTML={{ __html: about.html_content }} />
      <h2>What to Expect</h2>
      <div dangerouslySetInnerHTML={{ __html: what_to_expect.html_content }} />
      <h2>Key Topics</h2>
      <div dangerouslySetInnerHTML={{ __html: key_topics.html_content }} />
    </div>
  );
};

export default CoursePage;
