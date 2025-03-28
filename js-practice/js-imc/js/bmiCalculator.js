export const bmiCalculate = ({ weight, height }) => {
    const bmi = weight / Math.pow(height / 100, 2);
    return bmi.toFixed(1);
}
