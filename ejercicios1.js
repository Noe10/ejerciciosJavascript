console.log('hola');



function count(){
    let oracion = document.querySelector('#oracion').value;
   let array =  oracion.split('');
   var n = 1;
   let contar = array.map( v => v == 'a' || v == 'A' ? n++ : '' );
   let mayor = Math.max(...contar);
   document.querySelector('#cantidad').value = mayor;
    
}

