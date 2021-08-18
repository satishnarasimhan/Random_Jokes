const apiUrl = "https://api.chucknorris.io/jokes/random"

async function generateJoke() {
    const response = await fetch(apiUrl)
    const jsonResponse = await response.json()

    console.log(jsonResponse.value)

    document.getElementById("joke").innerHTML = jsonResponse.value
}

generateJoke()