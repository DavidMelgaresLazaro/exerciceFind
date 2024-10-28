//? High Order Function

/*
function hof (fn) {
  fn();
}
*/

/*
function hof () {

  return () => {}
}
*/

function saludar () {
  console.log('Hola!');  
}

for (let i = 1; i <= 5; i ++) {
  saludar();
}


let total = 5;

for (let i = 1; i <= 5; i++) {
  total++;
}

function repetirCincoVeces (callback) { // HOF  
  for (let i = 1; i <= 5; i++) {
    callback();
  }
}

repetirCincoVeces(saludar);


let totalNuevo = 0;
repetirCincoVeces(() => { totalNuevo++ });


//******************************************/


function recorreUnArrayYTeDoySusValores (array, callback) {
  for (let i = 0; i < array.length; i++) {
    const valorDelArray = array[i];
    // aquí pondrás tu código
    callback(valorDelArray, i, array);

  }
}

const nums = [2, 6, -3, 14];

recorreUnArrayYTeDoySusValores(nums, () => { console.log('reccorriendo') })
recorreUnArrayYTeDoySusValores(nums, (num) => { console.log(num) })
recorreUnArrayYTeDoySusValores(nums, (numero, indice) => { console.log(numero, indice) })





//* Ya tenemos un método de los arrays que hace exactamente eso

const frutas = ['🍎', '🍐', '🍌'];



frutas.forEach(() => {
  console.log('frutas');  
});

frutas.forEach((fruta) => {
  console.log(`fruta: ${fruta}`);  
});

frutas.forEach((fruta, i) => {
  console.log(`Fruta ${i + 1}: ${fruta}`);
});


//******************************/

