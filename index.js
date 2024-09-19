document.addEventListener("DOMContentLoaded", function () {
  let deviseChoisieEntree = "USD";
  let deviseChoisieSortie = "USD";
  let valeurEntree = 0;
  const apiKey = "cb292f1e4400e868b1c08c85";
  document.getElementById("valeur_entree").addEventListener("input", () => {
    valeurEntree = document.getElementById("valeur_entree").value;
    console.log(valeurEntree);
    fetchExchangeRate()
  });

  async function fetchListedCurrencies() {
    const url =
      "https://v6.exchangerate-api.com/v6/cb292f1e4400e868b1c08c85/latest/USD";
    const response = await fetch(url)
    const data = await response.json()

    displayCurrencies(data)
  }

  async function fetchExchangeRate() {
    console.log(deviseChoisieEntree, deviseChoisieSortie)
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${deviseChoisieEntree}/${deviseChoisieSortie}/${valeurEntree}`;
    const response = await fetch(url);
    const data = await response.json();

    displayResult(data);
  }

  document.getElementById("devise1").addEventListener("change", () => {
    deviseChoisieEntree = document.getElementById("devise1").value;
    console.log(deviseChoisieEntree);
    fetchExchangeRate()
  });
  document.getElementById("devise2").addEventListener("change", () => {
    deviseChoisieSortie = document.getElementById("devise2").value;
    console.log(deviseChoisieSortie);
    fetchExchangeRate()
  });

  const displayResult = (data) => {
    console.log(data.conversion_result);

    document.getElementById("result").textContent = data.conversion_result
  }

  

  const displayCurrencies = (data) => {
    // document.getElementById("devise1").addEventListener("input", () => {
    //   deviseChoisieEntree = document.getElementById("devise1").value;
    //   console.log(deviseChoisieEntree);
    //   fetchExchangeRate()
    //   console.log(Object.keys(data.conversion_rates));
    // });
    // document.getElementById("devise2").addEventListener("input", () => {
    //   deviseChoisieSortie = document.getElementById("devise2").value;
    //   console.log(deviseChoisieSortie);
    //   console.log(data.conversion_rates[deviseChoisieSortie])

      
    // });

    for (let i = 0; i < Object.keys(data.conversion_rates).length; i++) {
      const optionCreator = document.createElement("option");
      document
        .getElementById("devise1")
        .appendChild(optionCreator).textContent = Object.keys(
        data.conversion_rates
      )[i];
      optionCreator.value = Object.keys(data.conversion_rates)[i];
    }
    for (let i = 0; i < Object.keys(data.conversion_rates).length; i++) {
      const optionCreator = document.createElement("option");
      document
        .getElementById("devise2")
        .appendChild(optionCreator).textContent = Object.keys(
        data.conversion_rates
      )[i];
      optionCreator.value = Object.keys(data.conversion_rates)[i];
    }
  };

  fetchListedCurrencies();
});
