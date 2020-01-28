fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.map( contact => contact.title)
     console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  });
 