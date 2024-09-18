document.addEventListener("DOMContentLoaded", function () {
    let valeurEntree = 0
    let valeurSortie = 0
    const apiKey = "9488b875b79b0b4bdf68ef1d";

    async function fetchExchangeRate() {
        const url =
          "https://v6.exchangerate-api.com/v6/9488b875b79b0b4bdf68ef1d/latest/USD";
        const response = await fetch(url)
        const data = await response.json()

        console.log(fetch(url))
        displayResult(data)
    }
    // console.log(data.base_code)

    const displayResult = (data) => {
        document.querySelector("h3").textContent = data.conversion_rates.USD
    }

    fetchExchangeRate()
    
})