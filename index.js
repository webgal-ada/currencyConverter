const cvTitle = document.querySelector("strong").style.color = "red";
const paragraph = document.querySelector("h1").style.fontSize = "35px";

const feedback = document.querySelector("h2").style.fontSize = "18px";
          document.querySelectorAll("h2")[1].style.fontSize = "18px";

const span = document.querySelector("span").style.color = "green";
    document.querySelectorAll("span")[1].style.color = "red";

const inserted = document.getElementById("myInput");
const resetBtn = document.querySelector("#reset");

function reset() {
  myInput.value = "";
  inserted.innerText = "";
}
resetBtn.addEventListener("click", reset);


inserted.addEventListener("input", function (event) {
  let converted = event.target.value;

  let dollarValue = document.getElementById("dollarId");
  dollarAmt.innerHTML = converted * 1.00;

  let eurosValue = document.getElementById("eurosId");
  convAmt.innerHTML = converted * .83;
});

// var nodelist = document.getElementsByTagName("h1").length;
// console.log(nodelist);
