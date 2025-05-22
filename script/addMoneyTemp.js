document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("hello");
    // getInputValueByID();
    const amount = getInputValueByID("amount-number");
    const pin = getInputValueByID("pin-number");
    const account = getElementById("account-number").value;


    console.log(amount);
    console.log(pin);

    if (amount && pin) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
      }
    } else {
      alert("Enter Amount");
    }

    // return amount;
  });
