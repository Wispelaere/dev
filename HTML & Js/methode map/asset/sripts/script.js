


// il va creer un deuxieme tableau et mettre tout les nombres donc numbers dans le nouveau tableau et les afficher


// const numbers = [1,2,6,8];
// const mapped = numbers.map(num => num * 2)
// console.log(mapped)



// il prend dans le tableau les name du tableau et les retranscrit dans un autre


const people = [
    {name:"Victor", id: 1},
    {name:"Lea", id: 2},
    {name:"Jules", id: 3},
]

const namesFromPeople = people.map     // ici il creer une variable qui est égale a sont nom de tableau + .map
(obj => obj.name)                    // on veut afficher le name du tableau donc la colonne name donc on rajoute .name
console.log(namesFromPeople);