// const name = new URLSearchParams(window.location.search).get(`name`);
// // document.write(name)
// console.log(name)
// const flag_url = new URLSearchParams(window.location.search).get(`flag_url`);
// const flagImg = document.createElement("img");
// flagImg.src = flag_url
// document.body.append(flagImg)

// console.log(flag_url)

const searchParams = new URLSearchParams(window.location.search)
console.log(searchParams)
const array = JSON.parse(searchParams.get("array"))
console.log(array)




const container = document.querySelector(".container")
const myHtml = (`
     <div class="image">
    <img src="${array[1]}" alt="flag">
    </div>
    <div class="details">
        <div class="details-one">
            <h1>${array[0]}</h1>
            <p><b>Native Name:</b> ${array[2]}</p>
            <p><b>Population:</b> ${array[3]}</p>
            <p><b>Region:</b> ${array[4]}</p>
            <p><b>Sub Region:</b> ${array[5]}</p>
            <p><b>Capital:</b> ${array[6]}</p>
        </div>
        <div class="details-two">
            <p><b>Time Zone:</b>${array[7].join(",")}</p>
            <p><b>Currencies:</b> ${array[8]}</p>
            <p><b>Languages:</b>  ${array[9].map((element) => element.name).join(",")}</p>
        </div>
        <p class="border-cont"><b>Border Countries: </b> </p>
    </div>
    `)
container.innerHTML = myHtml







const borderCont = document.querySelector(".border-cont")

if (array[10]) {
    array[10].map((element) => {
         fetch(`/.netlify/functions/getCountries?code=${element}`)
            .then(function (response) { return response.json(); })
            .then(function (data) {
                // console.log(data);
                const singleCountryData = data.data.objects[0]
                console.log(singleCountryData)
                const countriesAnchor = document.createElement("a")
                countriesAnchor.innerText = singleCountryData?.names?.common
                const array = [singleCountryData.names?.common,
                singleCountryData.flag?.url_png,
                singleCountryData.names?.alternates[0],
                singleCountryData.population,
                singleCountryData.region,
                singleCountryData.subregion,
                singleCountryData.capitals[0]?.name,
                singleCountryData.timezones,
                singleCountryData.currencies[0]?.name,
                singleCountryData.languages,
                singleCountryData.borders
                ]
                countriesAnchor.href = (`/countryinfo.html?array=${encodeURIComponent(JSON.stringify(array))}`)
                borderCont.append(countriesAnchor)
            });
    })
}




