import React, { useState } from 'react';

export default function Tooltip({ content, children}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'hsl(25, 47%, 15%)',
            color: 'hsl(27, 66%, 92%)',
            padding: '8px',
            borderRadius: '5px',
            zIndex: 9999,
            fontWeight: 700,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}
