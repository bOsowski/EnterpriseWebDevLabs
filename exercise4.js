
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter( contact => contact.completed).reduce( (previousValue, currentValue) => {
        return previousValue + 1
     }, 0)
     console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  });