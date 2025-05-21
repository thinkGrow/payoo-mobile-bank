document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    //   var username = document.getElementById("username").value;

    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    const convertedPin = parseInt(pinNumber);
    console.log(accountNumber.length, pinNumber);

    if (accountNumber.length === 11) {
      console.log("yes - account");
      if (parseInt(pinNumber) === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("Invalid PIN");
      }
    } else {
      alert("Invalid Account Number");
    }

    event.preventDefault();
  });
