import React from 'react';

const Link = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-gray-900 transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
