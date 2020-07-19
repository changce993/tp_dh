window.onload = function () {

    let cuantos = prompt('cuantos son');
    let nombres = prompt('Ingresa sus nombres separados por coma ","');
    let gastos = prompt('gasto');

    let cuantosNumber = parseInt(cuantos)
    
    let arrNombre = nombres.split(',')
    let arrGasto = gastos.split(',')

    let obj = []
    let person= {}
    
    for(var i = 0; i < cuantosNumber; i++){
        person = {
            nombre: arrNombre[i],
            gasto: arrGasto[i]
        }
        obj.push(person)
    }

    let contenedor = document.querySelector('.contenedor')

    for(var i = 0; i < cuantosNumber; i++){
        contenedor.innerHTML += `
            <h2>${obj[i].nombre}</h2>
            <h2>${obj[i].gasto}</h2> <br />
        `
    }

    var maxValue = parseInt(obj[0].gasto);

    for(var i = 1; i < obj.length; i++) {
        var currentValue = parseInt(obj[i].gasto);
        if(currentValue > maxValue) {
            maxValue = obj[i];
        }
    }

    contenedor.innerHTML += `El gasto mayor fue de ${maxValue.nombre}, con un total de ${maxValue.gasto}`

}
    

