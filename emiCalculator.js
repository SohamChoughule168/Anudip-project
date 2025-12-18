exports.calculateEMI = (loanAmount, interestRate, tenure) => {
  const r = interestRate / (12 * 100); // Monthly interest rate
  return (loanAmount * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);
};