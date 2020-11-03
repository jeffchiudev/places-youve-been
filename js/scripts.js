//business logic for destinations
function Destinations() {
  this.places = []; //e.g. Canada, USA, Japan etc. 
  this.placeID = 0;
}

Destinations.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

Destinations.prototype.assignId = function() {
  this.placeID += 1;
  return this.placeID;
}

Destinations.prototype.findPlace = function(id) {
  for (let i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  };
  return false;
}

Destinations.prototype.deletePlace = function(id) {
  for (let i=0;i<this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}

//business logic for location details
function Location(country, city, landmark) {  //add when, notes, recomendations, resataurants
  this.country = country;
  this.city = city;
  this.landmark = landmark;
//  this.when = when;
//  this.notes = notes;
//  this.recomendations = recommendations;
//  this.restaurants = restaurants;
}
//code passed

Location.prototype.placeToGo = function() {
  return this.city + ", " + this.country;
}

//User Interface Logic 
let userPlace = new Destinations();

function displayLocationDetails(locationToDisplay) {
  let placesList = $("ul#locations");
  let htmlForLocationInfo = "";
  locationToDisplay.places.forEach(function(place) {
    htmlForLocationInfo += "<li id=" + place.id + ">" + place.country + " " + place.city + " " + place.landmark + "</li>";
  });
  placesList.html(htmlForLocationInfo);
};

$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();
    const userCountry = $("input#new-country").val();
    const userCity = $("input#new-city").val();
    const userLandmark = $("input#new-Landmark").val();
    
    let newPlace = new Location(userCountry, userCity, userLandmark);
    userPlace.addPlace(newPlace);
    displayLocationDetails(userPlace);
  });
});



//Key: 
//"Largest"/parent designation: Destination (e.g. Spain)
//1st level child designation: Location (e.g. Barcelona)
//2nd level child designation: landmark, when, notes, recs, restaurants

//Test Code. 
/*
let newPlaces = new Destinations();
let place1 = new Location("USA", "Portland", "Mt. Tabor");
let place2 = new Location("Canada", "Vancouver", "Capalona Bridge");
newPlaces.addPlace(place1);
newPlaces.addPlace(place2);
*/