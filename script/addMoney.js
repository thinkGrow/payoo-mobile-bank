document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("hello");
    // getInputValueByID();
    const amount = getInputValueByID("amount-number");
    const pin = getInputValueByID("pin-number");
    const account = document.getElementById("account-number").value;
    let mainBalance = getInnerTextById("main-balance");

    // console.log("Main balance", mainBalance);

    // console.log(amount, pin);

    if (amount && pin) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        setInnerTextByIDandValue("main-balance", sum);
      }
    } else {
      alert("Enter Amount");
    }

    // return amount;
  });
