const form = document.querySelector("form");
// console.log("🚀 ~ form:", form)

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const results1 = document.querySelector("#results1");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = await (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results1.innerHTML = "You Are Under Weight";
    } else if (bmi < 25) {
      results1.innerHTML = "Your Weight is Normal Range";
    } else if (bmi > 25) {
      results1.innerHTML = "you are Overweight";
    }
  }

  form.reset();
});
