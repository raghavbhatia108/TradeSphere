// Icon utility to convert emoji descriptions to Font Awesome icon components
import React from 'react';

// Map emojis to Font Awesome icon classes
const iconMap = {
  '📈': 'fas fa-chart-line',
  '⚡': 'fas fa-bolt',
  '📊': 'fas fa-chart-bar',
  '📁': 'fas fa-folder',
  '👀': 'fas fa-eye',
  '🔒': 'fas fa-lock',
  '📚': 'fas fa-book',
  '👥': 'fas fa-users',
  '🤖': 'fas fa-robot',
  '💼': 'fas fa-briefcase',
  '🔗': 'fas fa-link',
  '🛡️': 'fas fa-shield-alt',
  '👨‍💼': 'fas fa-user-tie',
  '👩‍💻': 'fas fa-user-graduate',
  '👨‍📊': 'fas fa-user-chart',
  '👩‍⚖️': 'fas fa-user-shield',
};

/**
 * Icon component that renders Font Awesome icons
 * @param {string} emoji - Emoji character or description
 * @param {string} className - Additional CSS classes
 */
export const Icon = ({ emoji, className = 'icon', size = '20px' }) => {
  const iconClass = iconMap[emoji] || 'fas fa-circle';
  
  return (
    <i
      className={`${iconClass} ${className}`}
      style={{
        fontSize: size,
        display: 'inline-block',
      }}
      aria-hidden="true"
    ></i>
  );
};

/**
 * Helper function to replace emoji strings with Icon components
 * Returns string with emoji replaced or null if no emoji found
 */
export const replaceEmoji = (text) => {
  for (const emoji of Object.keys(iconMap)) {
    if (text.includes(emoji)) {
      return text.replace(emoji, '').trim();
    }
  }
  return text;
};

/**
 * Extract emoji from text and return both emoji and text
 */
export const extractEmoji = (text) => {
  for (const emoji of Object.keys(iconMap)) {
    if (text.includes(emoji)) {
      return {
        emoji,
        text: text.replace(emoji, '').trim(),
      };
    }
  }
  return { emoji: null, text };
};

export default Icon;
