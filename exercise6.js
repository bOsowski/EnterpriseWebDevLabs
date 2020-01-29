fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.reduce( (previousValue, currentValue) => {
        if(!currentValue.compleddted) return previousValue
        var foundUser = previousValue.find(user => user.userId == currentValue.userId)
        if(foundUser == undefined){
            foundUser = {
                userId: currentValue.userId,
                completed: 0
            }
            previousValue.push(foundUser)
        }         
        foundUser.completed += currentValue.completed
        return previousValue
     }, [])
     console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  });