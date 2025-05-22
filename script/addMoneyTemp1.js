document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount-number").value;
    const convertedAmount = parseFloat(amount);
    // console.log("amount", amount);
    // console.log("converted amount", convertedAmount);
    const pin = document.getElementById("pin-number").value;
    convertedPin = parseInt(pin);
    // console.log(convertedPin);

    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseInt(mainBalance);
    // console.log("main balaance", convertedMainBalance);

    if (amount && pin) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
      }
    } else {
      alert("Enter Amount");
    }
  });
