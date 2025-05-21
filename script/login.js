document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    //   var username = document.getElementById("username").value;

    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(accountNumber.length, pinNumber);

    if (accountNumber.length === 11) {
      console.log("yes");
    } else {
      console.log("Invalid Account Number");
    }

    event.preventDefault();
  });
