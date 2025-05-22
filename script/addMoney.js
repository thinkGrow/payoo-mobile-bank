document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("hello");
    // getInputValueByID();
    const amount = getInputValueByID("amount-number");
    const pin = getInputValueByID("pin-number");
    const account = document.getElementById("account-number").value;
    const mainBalance = getInnerTextById("main-balance");

    // console.log("Main balance", mainBalance);

    // console.log(amount, pin);

    if (amount && pin) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        setInnerTextByIDandValue("main-balance", sum);

        const container = document.getElementById("transaction-container");
        const p = document.createElement("p");
        p.innerText = `
          added ${amount} from ${account}
        `;

        console.log(p);
        container.appendChild(p);
      }
    } else {
      alert("Enter Amount");
    }

    // return amount;
  });
