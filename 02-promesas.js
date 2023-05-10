function sumar1(num, callback) {}

function sumar1Promesa(num) {
  var promesa = new Promise((resolve, reject) => {
    if (num >= 7) {
      reject("Número muy grande");
      return;
    }
    setTimeout(() => {
      resolve(num + 1);
    }, 2000);
  });

  return promesa;
}

/*sumar1Promesa(5).then((nuevoValor)=>{
console.log(nuevoValor);
sumar1Promesa(nuevoValor).then((nuevoValor2)=>{
    console.log(nuevoValor2);
    }) 
})*/

/*sumar1Promesa(5).then((nuevoValor) => {
    console.log(nuevoValor);
    return sumar1Promesa(nuevoValor);
  }).then((nuevoValor) => {
    console.log(nuevoValor);
    return sumar1Promesa(nuevoValor);
  }).then((nuevoValor) => {
    console.log(nuevoValor);
}).catch((err)=>{
    console.log(err);
})*/

sumar1Promesa(5).then((nuevoValor) => {
    return sumar1Promesa(nuevoValor);
  })
.then((nuevoValor) => sumar1Promesa(nuevoValor))
.then(sumar1Promesa)
.catch((err)=>{
    console.log(err);
})
