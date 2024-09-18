document.addEventListener("DOMContentLoaded", function () {
    let deviseChoisieEntree = "USD";
    document.getElementById("valeur_entree").addEventListener("input", () => {
        let valeurEntree = document.getElementById("valeur_entree").value;
        console.log(valeurEntree)
    })
    
    
    async function fetchExchangeRate() {
    const url = `https://v6.exchangerate-api.com/v6/9488b875b79b0b4bdf68ef1d/latest/${deviseChoisieEntree}`;
    const response = await fetch(url);
    const data = await response.json();

    displayResult(data);
}

    const displayResult = (data) => {
        // document.querySelector("h3").textContent = data.conversion_rates.USD
        

        document.getElementById("devise1").addEventListener("input", () => {
          deviseChoisieEntree = document.getElementById("devise1").value;
          console.log(deviseChoisieEntree);
          fetchExchangeRate()
          console.log(Object.keys(data.conversion_rates));
        });
        document.getElementById("devise2").addEventListener("input", () => {
          let deviseChoisieSortie = document.getElementById("devise2").value;
          console.log(deviseChoisieSortie);
          console.log(typeof(deviseChoisieSortie))
          console.log(data.conversion_rates.deviseChoisieSortie)
        });

        
        for (let i = 0; i < Object.keys(data.conversion_rates).length; i++) {
            const optionCreator = document.createElement("option");
            document.getElementById("devise1").appendChild(optionCreator).textContent = Object.keys(
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


    }

    fetchExchangeRate()
    
})