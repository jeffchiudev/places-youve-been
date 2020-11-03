//business logic for destinations
function Destinations() {
  this.places = []; //e.g. Canada, USA, Japan etc. 
  this.placeId = 0;
}

Destinations.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

Destinations.prototype.assignId = function() {
  this.placeId += 1;
  return this.placeId;
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

function showLocation(locationId) {
  const location = userPlace.findPlace(locationId);
  $("show-locations").show()
  $("user-country").html(location.userCountry);
  $("user-city").html(location.userCity);
  $("user-landmark").html(location.userLandmark);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class="deleteButton" id=" + + location.id + ">Delete</button>");
}

function attachLocationlisteners() {
  $("ul#locations").on("click", "li", function() {
    showLocation(this.id);
  });
};

$(document).ready(function() {
  attachLocationlisteners();
  $("form#new-location").submit(function(event) {
    event.preventDefault();
    const userCountry = $("input#new-country").val();
    const userCity = $("input#new-city").val();
    const userLandmark = $("input#new-landmark").val();
    
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