fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    console.log(json);
  })
  .catch(function(err) {
    console.log(err);
  });
