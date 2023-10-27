function calculateTip() {
    const total = parseFloat(document.getElementById('total').value);
    const porcentajem = parseFloat(document.getElementById('porcentaje').value);

    if(isNaN(total) || isNan(porcentaje)) {
        document.getElementById('result').innerHTML = 'Ingrese valores validos';
    } else {
        const tip = total * (porcentaje / 100);
     document.getElementById('result').innerHTML = `Propina: $${tip.topFixed(2)}`;
    }
}