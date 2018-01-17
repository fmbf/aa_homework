console.log("Hello from the JavaScript console!");

// Ajax example:
// $.ajax({
//   type: 'GET',
//   url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b",
//   success(data) {
//     console.log("We have your weather!");
//     console.log(data);
//   },
//   error() {
//     console.error("An error occurred.");
//   },
// });

// Your AJAX request here
$.ajax({
  type: 'get',
  // weather in LA:
  url: 'http://api.openweathermap.org/data/2.5/forecast?id=5368381&APPID=bcb83c4b54aee8418983c2aff3073b3b',
  success(data) {
    console.log(data);
  },
  error() {
    console.error("An error m8.");
  }

});
// Add another console log here, outside your AJAX request
console.log('Yay we won!');
