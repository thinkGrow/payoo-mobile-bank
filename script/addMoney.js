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

        // const selectedBank = getInputValueByID("bank-select");
        const selectedBank = document.getElementById("bank-select").value;
        // console.log(selectedBank);

        const container = document.getElementById("transaction-container");

        // Method 1
        //   const p = document.createElement("p");
        //   p.innerText = `
        //     added ${amount} from ${account} from ${selectedBank} Bank
        //   `;

        //   console.log(p);
        //   container.appendChild(p);
        // }

        // Method 2
        const div = document.createElement("div");
        div.classList.add("bg-red-400");
        div.innerHTML = `
      <h1 class="text-yellow-300"> Added money from ${selectedBank} </h1>
      <h3>Amount: ${amount} </h3>
      <p>Account number: ${account} </p>
      <br>
      `;

        container.appendChild(div);
      }
    } else {
      alert("Enter Amount");
    }

    // return amount;
  });
