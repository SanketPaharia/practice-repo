// Add the coffee to local storage with key "coffee"

let url = "https://masai-mock-api.herokuapp.com/coffee/menu" ;
fetch(url)
  .then(function (response) {
    // The JSON data will arrive here
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
  });