let myHouse = {
    stories: 2,
    parking: "none",
    bedrooms: 2,
    garden: "Yes",
    energy_efficiency_rating: "D",
}

let myCar = {
    colour: "red",
    number_of_wheels: 4,
    number_of_seats: 2,
    mpg: 20,
}

let myFavouriteFilm = {
    title: "The Dark Knight",
    release_year: 2008,
    lead_actor: "Christian Bale",
}

let person = {
    name: "Ben",
    likesChocolate: true,
  };


function likesChocolate() {
    if (person.likesChocolate == true) {
        console.log(`${person.name} loves chocolate`)
    } else {
        console.log(`${person.name} hates chocolate`)
    }
}