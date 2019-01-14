const calculateStylePoints = (styleNotes) => {
  const maxNote = Math.max(...styleNotes);
  const minNote = Math.min(...styleNotes);
  
  return styleNotes.reduce((a, b) => a + b) - (maxNote + minNote);
};

module.exports = calculateStylePoints;
