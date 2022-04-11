/**
 * Description: Given a starting point, a length and an angle, finds the
 * final coordinates for the line to be generated
 */
const getRandomNumberInRange = (start, end) => {
  const number = Math.floor(Math.random() * end);

  return number < start ? number + start : number;
};

export { getRandomNumberInRange };
