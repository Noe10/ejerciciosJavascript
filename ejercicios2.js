function vocal(){
    let frase = prompt('Escribe tu frase')
    console.log(frase);
    
    let array = frase.split('');
    let n = 1;
    let letter = array.map(v => v === 'a'||v === 'e' || v === 'i' || v === 'o' || v === 'u'? v : '');
    let cuenta = letter.map(l => l === 'a'||l === 'e' || l === 'i' || l === 'o' || l === 'u'? n++ : 0 );
    let cantidad = Math.max(...cuenta);
    document.getElementById("demo").innerHTML = letter;
    document.getElementById("cantidadp").innerHTML = cantidad;
    
}