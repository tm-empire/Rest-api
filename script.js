const contentContainer = document.querySelector(".content-container")
const regionFilter = document.querySelector(`[name="region"]`)
const searchInput = document.querySelector(".search-bar input")

//declaring a variable to store all country data with let
let allCountryData;
async function restApiCaller() {
    const response = await fetch('/.netlify/functions/getCountries');
    
    const data = await response.json();
    console.log(data.data)
    allCountryData = data.data.objects

    // console.log(data.data.objects[1].flag.url_png) // flag
    // console.log(data.data.objects[2].names.common) //"Albania"
    // console.log(data.data.objects[2].population)  // population
    // console.log(data.data.objects[2].region) // region
    // console.log(data.data.objects[2].capitals[0].name)  // capital


    //creating a new country card and its element)
    allCountryData.forEach((Element) => {
        const array = [Element?.names?.common,
        Element?.flag?.url_png,
        Element?.names?.alternates[0],
        Element?.population,
        Element?.region,
        Element?.subregion,
        Element?.capitals[0]?.name,
        Element?.timezones,
        Element?.currencies[0]?.name,
        Element?.languages,
        Element?.borders
        ]
        const countryCard = document.createElement("a")
        countryCard.classList.add("country-card")

        countryCard.href = (`/countryinfo.html?array=${encodeURIComponent(JSON.stringify(array))}`)


        contentContainer.append(countryCard)
        const imgFlag = document.createElement("img")
        countryCard.append(imgFlag)

        imgFlag.src = Element?.flag?.url_png

        const countryDetails = document.createElement("div")
        countryDetails.classList.add("country-details")
        countryCard.append(countryDetails)
        const countryName = document.createElement("p")
        countryName.classList.add("name")

        countryName.innerText = `${Element?.names?.common}`

        const population = document.createElement("p")
        population.classList.add("population")

        population.innerText = `Population: ${Element?.population}`

        const region = document.createElement("p")
        region.classList.add("region")

        region.innerText = `Region: ${Element?.region}`

        const capital = document.createElement("p")
        capital.classList.add("capital")

        capital.innerText = `Capital: ${Element?.capitals[0]?.name}`

        countryDetails.append(countryName, population, region, capital)

    })



}

async function main() {
    await restApiCaller();
    // searching by name and words
    searchInput.addEventListener("input", (e) => {
        // console.log(allCountryData)
        // console.log(e.target.value)
        let SearchedCountries = allCountryData.filter((Element) => {
            return Element.names.common.toLowerCase().includes(e.target.value.toLowerCase())
        })
        // console.log(SearchedCountries)


        //making contentContainer zero befor looping
        contentContainer.innerHTML = "";

        SearchedCountries.forEach((Element) => {
            const array = [Element?.names?.common,
            Element?.flag?.url_png,
            Element?.names?.alternates[0],
            Element?.population,
            Element?.region,
            Element?.subregion,
            Element?.capitals[0]?.name,
            Element?.timezones,
            Element?.currencies[0]?.name,
            Element?.languages,
            Element?.borders
            ]
            const countryCard = document.createElement("a")
            countryCard.classList.add("country-card")

            countryCard.href = (`/countryinfo.html?array=${encodeURIComponent(JSON.stringify(array))}`)


            contentContainer.append(countryCard)
            const imgFlag = document.createElement("img")
            countryCard.append(imgFlag)

            imgFlag.src = Element?.flag?.url_png

            const countryDetails = document.createElement("div")
            countryDetails.classList.add("country-details")
            countryCard.append(countryDetails)
            const countryName = document.createElement("p")
            countryName.classList.add("name")

            countryName.innerText = `${Element?.names?.common}`

            const population = document.createElement("p")
            population.classList.add("population")

            population.innerText = `Population: ${Element?.population}`

            const region = document.createElement("p")
            region.classList.add("region")

            region.innerText = `Region: ${Element?.region}`

            const capital = document.createElement("p")
            capital.classList.add("capital")

            capital.innerText = `Capital: ${Element?.capitals[0]?.name}`

            countryDetails.append(countryName, population, region, capital)

        })







    });
}


main();

regionFilter.addEventListener("change", (e) => {
    if (e.target.value === "region or clear") {
        console.log("clear")
        contentContainer.innerHTML = " "
        restApiCaller()
    }
    else {


        fetch(`/.netlify/functions/getCountries?region=${e.target.value}`)
            .then(function (response) { return response.json(); })
            .then((data) => {
                console.log(data);
                const allCountryData = data.data.objects

                // makng zero content befor looping
                contentContainer.innerHTML = " "

                //creating a card after filtered region
                allCountryData.forEach((Element) => {
                    const array = [Element?.names?.common,
                    Element?.flag?.url_png,
                    Element?.names?.alternates[0],
                    Element?.population,
                    Element?.region,
                    Element?.subregion,
                    Element?.capitals[0]?.name,
                    Element?.timezones,
                    Element?.currencies[0]?.name,
                    Element?.languages,
                    Element?.borders
                    ]
                    const countryCard = document.createElement("a")
                    countryCard.classList.add("country-card")

                    countryCard.href = (`/countryinfo.html?array=${encodeURIComponent(JSON.stringify(array))}`)


                    contentContainer.append(countryCard)
                    const imgFlag = document.createElement("img")
                    countryCard.append(imgFlag)

                    imgFlag.src = Element?.flag?.url_png

                    const countryDetails = document.createElement("div")
                    countryDetails.classList.add("country-details")
                    countryCard.append(countryDetails)
                    const countryName = document.createElement("p")
                    countryName.classList.add("name")

                    countryName.innerText = `${Element?.names?.common}`

                    const population = document.createElement("p")
                    population.classList.add("population")

                    population.innerText = `Population: ${Element?.population}`

                    const region = document.createElement("p")
                    region.classList.add("region")

                    region.innerText = `Region: ${Element?.region}`

                    const capital = document.createElement("p")
                    capital.classList.add("capital")

                    capital.innerText = `Capital: ${Element?.capitals[0]?.name}`

                    countryDetails.append(countryName, population, region, capital)

                })
            });
    }
})
























