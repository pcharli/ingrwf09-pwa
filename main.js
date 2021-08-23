axios.get("https://api.punkapi.com/v2/beers")
.then((response) => {
    //console.log(response.data)
    const listing = document.querySelector(".beers-list")
    response.data.forEach(beer => {
        listing.innerHTML += `<li class="beers-item">${beer.name}</li>`
    })
})
.catch(error => console.log(error))