
export const getNearbyStations = (latitude, longitude) => {
  return fetch(`https://www.mvg.de/fahrinfo/api/location/nearby?latitude=${latitude}&longitude=${longitude}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'X-MVG-Authorization-Key': '12345'
    }
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error(error);
  });
};
