import React, { useState } from 'react';

const ClickableSVG = () => {
  const [colors, setColors] = useState(['blue', 'red', 'green', 'yellow']); // Initial colors for the SVG

  const handleHover = () => {
    const updatedColors = new Array(colors.length).fill(null).map(getRandomColor); // Generate new random colors array
    setColors(updatedColors); // Update the state with the new colors
  };

  const handleMouseOut = () => {
    // Reset colors to their original state when mouse leaves the SVG
    setColors(['blue', 'red', 'green', 'yellow']); // Reset to initial colors
  };

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random color
  };

  return (
    <svg
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseOut}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      <rect x="10" y="10" width="80" height="80" fill={colors[0]} />
      <rect x="30" y="30" width="40" height="40" fill={colors[1]} />
      <circle cx="50" cy="50" r="20" fill={colors[2]} />
      <circle cx="30" cy="70" r="10" fill={colors[3]} />
    </svg>
  );
};

export default ClickableSVG;
