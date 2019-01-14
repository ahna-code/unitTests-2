const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (hillSize === 'normal') {
    return (distance - kPoint) * 2 + 60;
  }
  if (hillSize === 'large') {
    return (distance - kPoint) * 1.8 + 60;
  }
  if (hillSize === 'flying') {
    return (distance - kPoint) * 1.2 + 120;
  }
  return null;
};

module.exports = calculateDistancePoints;
