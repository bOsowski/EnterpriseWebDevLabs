fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter( contact => contact.completed).map( contact => {
        return {
            userId: contact.userId,
            title: contact.title
        }
     })
     console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  });
 