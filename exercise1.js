fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter( contact => contact.completed) // Complete this code
     console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  });