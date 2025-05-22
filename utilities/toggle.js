// document.getElementById("addmoney").style.display = "block";
document.getElementById("cashout").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("cashout", "none");
  handleToggle("addmoney", "block");
});

document.getElementById("cashout-box").addEventListener("click", function () {
  handleToggle("addmoney", "none");
  handleToggle("cashout", "block");
});


