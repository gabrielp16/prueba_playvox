//Prueba PlayVox
class CalculadorDeArea {
    calcularAreaCuadrado(lado) {
        if (lado < 1) {
            return 'Error el lado del cuadrado debe ser mayor a 0';
        }
        return lado * lado;
    }

    calcularAreaRectangulo(ancho, alto) {
        return ancho * alto;
    }

    calcularAreaTriangulo(altura, base) {
        return (base * altura) / 2;
    }
}

module.exports = CalculadorDeArea;