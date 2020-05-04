
function calcular(){
    let num = prompt('Escribe tu numero');
    console.log(num);
    
   if (num % 2 == 0) {

       document.querySelector('#mostrar2').innerHTML = num + ' es divisible por  2';
   
   }
   if (num % 3 == 0) {

    document.querySelector('#mostrar3').innerHTML = num + ' es divisible por  3';
    
   }
   if (num % 5 == 0) {

    document.querySelector('#mostrar5').innerHTML = num + ' es divisible por  5';
        
    }
   if (num % 7 == 0) {
    document.querySelector('#mostrar7').innerHTML = num + ' es divisible por  7';
        
    }



}
  
    
