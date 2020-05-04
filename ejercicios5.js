function numerodivisible(){
   
    let first = document.querySelector('#first').value;
    let second = document.querySelector('#second').value;

    var resul1 = [];
    var resul2 = [];
        for (let i = 0; i < first; i++) {
            if(first % i == 0){
                resul1.push(i);
            }
            
        }
        console.log(resul1);
        for (let i = 0; i < second; i++) {
            if(second % i == 0){
                resul2.push(i);
            }
            
        }
        console.log(resul2);
        
        for (let l = 0; l < resul1.length; l++) {
            for (let m = 0; m < resul2.length; m++) {
                if(resul1[l] === resul2[m]){
                    document.querySelector('#n1divisible').innerHTML += 'divisores Comunes '+ resul2[m] +'<br>' ;
                }
                
            }
                
        }
}