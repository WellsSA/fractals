/**
 * Description: Given a starting point, a length and an angle, finds the
 * final coordinates for the line to be generated
 */
const getFinalCoordinates = (
  [initalX, initialY],
  length,
  angle,
  [directionX, directionY] = [1, -1]
) => {
  // finds the respective angle in degrees
  const degreeAngle = (Math.PI * angle) / 180;

  const directedLengthX = directionX * length;
  const directedLengthY = directionY * length;

  const finalX = initalX + directedLengthX * Math.sin(degreeAngle);
  const finalY = initialY + directedLengthY * Math.cos(degreeAngle);

  return [finalX, finalY];
};

export { getFinalCoordinates };
