const orderArray = (arr) => {
  const results = [arr[0]];
  for(let i=1;i<arr.length;i++){
      const current = arr[i];
      for(let j=0;j<results.length;j++){
          if(results.length == 1) {
              if(results[0].age < current.age){
                  results.unshift(current)
                  break
              } else if(results[j].age === current.age){
                  results.splice(j,0,current);
                  break
              } else {
                  results.push(current)
                  break
              }
          } else {
              if(results[j].age > current.age){
                  if(j == results.length - 1){
                      results.push(current);
                      break
                  } else if(results[j+1].age < current.age){
                      results.splice(j+1,0,current);
                      break
                  } 
              } else if(results[j].age === current.age){
                      results.splice(j,0,current);
                      break
              } else {
                  results.unshift(current)
                  break
              }
          }
      } 
  } return results
}

const getNames = (arr) => {
  const names = [];
  let personas = orderArray(arr)
  for(let i=0;i<personas.length;i++) {
      names.push(personas[i].name);
  } return names
}
module.exports = {
    getNames,
}