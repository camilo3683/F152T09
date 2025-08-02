for (let numero = 2; numero <= 30; numero ++) {
    let esPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(numero);
    }
}
<footer>
     <p> camilo gaviria - F152t04
            <a href="../../index.html">Volver al índice</a>
        </p>
    </footer>