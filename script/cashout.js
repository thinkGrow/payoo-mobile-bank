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

    if (!amount || amount < 0) {
      alert("Invalid Amount");
      return;
    } else if (amount > mainBalance) {
      alert("You do not sufficient balance");
      return;
    }

    if (!pin) {
      alert("Please enter a PIN.");
      return;
    }

    if (account.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance - amount;
        setInnerTextByIDandValue("main-balance", sum);

        const selectedBank = document.getElementById("bank-select").value;
        const container = document.getElementById("transaction-container");

        //Method 1
        // const p = document.createElement("p");
        // p.innerText = `
        //   Withdrawn ${amount} from ${account}
        // `;
        // console.log(p);
        // container.appendChild(p);

        // Method 2
        const div = document.createElement("div");
        div.classList.add("bg-red-400");
        div.innerHTML = `
      <h1 class="text-yellow-300"> Cashout money from ${selectedBank} </h1>
      <h3>Amount: ${amount} </h3>
      <p>Account number: ${account} </p>
      <br>
      `;

        container.appendChild(div);
      } else {
        alert("Pin number not valid.");
      }
    } else {
      alert("Account number not valid.");
    }
  });
