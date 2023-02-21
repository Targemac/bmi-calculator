const bmiForm = document.querySelector("#bmiForm");

bmiForm.addEventListener("submit", (e) => {
  const weight = document.querySelector("#weight");
  const height = document.querySelector("#height");
  const calculateBtn = document.querySelector("#calculateBtn");
  const output = document.querySelector("#output");
  var status = document.querySelector("#status");
  var advice = document.querySelector("#advice");

  e.preventDefault();
  var weightValue = parseFloat(weight.value);
  //   console.log(weightValue);

  var heightValue = parseFloat(height.value);
  //   console.log(heightValue);

  var bmiValue;

  if (!weightValue || !heightValue) {
    output.innerHTML = "Please enter your weight and height";
  } else {
    bmiValue = weightValue / heightValue ** 2;
  }

  output.innerHTML = bmiValue.toFixed(2);
  //   console.log(bmiValue);

  if (bmiValue < 18.5) {
    status.innerHTML = "Underweight";
    advice.innerHTML =
      "A BMI of less than 18.5 indicates that you are underweight, so you may need to put on some weight. You are recommended to ask your doctor or a dietitian for advice.";
  }
  if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    status.innerHTML = "Normal";
    advice.innerHTML =
      "A BMI of 18.5-24.9 indicates that you are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems.";
  }
  if (bmiValue >= 25 && bmiValue <= 29.9) {
    status.innerHTML = "Overweight";
    advice.innerHTML =
      "A BMI of 25-29.9 indicates that you are slightly overweight. You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietitian for advice.";
  }

  if (bmiValue > 30) {
    status.innerHTML = "Extreme Obesity ";
    advice.innerHTML =
      "A BMI of over 30 indicates that you are heavily overweight. Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietitian for advice.";
  }
});
