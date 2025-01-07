//* this function used to calculate the average of a single subject
const calcMoyMatiere = (
  TD: number,
  DS: number,
  EX: number,
  coef: number
): number => {
  return ((TD * 10 + DS * 20 + EX * 70) / 100) * coef;
};

export default calcMoyMatiere;
