// to make a dark and light mode 
const toggleMode = document.querySelector(".light-mode")
const header = document.querySelector(".head")
const body = document.body
const searchBar = document.querySelector(".search-bar")
const searchBarInput = document.querySelector(".search-bar input")
const searchBarIcon = document.querySelector(".fa-magnifying-glass")
const countryDetailsAll = document.querySelectorAll(".country-details")
const applyingMode = [header, body, searchBar, searchBarInput, searchBarIcon, ...countryDetailsAll]
toggleMode.addEventListener('click', (e) => {
    applyingMode.forEach((item, index, array) => {
        // console.log(item)
        item.classList.toggle('light')
        // debugger
    })
})