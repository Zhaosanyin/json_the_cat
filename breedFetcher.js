// const request = require('request'); //any path way problems

// const breedName = 'Siberian';
// const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// request(url, (error, response, body) => {
//   if (error) {
//     console.log('Error occurred: ', error);
//     return;
//   }

//   const data = JSON.parse(body);
//   console.log(data);
//   console.log(typeof body);
//   console.log(typeof data);
  
// });

const request = require('request');
const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(`Error fetching breed information: ${error}`);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Breed "${breedName}" not found`);
    process.exit();  
    // return;
  }
  console.log(data[0].description);
});
