import React from 'react';
import './ComponentStyles.css';

const LearningSection = () => {
  const courses = [
    {
      title: 'Technical Analysis',
      description: 'Learn chart patterns, indicators, and trading strategies',
      icon: 'fas fa-chart-line',
      duration: '8 hours'
    },
    {
      title: 'Fundamental Analysis',
      description: 'Understand financial statements and company valuations',
      icon: 'fas fa-book',
      duration: '10 hours'
    },
    {
      title: 'Trading Psychology',
      description: 'Master risk management and emotional discipline',
      icon: 'fas fa-brain',
      duration: '6 hours'
    }
  ];

  return (
    <div className="learning-section">
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <div className="course-icon">
            <i className={course.icon}></i>
          </div>
          <h4>{course.title}</h4>
          <p>{course.description}</p>
          <span className="course-duration">{course.duration}</span>
        </div>
      ))}
    </div>
  );
};

export default LearningSection;
