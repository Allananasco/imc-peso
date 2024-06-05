function calcular(){
    var fPeso = parseFloat(document.getElementById("Peso").value)
    var fAltura = parseFloat(document.getElementById("Altura").value)
    var fIMC = fPeso/(fAltura*fAltura)
    document.getElementById("IMC").innerHTML = fIMC.toFixed(2)
     if(fIMC<18.5){
        document.getElementById("status").innerHTML = "STATUS: BAIXO PESO"
     }else if(fIMC<=24.9){
        document.getElementById("status").innerHTML = "STATUS: PESO IDEAL"
     }else if(fIMC<=29.9){
        document.getElementById("status").innerHTML = "STATUS: SOBREPESO"
     }else if(fIMC<=34.9){
      document.getElementById("status").innerHTML = "STATUS: OBESIDADE 1"
    }else if(fIMC<=39.9){
      document.getElementById("status").innerHTML = "STATUS: OBESIDADE 2"
    }else{
         document.getElementById("status").innerHTML = "STATUS: OBSIDADE MORBIDA"
      }
}
