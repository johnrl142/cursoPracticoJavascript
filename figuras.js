
//Codigo del cuadrado

console.group("Cuadrados");//sirve para agrupar en la consola las lineas de codigo
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}
console.groupEnd(); //cierra el console.group

//codigo del triangulo


console.group("Triangulos") 
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
console.groupEnd()


//Codigo de circulo
console.group("Circulos");
function diametroCirculo (radio) {
    return radio * 2;
}
const PI = Math.PI; //Math.PI para calcular PI
console.log("PI es: " + PI);

function perimetroCirculo(radio) { //circunferencia
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
function areaCirculo (radio) {
    return (radio * radio) * PI;
}
console.groupEnd();

//funciones para botones INTERACTUAMOS CON HTML

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputLadosTriangulo");
    const value1 = parseFloat(input.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value2 = parseFloat(base.value);
    
    const perimetro = perimetroTriangulo(value1, value1, value2);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputBaseTriangulo");
    const value1 = parseFloat(base.value);
    const altura = document.getElementById("InputAlturaTriangulo");
    const value2 = parseFloat(altura.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
}

//Circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = parseFloat(input.value);

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = parseFloat(input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById('InputCirculo');
    const value = parseFloat(radio.value);
  
    const area = (areaCirculo(value));
    alert(area);
}

