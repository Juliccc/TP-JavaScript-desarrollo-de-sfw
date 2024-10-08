//1. Introducción a JavaScript
//Ejercicio 2

let a = 5;
let b = 12;
let c = a+b;
console.log("El resultado de a y b es: " + c);

//Ejercicio 3

let nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola " + nombre + "!");

//2.Operadores Lógicos y Condicionales
//Ejercicio 1
let a1 = 5;
let b1 = 12;
let c1 = 7;
if(a1>b1 && a1>c1){
console.log("El mayor de los tres números es: " + a1);
}else if(b1>a1 && b1>c1){
console.log("El mayor de los tres números es: " + b1);
}else {
console.log("El mayor de los tres números es: " + c1);
}

//Ejercicio 2
let parimpar = prompt("Por favor ingrese un número y le dire si es par o impar");
if(parimpar % 2 ===0){
  console.log("El número ingresado es par");
}else {
  console.log("El número ingresado es impar")
}

//3. Operadores de asignación y bucles
//Ejercicio 1
let buc = 10;
while(buc>0){
  console.log(buc);
  buc = buc-1;
}

//Ejercicio 2
let mayor;
do {
  mayor = prompt("Por favor ingrese un numero mayor a 100"); 
} while (mayor <= 100);
console.log("Ingresaste un número mayor a 100: " + mayor);

//4. Funciones de JavaScript
//Ejercicio 1
const esPar = (num) => (num % 2 === 0 ? true : false)
const num1 = 12;
const num2 = 57;
console.log("El número " + num1 + " es par: " + esPar(num1));
console.log("El número " + num2 + " es par: " + esPar(num2));

//Ejercicio 2
const convertirCelsiusaFahrenheit = (grados) => ( grados * 1.8+32)
const grados = 30;
console.log(grados + "°C son equivalentes a "+ convertirCelsiusaFahrenheit(grados) +"F°")

//5. Objetos en JavaScript
//Ejercicio 1
let persona = {
  nombre:'Julian',
  edad:21,
  ciudad: 'Mendoza',
  cambiarCiudad: function(nuevaCiudad){
    this.ciudad = nuevaCiudad;
  },
}
persona.cambiarCiudad('Chacras de Coria');
console.log("Persona: " + persona.nombre + ", edad: "+persona.edad+", ciudad: "+persona.ciudad);

//Ejercicio 2
let libro = {
  titulo:'Popeye',
  autor:'Fabian Sevilla',
  año:2007,
  antiguedad: function(){
    const añoActual = new Date().getFullYear();
    if(añoActual-this.año > 10){
      console.log('El libro "'+libro.titulo+ '" es antiguo')
    }else(console.log('El libro "'+libro.titulo+ '" es reciente'))
  }
}
libro.antiguedad();

//6. Arrays
//Ejercicio 1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeros2 = numeros.map((num)=> num*2)
console.log('Números originales: '+numeros);
console.log('Números multiplicados por 2: '+numeros2);

//Ejercicio 2
const pares = []
for(let i = 2; i<=20; i++){
  if(i%2 ===0){
    pares.push(i);
  }
}
console.log('Primeros 10 numeros pares: ' + pares);

//7. Introduccion al DOM
//Ejercicio 1
const parrafo = document.getElementsByTagName('p');
const changeColorButton = document.getElementById('change-color-button')

changeColorButton.addEventListener('click', () => {
  if (parrafo[0].style.color === 'blue') {
    for (let i = 0; i < parrafo.length; i++) {
      parrafo[i].style.color = 'black'
    }
    changeColorButton.innerText = 'Cambiar color a azul'
    return
  }

  for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].style.color = 'blue'
  }
  changeColorButton.innerText = 'Cambiar color a negro'
})

//Ejercicio 2
const alertButton = document.getElementById('alert-button')
alertButton.addEventListener('click', () => {
  let mensaje = document.getElementById('alert-input').value
  alert(`Has ingresado: ${mensaje}`)
})

//8. Eventos en DOM
//Ejercicio 1
const listItems = document.querySelectorAll('li')
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item.textContent)
  })
})

//Ejercicio 2
const input = document.getElementById('input')
const disableInputButton = document.getElementById('disableInputButton')
const enableInputButton = document.getElementById('enableInputButton')
disableInputButton.addEventListener('click', () => {
  if (input.disabled === false) {
    input.disabled = true
    disableInputButton.disabled = true
    enableInputButton.disabled = false
  }
  return
})
enableInputButton.addEventListener('click', () => {
  if (input.disabled === true) {
    input.disabled = false
    disableInputButton.disabled = false
    enableInputButton.disabled = true
  }
  return
})

//9. LocalStorage
const emailInput = document.getElementById('email-input')
const saveButton = document.getElementById('save-button')

saveButton.addEventListener('click', () => {
  localStorage.setItem('email', emailInput.value)
  findEmail()
})

const findEmail = () => {
  const result = localStorage.getItem('email')
  if (result) {
    document.getElementById(
      'saved-email'
    ).innerHTML = `<p>Correo guardado: ${result}</p><button id="clear-button">Eliminar Correo Guardado</button>`
    const clearButton = document.getElementById('clear-button')
    clearButton.addEventListener('click', () => {
      localStorage.removeItem('email')
    })
  }
}
findEmail()