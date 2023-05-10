console.log("Hola mundo");

function sumar1(num, callback) {
    if (num >= 7) {
        callback("Número muy grande")
        return;
    }
  setTimeout(() => {
      //return num + 1;
      callback(null, num+1);
    },2000)
}
//console.log(sumar1(5));

sumar1(5,(error, nuevoValor)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(nuevoValor);
    sumar1(nuevoValor,(error, nuevoValor2)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log(nuevoValor2);
    })
})
