// alert('Bienvenidos a mi sitio');
// let avanzamos = confirm('¿Quieres avanzar?');

// let respuesta;

// if(avanzamos){
//     respuesta = "Qué alegría que quieras con tu visita por este maravilloso sitio."
// } else {
//     respuesta = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio"
// };

// let headerDos = document.querySelector('.bienvenida > h2').innerText = respuesta;



// let edadUsuario = prompt('¿Cual es tu edad?');

// if(edadUsuario < 18){
//     document.querySelector('.container-general').style.display = 'none';
//     document.querySelector('body > .contenido-bloqueado').style.display = 'block';
// }

// let hobbiesUsuario = prompt('Ingresa tus hobbies separados por coma');

// let hobbies = hobbiesUsuario.split(',')

// let hobbiesUsuarioURL = prompt('Ingresa la pagina web de tus hobbies separados por coma');

// let hobbiesURL = hobbiesUsuarioURL.split(',')

// for(var i = 0; i < hobbies.length; i++){
//     if(hobbies[i] == 'programar' || hobbies[i] == 'programación' || hobbies[i] == 'programacion'){
//         alert('Que bueno que te guste programar')
//         document.querySelector('.background-img').style.backgroundImage = 'url(./img/programmer.jpeg)'
//         break
//     } else {
//         alert('Que lastima que no te guste programar')
//         document.querySelector('.background-img').style.backgroundImage = 'url(./img/gatito.jpeg)'
//         break
//     }
// }

// let articleHobbies = document.querySelector('article.hobbies')

// for(var i = 0 ; i < hobbies.length; i++){
//     if(hobbies[i].length > 5 && hobbies[i].length < 10){
//         articleHobbies.innerHTML += `<ol style="text-align:center;"> <a style="text-decoration:none; color:black;" href="${hobbiesURL[i]}" class="classHobbie"> ${hobbies[i]} </a> </ol>`
//     }
// }

// let userIMG = prompt('Agrega una imagen')

// document.querySelector('img').src = userIMG

// let colorPreferido = prompt('¿Cual es tu color preferido?')

// let nombreUsuario = prompt('¿Cual es tu nombre?')

// document.querySelector('.bienvenida > h1').innerHTML = `Bienvenido <span> ${nombreUsuario} </span>`;

// document.querySelector('.bienvenida > h1 > span').classList.add('color-preferido')


let nombre = prompt('¿Que pelicula te gusta?')
let director = prompt('¿Quien es su director?')
let duracion = parseInt(prompt('¿Cuanto dura?'))
let actor = prompt('¿Quien actua ahí?')
let peliURL = prompt('¿Nos dejas la URL de la pelicula?')

let peli = {
    nombre,
    director,
    duracion,
    actor,
    peliURL
}

if(peli.nombre != "" && peli.director != "" && peli.duracion != "" && peli.actor != ""){
    document.querySelector('#pelicula').style.display = "block"
    document.querySelector('#nombre').innerHTML = `<a href="${peli.peliURL}">${peli.nombre}</a>`
    document.querySelector('#director').innerHTML = peli.director
    document.querySelector('#duracion').innerHTML = peli.duracion
    document.querySelector('#actor').innerHTML = peli.actor
}