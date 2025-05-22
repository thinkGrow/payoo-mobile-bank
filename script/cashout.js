document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // const amount = document.getElementById("cashout-amount-number").value;
    const amount = getInputValueByID("cashout-amount-number");
    // const pin = document.getElementById("cashout-pin-number").value;
    const pin = getInputValueByID("cashout-pin-number");
    const account = document.getElementById("account-number").value;
    // const mainBalance = document.getElementById("main-balance").innerText;
    const mainBalance = getInnerTextById("main-balance");

    convertedAmount = parseFloat(amount);

    const convertedMainBalance = parseFloat(mainBalance);

    if (account.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance - amount;
        setInnerTextByIDandValue("main-balance", sum);
      } else {
        alert("Pin number not valid.");
      }
    } else {
      alert("Account number not valid.");
    }
  });
