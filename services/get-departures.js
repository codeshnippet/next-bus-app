
export const getDepartures = (stopId) => {
  return fetch(`https://www.mvg.de/fahrinfo/api/departure/${stopId}?footway=0`, {
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
