var calPoints = function(operations) {
    let repo = [];
    let initialValue = 0;
    for(let op of ops) {
      if (op === "+") {
        let item1 = repo[repo.length - 1]; 
        let item2 = repo[repo.length - 2]; 
        let item3 = repo.push(item1 + item2)
      } else if(op === "D") {
        let item4 = repo[repo.length - 1];
        repo.push(item4*2);         
      } else if(op === "C") {
        repo.pop();
      } else {
        repo.push(parseInt(op));
      }
    }
    return repo.reduce((acc, curr) => acc+curr, initialValue)
  };
console.log(calPoints(ops = ["5","2","C","D","+"]));  