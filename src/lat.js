const location1 = [28.426846, 77.088834];
const location2 = [28.394231, 77.050308];
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  console.log(d);
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

getDistanceFromLatLonInKm(
  location1[0],
  location1[1],
  location2[0],
  location2[1]
);
