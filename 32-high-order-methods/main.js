
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


let usuarios = [ // 0x999
  { // 0x111
    id: 1,
    name: 'Ivan',
    email: 'ivan@gmail.com',
    city: 'Barcelona',
    age: 22
  },
  { // 0x222
    id: 2,
    name: 'Carmen',
    email: 'carmencita@yahoo.com',
    city: 'Asturias',
    age: 18
  },
  { // 0x333
    id: 3,
    name: 'Josué',
    email: 'josu@gmail.com',
    city: 'Anzoategui',
    age:25
  },
  { // 0x444
    id: 4,
    name: 'Leo',
    email: 'leo@gmail.com',
    city: 'Madrid',
    age:20
  },
  { // 0x555
    id: 5,
    name: 'Carlos',
    email: 'carlos@hotmail.com',
    city: 'Barcelona',
    age: 45
  },
]


//* Algo que hacemos mucho es buscar en un array si un objeto se encuentra en el array
// Me invento un HOF

function encontrarUnObjeto (array, callback) {
  for (let i = 0; i < array.length; i++) {
    const objeto = array[i];
    if (callback(objeto, i)) {
      return objeto;
    }
  }
}

console.log(encontrarUnObjeto(usuarios, () => {
  return true
}));
console.log(encontrarUnObjeto(usuarios, () => {
  return false
}));

console.log(encontrarUnObjeto(usuarios, (usuario) => {
  if (usuario.name === 'Ivan') {
    return true;
  }
}));

console.log(encontrarUnObjeto(usuarios, (usuario) => {
  if (usuario.city === 'Madrid') {
    return true;
  }
}));


console.log(encontrarUnObjeto(usuarios, (usuario) => usuario.email.includes('yahoo')));


//* Esto es un método de JavaScript que sirve para encontrar elementos dentro de un array.

// .find() =>  Para hacerlo funcionar el primer callback que devuelva TRUE es el elemento que te va a retornar

const ivan = usuarios.find((usuario, i) => { return usuario.name === 'Ivan'})
const yahoo = usuarios.find(usuario => usuario.email.includes('yahoo'));

console.log(yahoo);


//********************************/


function encontrarVariosObjetos (array, callback) {

  const arrayFinal = [];

  for (let i = 0; i < array.length; i++) {
    const objeto = array[i];
    if (callback(objeto, i)) { // true
      arrayFinal.push(objeto);
    }
  }

  return arrayFinal;
}

console.log(encontrarVariosObjetos(usuarios, (usuario) => {
  return true;
}))

console.log(encontrarVariosObjetos(usuarios, (usuario) => {
  return false;
}))

console.log(encontrarVariosObjetos(usuarios, (usuario) => {
  return usuario.city === 'Barcelona';
}))


//* .filter() ==> sirve para encontrar varios objetos que devuelvan true a una condición


const usuariosYahoo = usuarios.filter(usuario => { return usuario.city === 'Barcelona' })
console.log(usuariosYahoo);



//**************************************************/

function modificarArray (array, callback) {

  const arrayFinal = [];

  for (let i = 0; i < array.length; i++) {

    const objeto = array[i];    
  
    // const modificacion =  { ...objeto, isAdmin: false };

    arrayFinal.push(callback(objeto, i));
  }


  return arrayFinal;
}

console.log(modificarArray(usuarios, (usuario) => {
  return { ...usuario, name: usuario.name.toUpperCase() }
}))


//************ */

//*  .map()  =>  Siempre retorna un array NUEVO con la MISMA CANTIDAD DE ELEMENTOS QUE EL ORIGINAL

//! Recuerda, lo que sea que retorne cada callback, será lo que se añada(push) en el nuevo array
                                      // 0x111                    0xabc
const nuevoArrayMapeado = usuarios.map((usuario) => {
  return {...usuario}
})  // 0x937634



// Quiero que pongas isAdmin: true a todos los usuarios que sean de barcelona


const nuevoArrayConIsAdmins = usuarios.map((usuario) => {
 if (usuario.city === 'Barcelona') {
  return { ...usuario, isAdmin: true }
 } else {
  return {...usuario};
 }
})

const nuevoArrayConIsAdminsCool = usuarios.map((usuario) => {
  return usuario.city === 'Barcelona' 
      ? { ...usuario, isAdmin: true }
      : {...usuario}
 })

 const nuevoArrayConIsAdminsSuperCool = usuarios.map((usuario) => usuario.city === 'Barcelona' ? { ...usuario, isAdmin: true } : {...usuario});

console.log(nuevoArrayConIsAdmins);


//***********************************/

//* .findIndex() ==> Exactamente igual que el find, pero es como si fuera un indexOf
//! si no lo encuentra ==> -1

const indexYahooEmail = usuarios.findIndex((usuario) => usuario.email.includes('outlook'));

console.log(indexYahooEmail);


//* .some() y .every() ==> simplemente retornan true o false dependiendo de lo que preguntes

// some, te devolverá true siempre y cuando almenos UN ELEMENTO CUMPLA LACONDICIÓN

console.log(usuarios.some((usuario) => usuario.city === 'Barcelona'));
console.log(usuarios.some((usuario) => usuario.city === 'Sevilla'));


console.log(usuarios.every((usuario) => usuario.city === 'Barcelona'));
console.log(usuarios.every((usuario) => usuario.name.length > 2));


//* .sort() ==> Sirve para ordenar arrays

//* El callback siempre te va a ofrecer 2 elementos por ITERACIÓN

//! El callback tiene que retornar o un número mayor que 0, o un número menor que 0 o 0

const nombres = ['alfredo', 'Alba', 'ALVARO'];

const nombresOrdenados = [...nombres].sort((nombreA, nombreB) => {
  if (nombreA.toLowerCase() < nombreB.toLowerCase()) return -1
  if (nombreA.toLowerCase() > nombreB.toLowerCase()) return 1
  return 0
})

console.log(nombresOrdenados)


const sortByAge = [...usuarios].sort((objA, objB) => {
  // console.log(objA.age, objB.age);
  
  if (objA.age < objB.age) return 1;
  if (objA.age > objB.age) return -1;
  return 0;

});

const sortByAgeCool = [...usuarios].sort((usuarioA, usuarioB) => usuarioB.age - usuarioA.age );

console.log(sortByAgeCool)


const sortByName = [...usuarios].sort((usuarioA, usuarioB) => usuarioA.name.toLowerCase().localeCompare(usuarioB.name.toLowerCase()))




//* Ejemplos de CRUD en el array de usuarios

// Añadir un usuario nuevo

const nuevoUsuario = {
  id: 6,
  name: 'Alfredo',
  email: 'alfi@gmail.com',
  city: 'Barcelona',
  age: 23,
}

// 0x999
//! Esto no PORQUE MUTA
// usuarios.push(nuevoUsuario);


// 0x043897634
usuarios = [...usuarios, nuevoUsuario];




// Eliminar un elemento de un array

//! Mutar caca 💩
// usuarios.splice()

const idCarmen = 2;

// 0xlñk43ñit
console.log(usuarios);

usuarios = usuarios.filter((usuario) => usuario.id !== idCarmen);

console.log(usuarios);


// Actualizar un usuario
const idAlfredo = 6;

usuarios = usuarios.map((usuario) => {
  return usuario.id === idAlfredo 
    ? { ...usuario, isMarried: false } 
    : { ...usuario }
});

console.log(usuarios);



const indexIvan = usuarios.findIndex((usuario) => usuario.name == 'Ivan');
usuarios = usuarios.toSpliced(indexIvan, 1);