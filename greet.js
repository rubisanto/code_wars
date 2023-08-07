function greet (name, owner) {
    // Add code here
    //1 - vérifier si le name est égal à owner
    if (name !== owner) {
      return 'Hello guest'
    }
    return 'Hello boss'
  }
  
console.log(greet('Daniel', 'Daniel'));