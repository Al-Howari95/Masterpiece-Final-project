import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(() => {
    const storedCount = parseInt(localStorage.getItem('visitorCount'), 10) || 0;
    return storedCount + 1;
  });

  useEffect(() => {
    localStorage.setItem('visitorCount', visitorCount.toString());
  }, []);

  return (
    <div className="visitor-counter-container">
      <h2 className="counter-heading">Site Visitors</h2>
      <div className="counter-box">
        <p className="counter-number">{visitorCount}</p>
      </div>
    </div>
  );
};

export default VisitorCounter;
