//            Object

let student={ name:'Perrine', favoriteFood:"Carotte", city:"Paris",
}
let values=Object.values(student);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);

