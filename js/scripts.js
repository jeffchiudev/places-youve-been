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

//business logic for location details
function Location(location, landmark, when, notes, recommendations, restaurants) { //add country?
  this.location = location;
  this.landmark = landmark;
  this.when = when;
  this.notes = notes;
  this.recomendations = recommendations;
  this.restaurants = restaurants;
}

$(document).ready(function) {
  
}


//"Largest"/parent designation: Destination (e.g. Spain)
//1st level child designation: Location (e.g. Barcelona)
//2nd level child designation: landmark, when, notes, recs, restaurants
