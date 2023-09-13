function cambiarFormulario() {
    var figuraSeleccionada = document.getElementById("figura").value;
    document.getElementById("cuadrado").style.display = "none";
    document.getElementById("circulo").style.display = "none";
    document.getElementById("triangulo").style.display = "none";
    document.getElementById("rectangulo").style.display = "none";

    document.getElementById(figuraSeleccionada).style.display = "block";
}

function calcularCuadrado() {
    var lado = parseFloat(document.getElementById("ladoCuadrado").value);
    var area = lado * lado;
    var perimetro = 4 * lado;

    document.getElementById("resultadoAreaCuadrado").textContent = area;
    document.getElementById("resultadoPerimetroCuadrado").textContent = perimetro;
}

function calcularCirculo() {
    var radio = parseFloat(document.getElementById("radioCirculo").value);
    var area = Math.PI * radio * radio;
    var perimetro = 2 * Math.PI * radio;

    document.getElementById("resultadoAreaCirculo").textContent = area;
    document.getElementById("resultadoPerimetroCirculo").textContent = perimetro;
}

function calcularTriangulo() {
    var base = parseFloat(document.getElementById("baseTriangulo").value);
    var altura = parseFloat(document.getElementById("alturaTriangulo").value);
    var area = (base * altura) / 2;
    var perimetro = base + altura + Math.sqrt(base * base + altura * altura);

    document.getElementById("resultadoAreaTriangulo").textContent = area;
    document.getElementById("resultadoPerimetroTriangulo").textContent = perimetro;
}

function calcularRectangulo() {
    var altura = parseFloat(document.getElementById("AlturaRecta").value);
    var base = parseFloat(document.getElementById("BaseRecta").value);
    var area = altura * base;
    var perimetro = (altura * 2) + (base * 2);

    document.getElementById("resultadoAreaRectangulo").textContent = area;
    document.getElementById("resultadoPerimetroRectangulo").textContent = perimetro;

}
