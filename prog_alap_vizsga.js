const matek = require('./modul');

// 1.
//szöveges adat
let betuk = 'string'

//számok
let szamok = 123; //number 

//logokai változó (true vagy false)
let isMale = true //Boolean 

//2.

// A const egy állandó változó mely a program futása alatt nem változik, nem változhat. Ha mégis olyan kódot írunk 
//melyben módosítannk, hibaüzenetet kapunk Pl.: const freefallV = 9,8 (nehézségi gyorsulás)
//A let-tel deklarál változók változhtnak futás alatt. Pl.: let count = 0;

//3. 
//Referencia szerinti értékátadás:
//Ha például egy tömböt adunk át paraméterként, és azon módosításokat
//végez a program, akkor a hívó változó vagy tömb is módosul.
//pl.: 
let a =['B', 'C']

console.log(a); // B C
const func = (a) => {
    a.push('A');
}

console.log(func(a)); // B C A
console.log(a); // B C A

//Érték szerinti paraméterátadás
//Ha a függvények meghívásakor paramétert adunk át neki, melyet a
//függvényen belül módosítunk, akkor a behívott változó értéke nem módosul
//pl.:
let b = 0;

console.log(b); // 0
const func2 = (N) => {
    N = 2;
    return N;
}

console.log(func2(b)) // 2
console.log(b); // 0

//4.
console.log('4. Feladat')
const containsElement = (T, n) => {
    let vane = false;
    for ( let i = 0; i < T.length; i++) {
        if (T[i] === n) {
            vane = true;
            break;
        }
    }
    return vane;
}

let tomb = [1, 2, 3];

console.log(containsElement(tomb, 3));
console.log(containsElement(tomb, 4));

//5.
console.log('5. Feladat')

let humanarr = [{name:'Feri', age:25},{name:'Ifj Feri', age:2}] 

const oldest = (human) => {
    let max = human[0].age;
    let oldest = human[0].age;
  for ( let i = 0; i < human.length; i++){
      if (human[i].age > max) {
          oldest = human[i].name;
      }
  }
  return oldest;
}

console.log(oldest(humanarr));

//6.
console.log('6. Feladat')

const paros = () => {
    for (let i=1; i < 100; i++)  {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
paros();

//7. Metszet
console.log('7. Feladat')

const tombegy = [1,2,3,4,5,6,7,8,9,0];
const tombketto = [4,5,6];
let tombfinal = [];

for (let i = 0; i < tombegy.length; i++) {
    for (let j = 0; j < tombketto.length; j++) {
        if (tombegy[i] === tombketto[j]) {
           tombfinal.push(tombegy[i]);     
        }
    }
}

console.log(tombegy);
console.log(tombketto);
console.log(tombfinal);

//8. 
console.log('8. Feladat')

console.log(matek.add(2, 3));
console.log(matek.multi(2, 3));
console.log(matek.hatv(2, 3));

//9.
console.log('8. Feladat')
const tomb2D = (x, y) => {
    let finaltomb = [];
    for (let i = 0; i < x; i++) {
      finaltomb[i] = [];
      for (let j = 0; j < y; j++) {
        finaltomb[i][j] = i * j;
      }
    }
    return finaltomb;
  };
  
  console.log(tomb2D(3, 3));

  


  
