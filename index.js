// Add your functions here
function map (array, func) {
  let r = []
  for (let i = 0; i < array.length; i++ ) {
    let element = array[i]
    r.push(func(element))
  }
  return r
}

function reduce(array, callback, start){
  let r = (!!start) ? start : array[0]
  let i = (!!start) ? 0 : 1
  for (; i < array.length; i++){
      r = callback(array[i], r)
  }
return r
}
