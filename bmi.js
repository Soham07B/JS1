function bmiCalculator(weight,height)
{
    return weight/(height^2);
}
var bmi=bmiCalculator(65,1.74);
console.log(bmi);
document.body.innerHTML = bmiCalculator(65, 1.74);