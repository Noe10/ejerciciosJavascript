function primoEs(primo){

    
    if (primo == 0 || primo == 1 || primo == 4) return false;
	for (let x = 2; x < primo / 2; x++) {
        if (primo % x == 0){
           return false;
        }

           return true;
       
	}
}

function numeroPrimo(){
    let value = document.querySelector('#primo').value;
    if(primoEs(value)){
        document.querySelector('#nprimos').innerHTML = 'El numero '+ value +' es primo';
    }else{
        document.querySelector('#nprimos').innerHTML = 'El numero '+ value +' no es primo'; 
    }
}