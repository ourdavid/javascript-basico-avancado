const name = "David"
const age = 22

// and
console.log( name == 'David' && age === 22) // True
console.log( name == 'William' && age === 22) // True

//or
console.log( name == 'David' || age === 22) // True
console.log( name == 'William' || age === 22) // True

console.log( name == 'William' || age === 18) // False

//not

console.log(!(name == 'David')) //False
console.log(!(name == 'William')) //True

