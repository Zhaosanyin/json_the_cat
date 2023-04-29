const request = require('request'); //any path way problems

const breedName = 'Siberian';
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('Error occurred: ', error);
    return;
  }

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});