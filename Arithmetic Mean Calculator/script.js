let dataset = [];

function addValue() {
    let num = document.getElementById("inputNumber").value;
  if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
}
dataset.push(Number(num));
updateDataset();
document.getElementById("inputNumber").value = "";
}

function removeValue() {
    let num = document.getElementById("inputNumber").value;
  if (isNaN(num)) {
    alert("Please enter a valid number.");
    return;
}}

let index = dataset.indexOf(Number(num));
if (index !== -1) {
    dataset.splice(index, 1);
    updateDataset();
  } else {
    alert("Number not found in dataset.");
}

document.getElementById("inputNumber").value = "";

function updateDataset() {
    document.getElementById("dataset").textContent = dataset.join(", ");
}

function computeMean() {
    if (dataset.length === 0) {
    alert("The dataset is empty. Cannot compute the mean.");
    return;
    }

let sum = 0;
    for (let i = 0; i < dataset.length; i++) {
      sum += dataset[i];
}
let mean = sum / dataset.length;
document.getElementById("mean").textContent = mean.toFixed(2);
}
