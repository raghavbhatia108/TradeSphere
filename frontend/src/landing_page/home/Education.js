import React from 'react'
import './Education.css'
import { Icon } from '../../utils/IconUtils'

const Education = () => {
  const courses = [
    {
      icon: '📚',
      title: 'Trading Academy',
      description: 'Learn trading fundamentals, technical analysis, and strategies from beginner to advanced levels.',
      link: 'Start Learning →'
    },
    {
      icon: '👥',
      title: 'Community Forum',
      description: 'Connect with thousands of traders, share ideas, ask questions, and learn from real market experiences.',
      link: 'Join Community →'
    },
    {
      icon: '📈',
      title: 'Market Insights',
      description: 'Daily analysis, market trends, and expert commentary to keep you informed and ahead of the curve.',
      link: 'Explore Insights →'
    }
  ]

  return (
    <section className="education-section">
      <div className="education-container">
        <div className="education-header">
          <h2>Learn & Grow Your Skills</h2>
          <p>Master trading with our comprehensive learning resources</p>
        </div>
        
        <div className="education-grid">
          {courses.map((course, index) => (
            <div className="education-card" key={index}>
              <div className="card-icon">
                <Icon emoji={course.icon} size="32px" />
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button type="button" className="learn-link">{course.link}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education