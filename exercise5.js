fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.reduce( (previousValue, currentValue) => {
        previousValue.push({
            userId: currentValue.userId,
            title: currentValue.title
        })
        return previousValue
     }, [])
     console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  });