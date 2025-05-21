document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    //   var username = document.getElementById("username").value;

    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(accountNumber.length, pinNumber);

    if (accountNumber.length === 11) {
      console.log("yes - account");
      if (pinNumber === "1234") {
        console.log("yes - pin");
      } else {
        console.log("invalid pin");
      }
    } else {
      console.log("Invalid Account Number");
    }

    event.preventDefault();
  });
