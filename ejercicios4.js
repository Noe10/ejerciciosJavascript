function divisible(){
    let num = prompt('Escribe tu numero');
    var divisor = 0;
    
    do {
        divisor++;
        if(num % divisor == 0){
            document.querySelector('#numeros').innerHTML += num + ' es divisible por '+divisor +'<br>' ;
        }
        console.log(divisor);
        
    } while (divisor < num)
        
}