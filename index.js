const cvTitle = document.querySelector("strong").style.color = "red";
// const titles = document.querySelector("h1").color = "red";
const span = document.querySelector("span").style.color = "green";
    document.querySelectorAll("span")[1].style.color = "red";
    
const paragraph = document.querySelector("h1").style.fontSize = "35px";
    document.querySelector("h1").style.textAlign = "center";
    document.querySelectorAll("h1")[1].style.fontSize = "1rem";
    document.querySelectorAll("h1")[2].style.fontSize = "1rem";

    document.querySelectorAll("h1")[3].style.fontSize = "1em";
    document.querySelectorAll("h1")[3].style.textAlign = "center";
    document.querySelectorAll("h1")[3].style.color = "red";
    document.querySelectorAll("h1")[3].style.paddingBottom = "10px";


const resetBtn = document.querySelector("#reset");

function reset() {
  myInput.value = "";
  inserted.innerText = "";
}
resetBtn.addEventListener("click", reset);


const inserted = document.getElementById("myInput");
inserted.addEventListener("input", function (event) {
  let converted = event.target.value;

  let dollarValue = document.getElementById("dollarId");
  dollarAmt.innerHTML = converted * 1.00;

  let eurosValue = document.getElementById("eurosId");
  convAmt.innerHTML = converted * .83;
});

// var nodelist = document.getElementsByTagName("h1").length;
// console.log(nodelist);
