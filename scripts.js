let genero
let peso
let talla
let edad

function validarDatos(){
    peso = parseFloat(document.getElementById("peso").value) 
    talla = parseFloat(document.getElementById("talla").value) 
    edad = parseInt(document.getElementById("edad").value) 

   if (peso <=0 || peso > 400){
        alert ("El peso no puede ser menor a 5 kg o mayor a 300 kg\n"+"Verifica el peso ingresado")
        document.imc_form.peso.value = "";
   }    
    

    if (talla <1 || talla > 2.5){
        alert ("Verifica que la talla se haya ingresado en metros\n"+"Verifica la talla ingresada")
        document.imc_form.talla.value = "";
        }

        if (edad < 16 || edad >=110) {
            alert("La edad no puede ser menor a 17 años");
            document.imc_form.edad.value = "";
          }
        
        document.getElementById("edad").addEventListener("blur", validarDatos);
        
    }

function calculo_imc(){
    //Variables para el cálculo y envío del resultado al cuadro de resultado
    peso = parseFloat(document.imc_form.peso.value) 
    talla = parseFloat(document.imc_form.talla.value) 
    imc = (peso / (talla * talla)).toFixed(2);
    
    //Evitando envíar un valor incorrecto al cuadro de texto de IMC
    if (!isNaN(imc)) {
        document.imc_form.imc.value = imc;
      } else {
        document.imc_form.imc.value = "";
        document.getElementById("imcresultado").textContent = "--------";
        document.getElementById("semaforo_imc").style.backgroundColor = "white";
        return;
      }
    
    if (imc<18.5){
        document.getElementById("imcresultado").textContent = "Peso Bajo"
        document.getElementById("semaforo_imc").style.backgroundColor = "red";
    } else {
        if (imc>=18.5 && imc<=24.9999){
            document.getElementById("imcresultado").textContent = "Peso Normal"
            document.getElementById("semaforo_imc").style.backgroundColor ="green";
        } else {
            if (imc>=25 && imc<=29.9999){
                document.getElementById("imcresultado").textContent = "Sobrepeso"
                document.getElementById("semaforo_imc").style.backgroundColor="yellow";
            } else {
                if (imc>=30 && imc<=34.999){
                    document.getElementById("imcresultado").textContent = "Obesidad Tipo I"
                    document.getElementById("semaforo_imc").style.backgroundColor="red";
                } else {
                    if(imc>=35 && imc<=39.999){
                        document.getElementById("imcresultado").textContent = "Obesidad Tipo II"
                        document.getElementById("semaforo_imc").style.backgroundColor="red";
                    } else {
                        if (imc>40){
                            document.getElementById("imcresultado").textContent = "Obesidad Morbida"
                            document.getElementById("semaforo_imc").style.backgroundColor="red";
                            }
                        }
                    }
                }
            }
        }
    }

function calculo_ipr(){
    if (document.imc_form.peso.value ==="" || document.imc_form.peso.value <=9 || document.imc_form.peso.value >400 ||
        document.imc_form.talla.value ==="" || document.imc_form.talla.value <1 || document.imc_form.talla.value >2.5){
            document.ipr_form.ipr.value=""
            document.getElementById("iprresultado").textContent= "Resultado"
            return;
        }

    peso = parseFloat(document.imc_form.peso.value) 
    talla = parseFloat(document.imc_form.talla.value)
    ipr = (peso / (talla * talla * talla)).toFixed(2);
    if (!isNaN(ipr)) {
        document.ipr_form.ipr.value = ipr
      }
   

    if(ipr<11){
        document.getElementById("iprresultado").textContent= "Peso debajo de lo normal"
    } else {
        if (ipr>=11 && ipr <=14){
            document.getElementById("iprresultado").textContent= "Peso Normal"
        } else {
            if (ipr>14){
                document.getElementById("iprresultado").textContent= "Exceso de peso"
            }
        }
    }
}

function calculo_pi(){
    
    //Tomar el valor de la fórmula, talla del cuadro de texto y edad
    forpi = document.getElementById("idformulapi").value
    peso = parseFloat(document.imc_form.peso.value) 
    talla = parseFloat(document.imc_form.talla.value)
    edad = parseInt(document.imc_form.edad.value) 
    genero = document.getElementById("select_gen").value

    

    if (genero=="Seleccione un género"){
            document.pesoideal_form.pideal.value = "0"
            document.pesoideal_form.pidif.value = "0"
            document.getElementById("porcmg").value = "";
            document.getElementById("porcmlg").value = "";
            document.getElementById("kgmg").value = "";
            document.getElementById("kgmlg").value = "";
    }
    //Selección de peso ideal según la fórmula
    switch(forpi){
        case "Opciones":
            if(genero==="Hombre" || genero ==="Mujer" || genero ==="Seleccione un género"){
                document.pesoideal_form.pideal.value = "0"
                document.pesoideal_form.pidif.value = "0"
            }
        break;

        case "indicebroca":
            
            if(genero=="Hombre"){
                
                pesoIdealMax = ((talla*100)-100 + 7).toFixed(1);
                pesoIdealMin = ((talla*100)-100 - 7).toFixed(1);
                pimax = pesoIdealMax
                pimin = pesoIdealMin
                
                if(!isNaN(pesoIdealMax) || !isNaN(pesoIdealMax)) {
                    document.pesoideal_form.pideal.value = "De "+ pimin + " a "+ pimax
                    pimaxdif = Math.abs(peso-pimax).toFixed(2);
                    pimindif = Math.abs(peso-pimin).toFixed(2);
                    document.pesoideal_form.pidif.value = "De "+ pimaxdif + " a "+ pimindif
                }
                

            } else {
                if(genero=="Mujer"){
                    pesoIdealMax = ((talla*100)-100 + 5).toFixed(1);
                    pesoIdealMin = ((talla*100)-100 - 5).toFixed(1);
                    pimax = pesoIdealMax
                    pimin = pesoIdealMin

                    if(!isNaN(pesoIdealMax) || !isNaN(pesoIdealMax)) {
                        document.pesoideal_form.pideal.value = "De "+ pimin + " a "+pimax
                        pimaxdif = Math.abs(peso-pimax).toFixed(2);
                        pimindif = Math.abs(peso-pimin).toFixed(2);
                        document.pesoideal_form.pidif.value = "De "+ pimindif + " a " + pimaxdif
                        }
                    }
                }
            break;
            
        case "indicelorentz":
            if(genero=="Hombre"){
                pesoIdeal = ((talla*100)-100-(((talla*100)-150)/4)).toFixed(1);
                if(!isNaN(pesoIdeal)) {
                    document.pesoideal_form.pideal.value = pesoIdeal
                    pidif = Math.abs(peso-pesoIdeal).toFixed(1);
                    document.pesoideal_form.pidif.value = pidif
                    }
            } else {
                if(genero=="Mujer"){
                    pesoIdeal = ((talla*100)-100-(((talla*100)-150)/2.5)).toFixed(1);
                   
                    if(!isNaN(pesoIdeal)) {
                        document.pesoideal_form.pideal.value = pesoIdeal
                        pidif = Math.abs(peso-pesoIdeal).toFixed(1);
                        document.pesoideal_form.pidif.value = pidif
                    }
                }
            }
            break;
           
        case "indicecorreglorentz":
            if(genero=="Hombre"){
                pesoIdeal = ((talla*talla)*23).toFixed(1);
                
                if(!isNaN(pesoIdeal)) {
                    document.pesoideal_form.pideal.value = pesoIdeal
                    pidif = Math.abs(peso - pesoIdeal).toFixed(1);
                    document.pesoideal_form.pidif.value = pidif    
                }

            } else {
                if(genero=="Mujer"){    
                    pesoIdeal = ((talla*talla)*22).toFixed(1);
                    
                    if(!isNaN(pesoIdeal)) {
                        document.pesoideal_form.pideal.value = pesoIdeal
                        pidif = Math.abs(peso-pesoIdeal).toFixed(1);
                        document.pesoideal_form.pidif.value = pidif
                    }
                }
            }
            break;
        
        case "indiceharvard":
            if(genero=="Hombre"){
                pesoIdeal = ((talla*100)/2-20).toFixed(1);
                
                if(!isNaN(pesoIdeal)) {
                    document.pesoideal_form.pideal.value = pesoIdeal
                    pidif = Math.abs(peso-pesoIdeal).toFixed(2);
                    document.pesoideal_form.pidif.value = pidif
                    }
            } else {
                if(genero=="Mujer"){    
                    pesoIdeal = ((talla*100)/2-25).toFixed(1);
                    
                    if(!isNaN(pesoIdeal)) {
                        document.pesoideal_form.pideal.value = pesoIdeal
                        pidif = Math.abs(peso-pesoIdeal).toFixed(1);
                        document.pesoideal_form.pidif.value = pidif
                        }
                    }
            }

            break;
        }
}

//Terminar función
function info_icc(){
    alert("")
}

function validar_icc(){
    
    cintura = parseFloat(document.icc_form.cintura.value).toFixed(2);
    cadera = parseFloat(document.icc_form.cadera.value).toFixed(2);
    if (cintura <40 || cintura > 400){
        alert ("Verifica el dato de cintura, normalmente no se admite menos de 40 o más de 400 cm")
        document.icc_form.cintura.value = "";
    }

    if (cadera <40 || cadera > 200){
        alert ("Verifica el dato de cadera, normalmente no se admite menos de 40 o mas de 200")
        document.icc_form.cadera.value = "";
    }
}

function calculo_icc(){
    if (document.icc_form.cintura.value === "" || document.icc_form.cintura.value <40 || document.icc_form.cintura.value >400) {
        // Si alguno de los campos está vacío, limpiar los resultados y regresar
        document.icc_form.icc.value = "";
        document.getElementById("riesgo_cintura").textContent = "Descripción de riesgo por cintura";
        document.getElementById("iccresultado").textContent = "--------";
        document.getElementById("semaforo_cintura").style.backgroundColor="white";
        return;
    }

    if (document.icc_form.cadera.value === "" || document.icc_form.cadera <40 || document.icc_form.cadera >400) {
        // Si alguno de los campos está vacío, limpiar los resultados y regresar
        document.icc_form.icc.value = "";
        document.getElementById("icc").textContent = "";
        document.getElementById("iccevaluacion").textContent = "";
        document.getElementById("iccresultado").textContent = "--------";
        
    }



    cintura = parseFloat(document.icc_form.cintura.value)
    cadera = parseFloat(document.icc_form.cadera.value)

    icc = (cintura / cadera).toFixed(2);

    if(!isNaN(icc)){
    document.icc_form.icc.value = icc
        }
    
    if (genero=="Hombre"){
        if(cintura>=94){
            document.getElementById("riesgo_cintura").textContent="Riesgo de Enfermedades Cardiovasculares y Diabetes Mellitus"
            document.getElementById("semaforo_cintura").style.backgroundColor="red";
        } else {
            document.getElementById("riesgo_cintura").textContent="Sin riesgo"
            document.getElementById("semaforo_cintura").style.backgroundColor="green";
        }

        if (icc<=0.8){
            document.getElementById("iccresultado").textContent = "Distribución Ginecoide"
        } else {
            if (icc>0.8){
                document.getElementById("iccresultado").textContent = "Distribución Androide"    
                
            } 
        }
    } else {
        if (genero=="Mujer"){
            if(cintura>=80){
                document.getElementById("riesgo_cintura").textContent="Riesgo de Enfermedades Cardiovasculares y Diabetes Mellitus"
                document.getElementById("semaforo_cintura").style.backgroundColor="red";
            } else {
                document.getElementById("riesgo_cintura").textContent="Sin riesgo"
                document.getElementById("semaforo_cintura").style.backgroundColor="green";
            }
            
            if (icc<=0.9){
                document.getElementById("iccresultado").textContent = "Distribución Ginecoide"
            } else {
                if (icc>0.9){
                    document.getElementById("iccresultado").textContent = "Distribución Androide"    
                } 
            }
        }
    }
}
//Referencia: Bray y Gray, 1988 (Anthropometric Standardization Reference Manual)

function riesgo_icc(){

    if (document.icc_form.cintura.value === "" || document.icc_form.cintura.value <40 || document.icc_form.cintura.value >400) {
        // Si alguno de los campos está vacío, limpiar los resultados y regresar
        document.icc_form.icc.value = "";
        document.getElementById("riesgo_cintura").textContent = "Descripción de riesgo por cintura";
        document.getElementById("iccresultado").textContent = "--------";
        document.getElementById("semaforo_cintura").style.backgroundColor="white";
        return;
    }

    if (document.icc_form.cadera.value === "" || document.icc_form.cadera <40 || document.icc_form.cadera >400) {
        // Si alguno de los campos está vacío, limpiar los resultados y regresar
        document.icc_form.icc.value = "";
        document.getElementById("icc").textContent = "";
        document.getElementById("iccevaluacion").textContent = "";
        document.getElementById("iccresultado").textContent = "--------";
        return;
    }

    edad=parseInt(document.imc_form.edad.value)
    var flag = 0
    icc = document.icc_form.icc.value
    genero = document.getElementById("select_gen").value

    if(edad<=29){
        flag=1
    } else {
        if(edad>=30 && edad<=39){
            flag=2
        } else {
            if(edad>=40 && edad<=49){
                flag=3
            } else {
                if(edad>=50 && edad<=59){
                    flag=4
                } else {
                    if(edad>=60){
                        flag=5
                    }
                }
            }
        }
    }

    switch(flag){
        case 1:
            if(genero=="Hombre"){
                if (icc<0.83){
                    document.getElementById("iccevaluacion").textContent="Riesgo Bajo"   
                    } else {
                    if (icc>=0.83 && icc<=0.88){
                        document.getElementById("iccevaluacion").textContent="Riesgo Moderado"    
                        } else {
                            if (icc>=0.89 && icc<=0.94){
                                document.getElementById("iccevaluacion").textContent="Riesgo Alto"    
                            } else {
                                if (icc>0.94){
                                    document.getElementById("iccevaluacion").textContent="Riesgo Muy Alto"     
                                }
                            }  
                        }
                    }
            } else{
                if (genero =="Mujer"){
                    if (icc<0.71){
                        document.getElementById("iccevaluacion").textContent="Riesgo Bajo"   
                        } else {
                        if (icc>=0.71 && icc<=0.77){
                            document.getElementById("iccevaluacion").textContent="Riesgo Moderado"    
                            } else {
                                if (icc>=0.78 && icc<=0.82){
                                    document.getElementById("iccevaluacion").textContent="Riesgo Alto"    
                                } else {
                                    if (icc>0.82){
                                        document.getElementById("iccevaluacion").textContent="Riesgo Muy Alto"     
                                    }
                                }  
                            }
                        }
                    }
                }
        break;

        case 2:
            if(genero=="Hombre"){
                if (icc<0.84){
                    document.getElementById("iccevaluacion").textContent="Riesgo Bajo"   
                    } else {
                    if (icc>=0.84 && icc<=0.91){
                        document.getElementById("iccevaluacion").textContent="Riesgo Moderado"    
                        } else {
                            if (icc>=0.92 && icc<=0.96){
                                document.getElementById("iccevaluacion").textContent="Riesgo Alto"    
                            } else {
                                if (icc>0.96){
                                    document.getElementById("iccevaluacion").textContent="Riesgo Muy Alto"     
                                }
                            }  
                        }
                    }
            } else{
                if (genero =="Mujer"){
                    if (icc<0.72){
                        document.getElementById("iccevaluacion").textContent="Riesgo Bajo"   
                        } else {
                        if (icc>=0.72 && icc<=0.78){
                            document.getElementById("iccevaluacion").textContent="Riesgo Moderado"    
                            } else {
                                if (icc>=0.79 && icc<=0.84){
                                    document.getElementById("iccevaluacion").textContent="Riesgo Alto"    
                                } else {
                                    if (icc>0.84){
                                        document.getElementById("iccevaluacion").textContent="Riesgo Muy Alto"     
                                    }
                                }  
                            }
                        }
                    }
                }
        break;

        case 3:
            if(genero=="Hombre"){
                if (icc<0.88){
                    document.getElementById("iccevaluacion").textContent="Riesgo Bajo"   
                    } else {
                    if (icc>=0.88 && icc<=0.95){
                        document.getElementById("iccevaluacion").textContent="Riesgo Moderado"    
                        } else {
                            if (icc>=0.96 && icc<=1){
                                document.getElementById("iccevaluacion").textContent="Riesgo Alto"    
                            } else {
                                if (icc>1){
                                    document.getElementById("iccevaluacion").textContent="Riesgo Muy Alto"     
                                }
                            }  
                        }
                    }
            } else{
                if (genero =="Mujer"){
                    if (icc<0.73){
                        document.getElementById("iccevaluacion").textContent="Riesgo Bajo"   
                        } else {
                        if (icc>=0.73 && icc<=0.79){
                            document.getElementById("iccevaluacion").textContent="Riesgo Moderado"    
                            } else {
                                if (icc>=0.8 && icc<=0.87){
                                    document.getElementById("iccevaluacion").textContent="Riesgo Alto"    
                                } else {
                                    if (icc>0.87){
                                        document.getElementById("iccevaluacion").textContent="Riesgo Muy Alto"     
                                    }
                                }  
                            }
                        }
                    }
                }
        
        break;

        case 4:
            if(genero=="Hombre"){
                if (icc<0.9){
                    document.getElementById("iccevaluacion").textContent="Riesgo Bajo"   
                    } else {
                    if (icc>=0.9 && icc<=0.96){
                        document.getElementById("iccevaluacion").textContent="Riesgo Moderado"    
                        } else {
                            if (icc>=0.97 && icc<=1.02){
                                document.getElementById("iccevaluacion").textContent="Riesgo Alto"    
                            } else {
                                if (icc>1.02){
                                    document.getElementById("iccevaluacion").textContent="Riesgo Muy Alto"     
                                }
                            }  
                        }
                    }
            } else{
                if (genero =="Mujer"){
                    if (icc<0.74){
                        document.getElementById("iccevaluacion").textContent="Riesgo Bajo"   
                        } else {
                        if (icc>=0.74 && icc<=0.81){
                            document.getElementById("iccevaluacion").textContent="Riesgo Moderado"    
                            } else {
                                if (icc>=0.82 && icc<=0.88){
                                    document.getElementById("iccevaluacion").textContent="Riesgo Alto"    
                                } else {
                                    if (icc>0.88){
                                        document.getElementById("iccevaluacion").textContent="Riesgo Muy Alto"     
                                    }
                                }  
                            }
                        }
                    }
                }
        
        break;

        case 5:
            if(genero=="Hombre"){
                if (icc<0.91){
                    document.getElementById("iccevaluacion").textContent="Riesgo Bajo"   
                    } else {
                    if (icc>=0.91 && icc<=0.98){
                        document.getElementById("iccevaluacion").textContent="Riesgo Moderado"    
                        } else {
                            if (icc>=0.99 && icc<=1.03){
                                document.getElementById("iccevaluacion").textContent="Riesgo Alto"    
                            } else {
                                if (icc>1.03){
                                    document.getElementById("iccevaluacion").textContent="Riesgo Muy Alto"     
                                }
                            }  
                        }
                    }
            } else{
                if (genero =="Mujer"){
                    if (icc<0.76){
                        document.getElementById("iccevaluacion").textContent="Riesgo Bajo"   
                        } else {
                        if (icc>=0.76 && icc<=0.83){
                            document.getElementById("iccevaluacion").textContent="Riesgo Moderado"    
                            } else {
                                if (icc>=0.84 && icc<=0.9){
                                    document.getElementById("iccevaluacion").textContent="Riesgo Alto"    
                                } else {
                                    if (icc>0.9){
                                        document.getElementById("iccevaluacion").textContent="Riesgo Muy Alto"     
                                    }
                                }  
                            }
                        }
                    }
                }
        
        break;
    }
}
//Referencia: Bray y Gray, 1988 (Anthropometric Standardization Reference Manual)

const dataMasaGrasa = [
    
    /*<------------------Hombres------------------->*/
    //De 17 - 19 años//
    {sexo:1, edad:1, formula: 1, c: 1.1066, m: 0.0686},
    {sexo:1, edad:1, formula: 2, c: 1.1252, m: 0.0625},
    {sexo:1, edad:1, formula: 3, c: 1.1312, m: 0.0067},
    {sexo:1, edad:1, formula: 4, c: 1.1092, m: 0.0420},
    {sexo:1, edad:1, formula: 5, c: 1.1423, m: 0.0687},
    {sexo:1, edad:1, formula: 6, c: 1.1457, m: 0.0707},
    {sexo:1, edad:1, formula: 7, c: 1.1247, m: 0.0501},
    {sexo:1, edad:1, formula: 8, c: 1.1561, m: 0.0711},
    {sexo:1, edad:1, formula: 9, c: 1.1370, m: 0.0545},
    {sexo:1, edad:1, formula: 10, c: 1.1374, m: 0.0545},
    {sexo:1, edad:1, formula: 11, c: 1.1643, m: 0.0727},
    {sexo:1, edad:1, formula: 12, c: 1.1466, m: 0.0584},
    {sexo:1, edad:1, formula: 13, c: 1.1469, m: 0.0583},
    {sexo:1, edad:1, formula: 14, c: 1.1555, m: 0.0607},
    {sexo:1, edad:1, formula: 15, c: 1.1620, m: 0.0630},

    //20 - 29 años
    {sexo: 1, edad:2, formula: 1, c: 1.1015, m:	0.0616},
    {sexo: 1, edad:2, formula: 2, c: 1.1131, m:	0.0530},
    {sexo: 1, edad:2, formula: 3, c: 1.136,	m: 0.0070},     
    {sexo: 1, edad:2, formula: 4, c: 1.1117, m: 0.0431},
    {sexo: 1, edad:2, formula: 5, c: 1.1307, m:	0.0603},
    {sexo: 1, edad:2, formula: 6, c: 1.1469, m:	0.0109},
    {sexo: 1, edad:2, formula: 7, c: 1.1259, m:	0.0502},
    {sexo: 1, edad:2, formula: 8, c: 1.1525, m:	0.0687},
    {sexo: 1, edad:2, formula: 9, c: 1.1362, m:	0.0538},
    {sexo: 1, edad:2, formula: 10, c: 1.1429, m: 0.0573},
    {sexo: 1, edad:2, formula: 11, c: 1.1593, m: 0.0694},
    {sexo: 1, edad:2, formula: 12, c: 1.1451, m: 0.0572},
    {sexo: 1, edad:2, formula: 13, c: 1.1508, m: 0.0599},
    {sexo: 1, edad:2, formula: 14, c: 1.1575, m: 0.0617},
    {sexo: 1, edad:2, formula: 15, c: 1.1631, m: 0.0632},
        
    //30 - 39 años
    {sexo:1, edad:3, formula: 1, c: 1.0781, m: 0.0396},
    {sexo:1, edad:3, formula: 2, c: 1.0834, m: 0.0361},
    {sexo:1, edad:3, formula: 3, c: 1.0978, m: 0.0416},
    {sexo:1, edad:3, formula: 4, c: 1.1047, m: 0.0432},
    {sexo:1, edad:3, formula: 5, c: 1.0995, m: 0.0431},
    {sexo:1, edad:3, formula: 6, c: 1.0753, m: 0.0445},
    {sexo:1, edad:3, formula: 7, c: 1.1174, m: 0.0486},
    {sexo:1, edad:3, formula: 8, c: 1.1165, m: 0.0484},
    {sexo:1, edad:3, formula: 9, c: 1.1273, m: 0.0531},
    {sexo:1, edad:3, formula: 10, c: 0.1126, m: 0.0497},
    {sexo:1, edad:3, formula: 11, c: 1.1213, m: 0.0487},
    {sexo:1, edad:3, formula: 12, c: 1.1332, m: 0.0542},
    {sexo:1, edad:3, formula: 13, c: 1.1315, m: 0.0510},
    {sexo:1, edad:3, formula: 14, c: 1.1393, m: 0.0544},
    {sexo:1, edad:3, formula: 15, c: 1.1422, m: 0.0544},

    //40 - 49 años
    {sexo:1, edad:4, formula: 1, c: 1.0829 , m: 0.0508},
    {sexo:1, edad:4, formula: 2, c: 1.1041 , m: 0.0609},
    {sexo:1, edad:4, formula: 3, c: 1.1246 , m: 0.0686},
    {sexo:1, edad:4, formula: 4, c: 1.1029 , m: 0.0483},
    {sexo:1, edad:4, formula: 5, c: 1.1174 , m: 0.0614},
    {sexo:1, edad:4, formula: 6, c: 1.1341 , m: 0.0680},
    {sexo:1, edad:4, formula: 7, c: 1.1171 , m: 0.0539},
    {sexo:1, edad:4, formula: 8, c: 1.1519 , m: 0.0771},
    {sexo:1, edad:4, formula: 9, c: 1.1383 , m: 0.0660},
    {sexo:1, edad:4, formula: 10, c: 1.1392 , m: 0.0633},
    {sexo:1, edad:4, formula: 11, c: 0.1153 , m: 0.0730},
    {sexo:1, edad:4, formula: 12, c: 1.1422 , m: 0.0647},
    {sexo:1, edad:4, formula: 13, c: 1.1452 , m: 0.0640},
    {sexo:1, edad:4, formula: 14, c: 1.1604 , m: 0.0716},
    {sexo:1, edad:4, formula: 15, c: 0.1162 , m: 0.0070},
    
    //50 o más años
    {sexo:1, edad:5, formula: 1, c: 1.0833 , m: 0.0617},
    {sexo:1, edad:5, formula: 2, c: 1.1027 , m: 0.0662},
    {sexo:1, edad:5, formula: 3, c: 1.1334 , m: 0.0760},
    {sexo:1, edad:5, formula: 4, c: 1.1193 , m: 0.0652},
    {sexo:1, edad:5, formula: 5, c: 1.1185 , m: 0.0683},
    {sexo:1, edad:5, formula: 6, c: 1.1427 , m: 0.0762},
    {sexo:1, edad:5, formula: 7, c: 1.1307 , m: 0.0618},
    {sexo:1, edad:5, formula: 8, c: 1.1527 , m: 0.0793},
    {sexo:1, edad:5, formula: 9, c: 1.1415 , m: 0.0718},
    {sexo:1, edad:5, formula: 10, c: 1.1582 , m: 0.0771},
    {sexo:1, edad:5, formula: 11, c: 1.1569 , m: 0.0780},
    {sexo:1, edad:5, formula: 12, c: 1.1473 , m: 0.0718},
    {sexo:1, edad:5, formula: 13, c: 1.1626 , m: 0.0768},
    {sexo:1, edad:5, formula: 14, c: 1.1689 , m: 0.0787},
    {sexo:1, edad:5, formula: 15, c: 1.1715 , m: 0.0779},

    /*<------------------Mujer------------------->*/
    //17 - 19 años
    {sexo:2, edad:1, formula: 1, c: 1.0889 , m: 0.0553},
    {sexo:2, edad:1, formula: 2, c: 1.1159 , m: 0.0648},
    {sexo:2, edad:1, formula: 3, c: 1.1081 , m: 0.0621},
    {sexo:2, edad:1, formula: 4, c: 1.0931 , m: 0.0470},
    {sexo:2, edad:1, formula: 5, c: 1.1290 , m: 0.0657},
    {sexo:2, edad:1, formula: 6, c: 1.1241 , m: 0.0643},
    {sexo:2, edad:1, formula: 7, c: 1.1113 , m: 0.0537},
    {sexo:2, edad:1, formula: 8, c: 1.1468 , m: 0.0740},
    {sexo:2, edad:1, formula: 9, c: 1.1311 , m: 0.0624},
    {sexo:2, edad:1, formula: 10, c: 1.1278 , m: 0.0616},
    {sexo:2, edad:1, formula: 11, c: 1.1509 , m: 0.0715},
    {sexo:2, edad:1, formula: 12, c: 1.1382 , m: 0.0628},
    {sexo:2, edad:1, formula: 13, c: 1.1355 , m: 0.0622},
    {sexo:2, edad:1, formula: 14, c: 1.1517 , m: 0.0689},
    {sexo:2, edad:1, formula: 15, c: 1.1549 , m: 0.0678},

    //20 - 29 años
    {sexo:2, edad:2, formula: 1, c: 1.0903 , m: 0.0601},
    {sexo:2, edad:2, formula: 2, c: 1.1319 , m: 0.0776},
    {sexo:2, edad:2, formula: 3, c: 1.1184 , m: 0.0716},
    {sexo:2, edad:2, formula: 4, c: 1.0923 , m: 0.0509},
    {sexo:2, edad:2, formula: 5, c: 1.1398 , m: 0.0738},
    {sexo:2, edad:2, formula: 6, c: 1.1314 , m: 0.0706},
    {sexo:2, edad:2, formula: 7, c: 1.1112 , m: 0.0568},
    {sexo:2, edad:2, formula: 8, c: 1.1582 , m: 0.0813},
    {sexo:2, edad:2, formula: 9, c: 1.1377 , m: 0.0684},
    {sexo:2, edad:2, formula: 10, c: 1.1280 , m: 0.0640},
    {sexo:2, edad:2, formula: 11, c: 1.1605 , m: 0.0777},
    {sexo:2, edad:2, formula: 12, c: 1.1441 , m: 0.0680},
    {sexo:2, edad:2, formula: 13, c: 1.1366 , m: 0.0648},
    {sexo:2, edad:2, formula: 14, c: 1.1566 , m: 0.0728},
    {sexo:2, edad:2, formula: 15, c: 1.1599 , m: 0.0717},

    //30 - 39 años
    {sexo:2, edad: 3, formula:1, c:1.0794, m:0.0511},
    {sexo:2, edad: 3, formula:2, c:1.1176, m:0.0686},
    {sexo:2, edad: 3, formula:3, c:1.0979, m:0.0567},
    {sexo:2, edad: 3, formula:4, c:1.0860, m:0.0497},
    {sexo:2, edad: 3, formula:5, c:1.1243, m:0.0646},
    {sexo:2, edad: 3, formula:6, c:1.1120, m:0.0581},
    {sexo:2, edad: 3, formula:7, c:1.1020, m:0.0528},
    {sexo:2, edad: 3, formula:8, c:1.1356, m:0.0680},
    {sexo:2, edad: 3, formula:9, c:1.1281, m:0.0644},
    {sexo:2, edad: 3, formula:10, c:1.1132, m:0.0564},
    {sexo:2, edad: 3, formula:11, c:1.1385, m:0.0654},
    {sexo:2, edad: 3, formula:12, c:1.1319, m:0.0624},
    {sexo:2, edad: 3, formula:13, c:1.1212, m:0.0570},
    {sexo:2, edad: 3, formula:14, c:1.1397, m:0.0646},
    {sexo:2, edad: 3, formula:15, c:1.1423, m:0.0632},


    //40 - 49 años
    {sexo:2, edad: 4, formula:1, c:1.0736, m:0.0492},
    {sexo:2, edad: 4, formula:2, c:1.1121, m:0.0691},
    {sexo:2, edad: 4, formula:3, c:1.0860, m:0.0505},
    {sexo:2, edad: 4, formula:4, c:1.0691, m:0.0407},
    {sexo:2, edad: 4, formula:5, c:1.1230, m:0.0672},
    {sexo:2, edad: 4, formula:6, c:1.0921, m:0.0549},
    {sexo:2, edad: 4, formula:7, c:1.0921, m:0.0494},
    {sexo:2, edad: 4, formula:8, c:1.1230, m:0.0635},
    {sexo:2, edad: 4, formula:9, c:1.1198, m:0.0630},
    {sexo:2, edad: 4, formula:10, c:1.0997, m:0.0509},
    {sexo:2, edad: 4, formula:11, c:1.1303, m:0.0635},
    {sexo:2, edad: 4, formula:12, c:1.1267, m:0.0626},
    {sexo:2, edad: 4, formula:13, c:1.1108, m:0.0536},
    {sexo:2, edad: 4, formula:14, c:1.1278, m:0.0609},
    {sexo:2, edad: 4, formula:15, c:1.1333, m:0.0612},


    //50 o más años
    {sexo:2, edad: 5, formula:1, c:1.0682, m:0.0510},
    {sexo:2, edad: 5, formula:2, c:1.1160, m:0.0762},
    {sexo:2, edad: 5, formula:3, c:1.0899, m:0.0590},
    {sexo:2, edad: 5, formula:4, c:1.0656, m:0.0419},
    {sexo:2, edad: 5, formula:5, c:1.1226, m:0.0710},
    {sexo:2, edad: 5, formula:6, c:1.0857, m:0.0592},
    {sexo:2, edad: 5, formula:7, c:1.0857, m:0.0490},
    {sexo:2, edad: 5, formula:8, c:1.1347, m:0.0742},
    {sexo:2, edad: 5, formula:9, c:1.1158, m:0.0635},
    {sexo:2, edad: 5, formula:10, c:1.0963, m:0.0523},
    {sexo:2, edad: 5, formula:11, c:1.1372, m:0.0710},
    {sexo:2, edad: 5, formula:12, c:1.1227, m:0.0633},
    {sexo:2, edad: 5, formula:13, c:1.1063, m:0.0544},
    {sexo:2, edad: 5, formula:14, c:1.1298, m:0.0650},
    {sexo:2, edad: 5, formula:15, c:1.1339, m:0.0645},

]

function buscar_cym(sexo, edad, formula) {
    value_genero = document.getElementById("select_gen").value
    value_edad = parseInt(document.getElementById("edad").value)
    value_formula = parseInt(document.getElementById("select_pliegues").value)
    value_formula3 = parseInt(document.getElementById("select_pliegues3").value)

    if (value_genero == "Hombre") {
      sexo = 1;
      } else if (value_genero == "Mujer") {
      sexo = 2;
    }
  

    if (value_edad<=19){
        edad = 1
        } else {
            if (value_edad>19 && value_edad<=29){
                edad = 2
            } else {
                if (value_edad>29 && value_edad<=39){
                    edad = 3
                } else {
                    if (value_edad>39 && value_edad<=49) {
                        edad = 4
                    } else {
                        if (value_edad>=50){
                            edad = 5
                    }
                }
            }
        }
      }   
     
      formula = value_formula;
      formula3 = value_formula3;
      const resultado = dataMasaGrasa.find((objeto) => {
      return objeto.sexo === sexo && objeto.edad === edad && objeto.formula === formula;
      });

      if (resultado) {
              
        document.getElementById("ccuadro").value = resultado.c;
        document.getElementById("mcuadro").value = resultado.m;

        //return { c: resultado.c, m: resultado.m, formula: resultado.formula};
      }

      const resultado3 = dataMasaGrasa.find((objeto) => {
        return objeto.sexo === sexo && objeto.edad === edad && objeto.formula === formula3;
        });

      if (resultado3) {
              
        document.getElementById("ccuadro3").value = resultado3.c;
        document.getElementById("mcuadro3").value = resultado3.m;

        return { c: resultado3.c, m: resultado3.m, formula3: resultado3.formula};
      }
      
      
    }

function seleccionPligues(){
  pliegues = document.getElementById("select_pliegues").value;
  pliegues3 = document.getElementById("select_pliegues3").value;

  switch(pliegues3){

    case "none": 
      document.getElementById("divpb3").style.display="none"
      document.getElementById("divpt3").style.display="none"
      document.getElementById("divpse3").style.display="none"
      document.getElementById("divpsi3").style.display="none"
      document.getElementById("select_pliegues3").value="none"
    
    break;

    case "1":
      document.getElementById("divpb3").style.display="block"
      document.getElementById("divpt3").style.display="none"
      document.getElementById("divpse3").style.display="none"
      document.getElementById("divpsi3").style.display="none"
            
    break;

    case "2":
      document.getElementById("divpb3").style.display="none"
      document.getElementById("divpt3").style.display="block"
      document.getElementById("divpse3").style.display="none"
      document.getElementById("divpsi3").style.display="none"
            
    break;

    case "3":
      document.getElementById("divpb3").style.display="none"
      document.getElementById("divpt3").style.display="none"
      document.getElementById("divpse3").style.display="block"
      document.getElementById("divpsi3").style.display="none"
            
    break;

    case "4":
      document.getElementById("divpb3").style.display="none"
      document.getElementById("divpt3").style.display="none"
      document.getElementById("divpse3").style.display="none"
      document.getElementById("divpsi3").style.display="block"
            
    break;

    case "5":
      document.getElementById("divpb3").style.display="block"
      document.getElementById("divpt3").style.display="block"
      document.getElementById("divpse3").style.display="none"
      document.getElementById("divpsi3").style.display="none"
            
    break;

    case "6":
      document.getElementById("divpb3").style.display="block"
      document.getElementById("divpt3").style.display="none"
      document.getElementById("divpse3").style.display="block"
      document.getElementById("divpsi3").style.display="none"
            
    break;

    case "7":
      document.getElementById("divpb3").style.display="block"
      document.getElementById("divpt3").style.display="none"
      document.getElementById("divpse3").style.display="none"
      document.getElementById("divpsi3").style.display="block"
            
    break;

    case "8":
      document.getElementById("divpb3").style.display="none"
      document.getElementById("divpt3").style.display="block"
      document.getElementById("divpse3").style.display="block"
      document.getElementById("divpsi3").style.display="none"
            
    break;

    case "9":
      document.getElementById("divpb3").style.display="none"
      document.getElementById("divpt3").style.display="block"
      document.getElementById("divpse3").style.display="none"
      document.getElementById("divpsi3").style.display="block"
            
    break;

    case "10":
      document.getElementById("divpb3").style.display="none"
      document.getElementById("divpt3").style.display="none"
      document.getElementById("divpse3").style.display="block"
      document.getElementById("divpsi3").style.display="block"
            
    break;

    case "11":
      document.getElementById("divpb3").style.display="block"
      document.getElementById("divpt3").style.display="block"
      document.getElementById("divpse3").style.display="block"
      document.getElementById("divpsi3").style.display="none"
            
    break;

    case "12":
      document.getElementById("divpb3").style.display="block"
      document.getElementById("divpt3").style.display="block"
      document.getElementById("divpse3").style.display="none"
      document.getElementById("divpsi3").style.display="block"
            
    break;

    case "13":
      document.getElementById("divpb3").style.display="block"
      document.getElementById("divpt3").style.display="none"
      document.getElementById("divpse3").style.display="block"
      document.getElementById("divpsi3").style.display="block"
            
    break;

    case "14":
      document.getElementById("divpb3").style.display="none"
      document.getElementById("divpt3").style.display="block"
      document.getElementById("divpse3").style.display="block"
      document.getElementById("divpsi3").style.display="block"
            
    break;

    case "15":
      document.getElementById("divpb3").style.display="block"
      document.getElementById("divpt3").style.display="block"
      document.getElementById("divpse3").style.display="block"
      document.getElementById("divpsi3").style.display="block"
            
    break;

  }

  switch(pliegues){

    case "none": 
      document.getElementById("divpb").style.display="none"
      document.getElementById("divpt").style.display="none"
      document.getElementById("divpse").style.display="none"
      document.getElementById("divpsi").style.display="none"
      document.getElementById("select_pliegues").value="none"
    
    break;

    case "1":
      document.getElementById("divpb").style.display="block"
      document.getElementById("divpt").style.display="none"
      document.getElementById("divpse").style.display="none"
      document.getElementById("divpsi").style.display="none"
            
    break;

    case "2":
      document.getElementById("divpb").style.display="none"
      document.getElementById("divpt").style.display="block"
      document.getElementById("divpse").style.display="none"
      document.getElementById("divpsi").style.display="none"
            
    break;

    case "3":
      document.getElementById("divpb").style.display="none"
      document.getElementById("divpt").style.display="none"
      document.getElementById("divpse").style.display="block"
      document.getElementById("divpsi").style.display="none"
            
    break;

    case "4":
      document.getElementById("divpb").style.display="none"
      document.getElementById("divpt").style.display="none"
      document.getElementById("divpse").style.display="none"
      document.getElementById("divpsi").style.display="block"
            
    break;

    case "5":
      document.getElementById("divpb").style.display="block"
      document.getElementById("divpt").style.display="block"
      document.getElementById("divpse").style.display="none"
      document.getElementById("divpsi").style.display="none"
            
    break;

    case "6":
      document.getElementById("divpb").style.display="block"
      document.getElementById("divpt").style.display="none"
      document.getElementById("divpse").style.display="block"
      document.getElementById("divpsi").style.display="none"
            
    break;

    case "7":
      document.getElementById("divpb").style.display="block"
      document.getElementById("divpt").style.display="none"
      document.getElementById("divpse").style.display="none"
      document.getElementById("divpsi").style.display="block"
            
    break;

    case "8":
      document.getElementById("divpb").style.display="none"
      document.getElementById("divpt").style.display="block"
      document.getElementById("divpse").style.display="block"
      document.getElementById("divpsi").style.display="none"
            
    break;

    case "9":
      document.getElementById("divpb").style.display="none"
      document.getElementById("divpt").style.display="block"
      document.getElementById("divpse").style.display="none"
      document.getElementById("divpsi").style.display="block"
            
    break;

    case "10":
      document.getElementById("divpb").style.display="none"
      document.getElementById("divpt").style.display="none"
      document.getElementById("divpse").style.display="block"
      document.getElementById("divpsi").style.display="block"
            
    break;

    case "11":
      document.getElementById("divpb").style.display="block"
      document.getElementById("divpt").style.display="block"
      document.getElementById("divpse").style.display="block"
      document.getElementById("divpsi").style.display="none"
            
    break;

    case "12":
      document.getElementById("divpb").style.display="block"
      document.getElementById("divpt").style.display="block"
      document.getElementById("divpse").style.display="none"
      document.getElementById("divpsi").style.display="block"
            
    break;

    case "13":
      document.getElementById("divpb").style.display="block"
      document.getElementById("divpt").style.display="none"
      document.getElementById("divpse").style.display="block"
      document.getElementById("divpsi").style.display="block"
            
    break;

    case "14":
      document.getElementById("divpb").style.display="none"
      document.getElementById("divpt").style.display="block"
      document.getElementById("divpse").style.display="block"
      document.getElementById("divpsi").style.display="block"
            
    break;

    case "15":
      document.getElementById("divpb").style.display="block"
      document.getElementById("divpt").style.display="block"
      document.getElementById("divpse").style.display="block"
      document.getElementById("divpsi").style.display="block"
            
    break;

  }
}

function calcularMasaGrasa(){
  
  cantidad = document.getElementById("select_pliegues").value;
  cantidad3 = document.getElementById("select_pliegues3").value;
  formulamg = document.getElementById("formula_grasa").value;
  value_genero = document.getElementById("select_gen").value;
  value_talla = parseFloat(document.getElementById("talla").value);

  switch(formulamg) {
  
    case "durnin":
        document.getElementById("porcmg").value = ""
        document.getElementById("porcmlg").value = ""
        document.getElementById("kgmg").value = ""
        document.getElementById("kgmlg").value = ""

        switch (cantidad){
          case "1":
            c = parseFloat(document.getElementById("ccuadro").value)
            m = parseFloat(document.getElementById("mcuadro").value)
            pb = parseInt(document.getElementById("pcbi1").value)
            peso = document.getElementById("peso").value;
            console.log("Bicipital "+pb)
            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
                document.getElementById("porcmg").value = ""
                document.getElementById("porcmlg").value = ""
                document.getElementById("kgmg").value = ""
                document.getElementById("kgmlg").value = ""
              return;
              }

            
            if (pb>0) {
                  densidad = c - (m * (Math.log10(pb)))
                  console.log("La densidad es: "+densidad)
                  porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
                  porcentajemm = (100 - porcentajemg).toFixed(2);
                  kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
                  kilogramosmm = (peso - kilogramosmg).toFixed(2);
                  console.log(densidad);
                  document.getElementById("porcmg").value = porcentajemg;
                  document.getElementById("porcmlg").value = porcentajemm;
                  document.getElementById("kgmg").value = kilogramosmg;
                  document.getElementById("kgmlg").value = kilogramosmm;

              }

            break;

          case "2":
            c = parseFloat(document.getElementById("ccuadro").value)
            m = parseFloat(document.getElementById("mcuadro").value)
            pt = parseInt(document.getElementById("pcti1").value) 
            peso = document.getElementById("peso").value;

            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
                document.getElementById("porcmg").value = ""
                document.getElementById("porcmlg").value = ""
                document.getElementById("kgmg").value = ""
                document.getElementById("kgmlg").value = ""
              return;
              }

              if (pt>0) {
                densidad = c - (m * (Math.log10(pb)))
                console.log("La densidad es: "+densidad)
                porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
                porcentajemm = (100 - porcentajemg).toFixed(2);
                kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
                kilogramosmm = (peso - kilogramosmg).toFixed(2);

                document.getElementById("porcmg").value = porcentajemg;
                document.getElementById("porcmlg").value = porcentajemm;
                document.getElementById("kgmg").value = kilogramosmg;
                document.getElementById("kgmlg").value = kilogramosmm;
              }
              break;

          case "3":

            c = parseFloat(document.getElementById("ccuadro").value)
            m = parseFloat(document.getElementById("mcuadro").value)
            pse = parseInt(document.getElementById("pcse1").value) 
            peso = document.getElementById("peso").value;

            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg").value = ""
              document.getElementById("porcmlg").value = ""
              document.getElementById("kgmg").value = ""
              document.getElementById("kgmlg").value = ""
            return;
            }

            if (pse>0) {
              densidad = c - (m * (Math.log10(pse)))
              console.log("La densidad es: "+densidad)
              porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);

              document.getElementById("porcmg").value = porcentajemg;
              document.getElementById("porcmlg").value = porcentajemm;
              document.getElementById("kgmg").value = kilogramosmg;
              document.getElementById("kgmlg").value = kilogramosmm;
            }
            break;

          case "4":
          c = parseFloat(document.getElementById("ccuadro").value)
          m = parseFloat(document.getElementById("mcuadro").value)
          psi = parseInt(document.getElementById("pcsi1").value) 
          peso = document.getElementById("peso").value;

          if (!peso){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
            document.getElementById("porcmg").value = ""
            document.getElementById("porcmlg").value = ""
            document.getElementById("kgmg").value = ""
            document.getElementById("kgmlg").value = ""
          return;
          }

          if (psi>0) {
            densidad = c - (m * (Math.log10(psi)))
            console.log("La densidad es: "+densidad)
            porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
            porcentajemm = (100 - porcentajemg).toFixed(2);
            kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
            kilogramosmm = (peso - kilogramosmg).toFixed(2);

            document.getElementById("porcmg").value = porcentajemg;
            document.getElementById("porcmlg").value = porcentajemm;
            document.getElementById("kgmg").value = kilogramosmg;
            document.getElementById("kgmlg").value = kilogramosmm;
          }
          break;
        
          case "5":
          c = parseFloat(document.getElementById("ccuadro").value)
          m = parseFloat(document.getElementById("mcuadro").value)
          pb = parseInt(document.getElementById("pcbi1").value) 
          pt = parseInt(document.getElementById("pcti1").value) 
          peso = document.getElementById("peso").value;

          if (!peso){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
            document.getElementById("porcmg").value = ""
            document.getElementById("porcmlg").value = ""
            document.getElementById("kgmg").value = ""
            document.getElementById("kgmlg").value = ""
          return;
          }

          if (pb>0 || pt>0) {
            densidad = c - (m * (Math.log10(pb + pt)))
            console.log("La densidad es: "+densidad)
            porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
            porcentajemm = (100 - porcentajemg).toFixed(2);
            kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
            kilogramosmm = (peso - kilogramosmg).toFixed(2);

            document.getElementById("porcmg").value = porcentajemg;
            document.getElementById("porcmlg").value = porcentajemm;
            document.getElementById("kgmg").value = kilogramosmg;
            document.getElementById("kgmlg").value = kilogramosmm;
          }
          break;

          case "6":
          c = parseFloat(document.getElementById("ccuadro").value)
          m = parseFloat(document.getElementById("mcuadro").value)
          pb = parseInt(document.getElementById("pcbi1").value) 
          pse = parseInt(document.getElementById("pcse1").value) 
          peso = document.getElementById("peso").value;

          if (!peso){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
            document.getElementById("porcmg").value = ""
            document.getElementById("porcmlg").value = ""
            document.getElementById("kgmg").value = ""
            document.getElementById("kgmlg").value = ""
          return;
          }

          if (pb>0 || pse>0) {
            densidad = c - (m * (Math.log10(pb + pse)))
            console.log("La densidad es: "+densidad)
            porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
            porcentajemm = (100 - porcentajemg).toFixed(2);
            kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
            kilogramosmm = (peso - kilogramosmg).toFixed(2);

            document.getElementById("porcmg").value = porcentajemg;
            document.getElementById("porcmlg").value = porcentajemm;
            document.getElementById("kgmg").value = kilogramosmg;
            document.getElementById("kgmlg").value = kilogramosmm;
          }
          break;

          case "7":
              c = parseFloat(document.getElementById("ccuadro").value)
              m = parseFloat(document.getElementById("mcuadro").value)
              pb = parseInt(document.getElementById("pcbi1").value) 
              psi = parseInt(document.getElementById("pcsi1").value) 
              peso = document.getElementById("peso").value;

              if (!peso){
                alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
                document.getElementById("porcmg").value = ""
                document.getElementById("porcmlg").value = ""
                document.getElementById("kgmg").value = ""
                document.getElementById("kgmlg").value = ""
              return;
              }

              if (pb>0 || psi>0) {
                densidad = c - (m * (Math.log10(pb + psi)))
                console.log("La densidad es: "+densidad)
                porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
                porcentajemm = (100 - porcentajemg).toFixed(2);
                kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
                kilogramosmm = (peso - kilogramosmg).toFixed(2);

                document.getElementById("porcmg").value = porcentajemg;
                document.getElementById("porcmlg").value = porcentajemm;
                document.getElementById("kgmg").value = kilogramosmg;
                document.getElementById("kgmlg").value = kilogramosmm;
              }
              break;

          case "8":
              c = parseFloat(document.getElementById("ccuadro").value)
              m = parseFloat(document.getElementById("mcuadro").value)
              pt = parseInt(document.getElementById("pcti1").value) 
              pse = parseInt(document.getElementById("pcse1").value) 
              peso = document.getElementById("peso").value;

              if (!peso){
                alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
                document.getElementById("porcmg").value = ""
                document.getElementById("porcmlg").value = ""
                document.getElementById("kgmg").value = ""
                document.getElementById("kgmlg").value = ""
              return;
              }

              if (pt>0 || pse>0) {
                densidad = c - (m * (Math.log10(pt + pse)))
                console.log("La densidad es: "+densidad)
                porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
                porcentajemm = (100 - porcentajemg).toFixed(2);
                kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
                kilogramosmm = (peso - kilogramosmg).toFixed(2);

                document.getElementById("porcmg").value = porcentajemg;
                document.getElementById("porcmlg").value = porcentajemm;
                document.getElementById("kgmg").value = kilogramosmg;
                document.getElementById("kgmlg").value = kilogramosmm;
              }
              break;
          
          case "9":
              c = parseFloat(document.getElementById("ccuadro").value)
              m = parseFloat(document.getElementById("mcuadro").value)
              pt = parseInt(document.getElementById("pcti1").value) 
              psi = parseInt(document.getElementById("pcsi1").value) 
              peso = document.getElementById("peso").value;

              if (!peso){
                alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
                document.getElementById("porcmg").value = ""
                document.getElementById("porcmlg").value = ""
                document.getElementById("kgmg").value = ""
                document.getElementById("kgmlg").value = ""
              return;
              }

              if (pt>0 || psi>0) {
                densidad = c - (m * (Math.log10(pt + psi)))
                console.log("La densidad es: "+densidad)
                porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
                porcentajemm = (100 - porcentajemg).toFixed(2);
                kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
                kilogramosmm = (peso - kilogramosmg).toFixed(2);

                document.getElementById("porcmg").value = porcentajemg;
                document.getElementById("porcmlg").value = porcentajemm;
                document.getElementById("kgmg").value = kilogramosmg;
                document.getElementById("kgmlg").value = kilogramosmm;
              }
              break;
              
          case "10":
                c = parseFloat(document.getElementById("ccuadro").value)
                m = parseFloat(document.getElementById("mcuadro").value)
                pse = parseInt(document.getElementById("pcse1").value) 
                psi = parseInt(document.getElementById("pcsi1").value) 
                peso = document.getElementById("peso").value;
        
                if (!peso){
                  alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
                  document.getElementById("porcmg").value = ""
                  document.getElementById("porcmlg").value = ""
                  document.getElementById("kgmg").value = ""
                  document.getElementById("kgmlg").value = ""
                return;
                }
        
                if (pse>0 || psi>0) {
                  densidad = c - (m * (Math.log10(pse + psi)))
                  console.log("La densidad es: "+densidad)
                  porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
                  porcentajemm = (100 - porcentajemg).toFixed(2);
                  kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
                  kilogramosmm = (peso - kilogramosmg).toFixed(2);
        
                  document.getElementById("porcmg").value = porcentajemg;
                  document.getElementById("porcmlg").value = porcentajemm;
                  document.getElementById("kgmg").value = kilogramosmg;
                  document.getElementById("kgmlg").value = kilogramosmm;
                }
                break;
          
          case "11":
            c = parseFloat(document.getElementById("ccuadro").value)
            m = parseFloat(document.getElementById("mcuadro").value)
            pb = parseFloat(document.getElementById("pcbi1").value)
            pt = parseFloat(document.getElementById("pcti1").value)
            pse = parseInt(document.getElementById("pcse1").value) 
            peso = document.getElementById("peso").value;

            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg").value = ""
              document.getElementById("porcmlg").value = ""
              document.getElementById("kgmg").value = ""
              document.getElementById("kgmlg").value = ""
            return;
            }

            if (pb>0 || pt>0 || pse>0) {
              densidad = c - (m * (Math.log10(pb + pt + pse)))
              console.log("La densidad es: "+densidad)
              porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);

              document.getElementById("porcmg").value = porcentajemg;
              document.getElementById("porcmlg").value = porcentajemm;
              document.getElementById("kgmg").value = kilogramosmg;
              document.getElementById("kgmlg").value = kilogramosmm;
            }
            break;

          case "12":
            c = parseFloat(document.getElementById("ccuadro").value)
            m = parseFloat(document.getElementById("mcuadro").value)
            pb = parseFloat(document.getElementById("pcbi1").value)
            pt = parseFloat(document.getElementById("pcti1").value)
            psi = parseInt(document.getElementById("pcsi1").value) 
            peso = document.getElementById("peso").value;

            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg").value = ""
              document.getElementById("porcmlg").value = ""
              document.getElementById("kgmg").value = ""
              document.getElementById("kgmlg").value = ""
            return;
            }

            if (pb>0 || pt>0 || psi>0) {
              densidad = c - (m * (Math.log10(pb + pt + psi)))
              console.log("La densidad es: "+densidad)
              porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);

              document.getElementById("porcmg").value = porcentajemg;
              document.getElementById("porcmlg").value = porcentajemm;
              document.getElementById("kgmg").value = kilogramosmg;
              document.getElementById("kgmlg").value = kilogramosmm;
            }
            break;
          
          case "13":
            c = parseFloat(document.getElementById("ccuadro").value)
            m = parseFloat(document.getElementById("mcuadro").value)
            pb = parseFloat(document.getElementById("pcbi1").value)
            pse = parseFloat(document.getElementById("pcse1").value)
            psi = parseInt(document.getElementById("pcsi1").value) 
            peso = document.getElementById("peso").value;

            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg").value = ""
              document.getElementById("porcmlg").value = ""
              document.getElementById("kgmg").value = ""
              document.getElementById("kgmlg").value = ""
            return;
            }

            if (pb>0 || pse>0 || psi>0) {
              densidad = c - (m * (Math.log10(pb + pse + psi)))
              console.log("La densidad es: "+densidad)
              porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);

              document.getElementById("porcmg").value = porcentajemg;
              document.getElementById("porcmlg").value = porcentajemm;
              document.getElementById("kgmg").value = kilogramosmg;
              document.getElementById("kgmlg").value = kilogramosmm;
            }
            break;
          
          case "14":
              c = parseFloat(document.getElementById("ccuadro").value)
              m = parseFloat(document.getElementById("mcuadro").value)
              pt = parseFloat(document.getElementById("pcti1").value)
              pse = parseFloat(document.getElementById("pcse1").value)
              psi = parseInt(document.getElementById("pcsi1").value) 
              peso = document.getElementById("peso").value;
        
              if (!peso){
                alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
                document.getElementById("porcmg").value = ""
                document.getElementById("porcmlg").value = ""
                document.getElementById("kgmg").value = ""
                document.getElementById("kgmlg").value = ""
              return;
              }
        
              if (pt>0 || pse>0 || psi>0) {
                densidad = c - (m * (Math.log10(pt + pse + psi)))
                console.log("La densidad es: "+densidad)
                porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
                porcentajemm = (100 - porcentajemg).toFixed(2);
                kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
                kilogramosmm = (peso - kilogramosmg).toFixed(2);
        
                document.getElementById("porcmg").value = porcentajemg;
                document.getElementById("porcmlg").value = porcentajemm;
                document.getElementById("kgmg").value = kilogramosmg;
                document.getElementById("kgmlg").value = kilogramosmm;
              }
              break;

          case "15":
              c = parseFloat(document.getElementById("ccuadro").value)
              m = parseFloat(document.getElementById("mcuadro").value)
              pb = parseFloat(document.getElementById("pcbi1").value)
              pt = parseFloat(document.getElementById("pcti1").value)
              pse = parseFloat(document.getElementById("pcse1").value)
              psi = parseInt(document.getElementById("pcsi1").value) 
              peso = document.getElementById("peso").value;
        
              if (!peso){
                alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
                document.getElementById("porcmg").value = ""
                document.getElementById("porcmlg").value = ""
                document.getElementById("kgmg").value = ""
                document.getElementById("kgmlg").value = ""
              return;
              }
        
              if (pb>0 || pt>0 || pse>0 || psi>0) {
                densidad = c - (m * (Math.log10(pb + pt + pse + psi)))
                console.log("La densidad es: "+densidad)
                porcentajemg = (((4.95 / densidad ) - 4.50)*100).toFixed(2);
                porcentajemm = (100 - porcentajemg).toFixed(2);
                kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
                kilogramosmm = (peso - kilogramosmg).toFixed(2);
        
                document.getElementById("porcmg").value = porcentajemg;
                document.getElementById("porcmlg").value = porcentajemm;
                document.getElementById("kgmg").value = kilogramosmg;
                document.getElementById("kgmlg").value = kilogramosmm;
              }
              break;   
          }
        break;

    case "brozek":
      document.getElementById("porcmg3").value = ""
      document.getElementById("porcmlg3").value = ""
      document.getElementById("kgmg3").value = ""
      document.getElementById("kgmlg3").value = ""
      
      
      switch (cantidad3){
        case "1":
          c = parseFloat(document.getElementById("ccuadro3").value);
          m = parseFloat(document.getElementById("mcuadro3").value);
          pb = parseInt(document.getElementById("pbbrozek").value);
          /*let  pb = ((document.getElementById("pcbicipital").value) =="")? 0 : parseInt(document.getElementById("pcbicipital").value);*/
          peso = document.getElementById("peso").value;
          console.log("Para un pliegue "+pb+" "+c+","+m)
          console.log("Bicipital: " +pb)
          if (!peso){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg3").value = ""
              document.getElementById("porcmlg3").value = ""
              document.getElementById("kgmg3").value = ""
              document.getElementById("kgmlg3").value = ""
            return;
            }

          if (pb>0) {
            console.log(pb)
                densidad = c - (m * (Math.log10(pb)))
                console.log("La densidad es: "+densidad)
                porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
                porcentajemm = (100 - porcentajemg).toFixed(2);
                kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
                kilogramosmm = (peso - kilogramosmg).toFixed(2);
                console.log(porcentajemg+" "+porcentajemm+" "+kilogramosmg)

                document.getElementById("porcmg3").value = porcentajemg;
                document.getElementById("porcmlg3").value = porcentajemm;
                document.getElementById("kgmg3").value = kilogramosmg;
                document.getElementById("kgmlg3").value = kilogramosmm;

            }

          break;

        case "2":
          c = parseFloat(document.getElementById("ccuadro3").value)
          m = parseFloat(document.getElementById("mcuadro3").value)
          pt = parseInt(document.getElementById("ptbrozek").value) 
          peso = document.getElementById("peso").value;
          console.log("Para dos pliegue "+c+","+m)
          console.log(pt)
          
          if (!peso){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg3").value = ""
              document.getElementById("porcmlg3").value = ""
              document.getElementById("kgmg3").value = ""
              document.getElementById("kgmlg3").value = ""
            return;
            }

            if (pt>0) {
              densidad = c - (m * (Math.log10(pt)))
              console.log("La densidad es: "+densidad)
              porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);

              document.getElementById("porcmg3").value = porcentajemg;
              document.getElementById("porcmlg3").value = porcentajemm;
              document.getElementById("kgmg3").value = kilogramosmg;
              document.getElementById("kgmlg3").value = kilogramosmm;

            }
            break;

        case "3":

          c = parseFloat(document.getElementById("ccuadro3").value)
          m = parseFloat(document.getElementById("mcuadro3").value)
          pse = parseInt(document.getElementById("psebrozek").value) 
          peso = document.getElementById("peso").value;

          if (!peso){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
            document.getElementById("porcmg3").value = ""
            document.getElementById("porcmlg3").value = ""
            document.getElementById("kgmg3").value = ""
            document.getElementById("kgmlg3").value = ""
          return;
          }

          if (pse>0) {
            densidad = c - (m * (Math.log10(pse)))
            console.log("La densidad es: "+densidad)
            porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
            porcentajemm = (100 - porcentajemg).toFixed(2);
            kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
            kilogramosmm = (peso - kilogramosmg).toFixed(2);

            document.getElementById("porcmg3").value = porcentajemg;
            document.getElementById("porcmlg3").value = porcentajemm;
            document.getElementById("kgmg3").value = kilogramosmg;
            document.getElementById("kgmlg3").value = kilogramosmm;
          }
          break;

        case "4":
        c = parseFloat(document.getElementById("ccuadro3").value)
        m = parseFloat(document.getElementById("mcuadro3").value)
        psi = parseInt(document.getElementById("psibrozek").value) 
        peso = document.getElementById("peso").value;

        if (!peso){
          alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
          document.getElementById("porcmg3").value = ""
          document.getElementById("porcmlg3").value = ""
          document.getElementById("kgmg3").value = ""
          document.getElementById("kgmlg3").value = ""
        return;
        }

        if (psi>0) {
          densidad = c - (m * (Math.log10(psi)))
          console.log("La densidad es: "+densidad)
          porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
          porcentajemm = (100 - porcentajemg).toFixed(2);
          kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
          kilogramosmm = (peso - kilogramosmg).toFixed(2);

          document.getElementById("porcmg3").value = porcentajemg;
          document.getElementById("porcmlg3").value = porcentajemm;
          document.getElementById("kgmg3").value = kilogramosmg;
          document.getElementById("kgmlg3").value = kilogramosmm;
        }
        break;
      
        case "5":
        c = parseFloat(document.getElementById("ccuadro3").value)
        m = parseFloat(document.getElementById("mcuadro3").value)
        pb = parseInt(document.getElementById("pbbrozek").value) 
        pt = parseInt(document.getElementById("ptbrozek").value) 
        peso = document.getElementById("peso").value;

        if (!peso){
          alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
          document.getElementById("porcmg3").value = ""
          document.getElementById("porcmlg3").value = ""
          document.getElementById("kgmg3").value = ""
          document.getElementById("kgmlg3").value = ""
        return;
        }

        if (pb>0 || pt>0) {
          densidad = c - (m * (Math.log10(pb + pt)))
          console.log("La densidad es: "+densidad)
          porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
          porcentajemm = (100 - porcentajemg).toFixed(2);
          kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
          kilogramosmm = (peso - kilogramosmg).toFixed(2);

          document.getElementById("porcmg3").value = porcentajemg;
          document.getElementById("porcmlg3").value = porcentajemm;
          document.getElementById("kgmg3").value = kilogramosmg;
          document.getElementById("kgmlg3").value = kilogramosmm;
        }
        break;

        case "6":
          c = parseFloat(document.getElementById("ccuadro3").value)
          m = parseFloat(document.getElementById("mcuadro3").value)
        pb = parseInt(document.getElementById("pbbrozek").value) 
        pse = parseInt(document.getElementById("psebrozek").value) 
        peso = document.getElementById("peso").value;

        if (!peso){
          alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
          document.getElementById("porcmg3").value = ""
          document.getElementById("porcmlg3").value = ""
          document.getElementById("kgmg3").value = ""
          document.getElementById("kgmlg3").value = ""
        return;
        }

        if (pb>0 || pse>0) {
          densidad = c - (m * (Math.log10(pb + pse)))
          console.log("La densidad es: "+densidad)
          porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
          porcentajemm = (100 - porcentajemg).toFixed(2);
          kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
          kilogramosmm = (peso - kilogramosmg).toFixed(2);

          document.getElementById("porcmg3").value = porcentajemg;
          document.getElementById("porcmlg3").value = porcentajemm;
          document.getElementById("kgmg3").value = kilogramosmg;
          document.getElementById("kgmlg3").value = kilogramosmm;
        }
        break;

        case "7":
          c = parseFloat(document.getElementById("ccuadro3").value)
          m = parseFloat(document.getElementById("mcuadro3").value)
            pb = parseInt(document.getElementById("pbbrozek").value) 
            psi = parseInt(document.getElementById("psibrozek").value) 
            peso = document.getElementById("peso").value;

            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg3").value = ""
              document.getElementById("porcmlg3").value = ""
              document.getElementById("kgmg3").value = ""
              document.getElementById("kgmlg3").value = ""
            return;
            }

            if (pb>0 || psi>0) {
              densidad = c - (m * (Math.log10(pb + psi)))
              console.log("La densidad es: "+densidad)
              porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);

              document.getElementById("porcmg3").value = porcentajemg;
              document.getElementById("porcmlg3").value = porcentajemm;
              document.getElementById("kgmg3").value = kilogramosmg;
              document.getElementById("kgmlg3").value = kilogramosmm;
            }
            break;

        case "8":
          c = parseFloat(document.getElementById("ccuadro3").value)
          m = parseFloat(document.getElementById("mcuadro3").value)
            pt = parseInt(document.getElementById("ptbrozek").value) 
            pse = parseInt(document.getElementById("psebrozek").value) 
            peso = document.getElementById("peso").value;

            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg3").value = ""
              document.getElementById("porcmlg3").value = ""
              document.getElementById("kgmg3").value = ""
              document.getElementById("kgmlg3").value = ""
            return;
            }

            if (pt>0 || pse>0) {
              densidad = c - (m * (Math.log10(pt + pse)))
              console.log("La densidad es: "+densidad)
              porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);

              document.getElementById("porcmg3").value = porcentajemg;
              document.getElementById("porcmlg3").value = porcentajemm;
              document.getElementById("kgmg3").value = kilogramosmg;
              document.getElementById("kgmlg3").value = kilogramosmm;
            }
            break;
        
        case "9":
          c = parseFloat(document.getElementById("ccuadro3").value)
          m = parseFloat(document.getElementById("mcuadro3").value)
            pt = parseInt(document.getElementById("ptbrozek").value) 
            psi = parseInt(document.getElementById("psibrozek").value) 
            peso = document.getElementById("peso").value;

            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg3").value = ""
              document.getElementById("porcmlg3").value = ""
              document.getElementById("kgmg3").value = ""
              document.getElementById("kgmlg3").value = ""
            return;
            }

            if (pt>0 || psi>0) {
              densidad = c - (m * (Math.log10(pt + psi)))
              console.log("La densidad es: "+densidad)
              porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);

              document.getElementById("porcmg3").value = porcentajemg;
              document.getElementById("porcmlg3").value = porcentajemm;
              document.getElementById("kgmg3").value = kilogramosmg;
              document.getElementById("kgmlg3").value = kilogramosmm;
            }
            break;
            
        case "10":
          c = parseFloat(document.getElementById("ccuadro3").value)
          m = parseFloat(document.getElementById("mcuadro3").value)
              pse = parseInt(document.getElementById("psebrozek").value) 
              psi = parseInt(document.getElementById("psibrozek").value) 
              peso = document.getElementById("peso").value;
      
              if (!peso){
                alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
                document.getElementById("porcmg3").value = ""
                document.getElementById("porcmlg3").value = ""
                document.getElementById("kgmg3").value = ""
                document.getElementById("kgmlg3").value = ""
              return;
              }
      
              if (pse>0 || psi>0) {
                densidad = c - (m * (Math.log10(pse + psi)))
                console.log("La densidad es: "+densidad)
                porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
                porcentajemm = (100 - porcentajemg).toFixed(2);
                kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
                kilogramosmm = (peso - kilogramosmg).toFixed(2);
      
                document.getElementById("porcmg3").value = porcentajemg;
                document.getElementById("porcmlg3").value = porcentajemm;
                document.getElementById("kgmg3").value = kilogramosmg;
                document.getElementById("kgmlg3").value = kilogramosmm;
              }
              break;
        
        case "11":
          c = parseFloat(document.getElementById("ccuadro3").value)
        m = parseFloat(document.getElementById("mcuadro3").value)
          pb = parseFloat(document.getElementById("pbbrozek").value)
          pt = parseFloat(document.getElementById("ptbrozek").value)
          pse = parseInt(document.getElementById("psebrozek").value) 
          peso = document.getElementById("peso").value;

          if (!peso){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
            document.getElementById("porcmg3").value = ""
            document.getElementById("porcmlg3").value = ""
            document.getElementById("kgmg3").value = ""
            document.getElementById("kgmlg3").value = ""
          return;
          }

          if (pb>0 || pt>0 || pse>0) {
            densidad = c - (m * (Math.log10(pb + pt + pse)))
            console.log("La densidad es: "+densidad)
            porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
            porcentajemm = (100 - porcentajemg).toFixed(2);
            kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
            kilogramosmm = (peso - kilogramosmg).toFixed(2);

            document.getElementById("porcmg3").value = porcentajemg;
            document.getElementById("porcmlg3").value = porcentajemm;
            document.getElementById("kgmg3").value = kilogramosmg;
            document.getElementById("kgmlg3").value = kilogramosmm;
          }
          break;

        case "12":
          c = parseFloat(document.getElementById("ccuadro3").value)
        m = parseFloat(document.getElementById("mcuadro3").value)
          pb = parseFloat(document.getElementById("pbbrozek").value)
          pt = parseFloat(document.getElementById("ptbrozek").value)
          psi = parseInt(document.getElementById("psibrozek").value) 
          peso = document.getElementById("peso").value;

          if (!peso){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
            document.getElementById("porcmg3").value = ""
            document.getElementById("porcmlg3").value = ""
            document.getElementById("kgmg3").value = ""
            document.getElementById("kgmlg3").value = ""
          return;
          }

          if (pb>0 || pt>0 || psi>0) {
            densidad = c - (m * (Math.log10(pb + pt + psi)))
            console.log("La densidad es: "+densidad)
            porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
            porcentajemm = (100 - porcentajemg).toFixed(2);
            kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
            kilogramosmm = (peso - kilogramosmg).toFixed(2);

            document.getElementById("porcmg3").value = porcentajemg;
            document.getElementById("porcmlg3").value = porcentajemm;
            document.getElementById("kgmg3").value = kilogramosmg;
            document.getElementById("kgmlg3").value = kilogramosmm;
          }
          break;
        
        case "13":
          c = parseFloat(document.getElementById("ccuadro3").value)
          m = parseFloat(document.getElementById("mcuadro3").value)
          pb = parseFloat(document.getElementById("pbbrozek").value)
          pse = parseFloat(document.getElementById("psebrozek").value)
          psi = parseInt(document.getElementById("psibrozek").value) 
          peso = document.getElementById("peso").value;

          if (!peso){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
            document.getElementById("porcmg3").value = ""
            document.getElementById("porcmlg3").value = ""
            document.getElementById("kgmg3").value = ""
            document.getElementById("kgmlg3").value = ""
          return;
          }

          if (pb>0 || pse>0 || psi>0) {
            densidad = c - (m * (Math.log10(pb + pse + psi)))
            console.log("La densidad es: "+densidad)
            porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
            porcentajemm = (100 - porcentajemg).toFixed(2);
            kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
            kilogramosmm = (peso - kilogramosmg).toFixed(2);

            document.getElementById("porcmg3").value = porcentajemg;
            document.getElementById("porcmlg3").value = porcentajemm;
            document.getElementById("kgmg3").value = kilogramosmg;
            document.getElementById("kgmlg3").value = kilogramosmm;
          }
          break;
        
        case "14":
          c = parseFloat(document.getElementById("ccuadro3").value)
          m = parseFloat(document.getElementById("mcuadro3").value)
            pt = parseFloat(document.getElementById("ptbrozek").value)
            pse = parseFloat(document.getElementById("psebrozek").value)
            psi = parseInt(document.getElementById("psibrozek").value) 
            peso = document.getElementById("peso").value;
      
            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg3").value = ""
              document.getElementById("porcmlg3").value = ""
              document.getElementById("kgmg3").value = ""
              document.getElementById("kgmlg3").value = ""
            return;
            }
      
            if (pt>0 || pse>0 || psi>0) {
              densidad = c - (m * (Math.log10(pt + pse + psi)))
              console.log("La densidad es: "+densidad)
              porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);
      
              document.getElementById("porcmg3").value = porcentajemg;
              document.getElementById("porcmlg3").value = porcentajemm;
              document.getElementById("kgmg3").value = kilogramosmg;
              document.getElementById("kgmlg3").value = kilogramosmm;
            }
            break;

        case "15":
          c = parseFloat(document.getElementById("ccuadro3").value)
          m = parseFloat(document.getElementById("mcuadro3").value)
            pb = parseFloat(document.getElementById("pbbrozek").value)
            pt = parseFloat(document.getElementById("ptbrozek").value)
            pse = parseFloat(document.getElementById("psebrozek").value)
            psi = parseInt(document.getElementById("psibrozek").value) 
            peso = document.getElementById("peso").value;
      
            if (!peso){
              alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
              document.getElementById("porcmg3").value = ""
              document.getElementById("porcmlg3").value = ""
              document.getElementById("kgmg3").value = ""
              document.getElementById("kgmlg3").value = ""
            return;
            }
      
            if (pb>0 || pt>0 || pse>0 || psi>0) {
              densidad = c - (m * (Math.log10(pb + pt + pse + psi)))
              console.log("La densidad es: "+densidad)
              porcentajemg = (((4.57 / densidad ) - 4.142)*100).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);
      
              document.getElementById("porcmg3").value = porcentajemg;
              document.getElementById("porcmlg3").value = porcentajemm;
              document.getElementById("kgmg3").value = kilogramosmg;
              document.getElementById("kgmlg3").value = kilogramosmm;
            }
            break;   
      }
      break;

    case "siri":

      console.log("Opción de siri");
      
        document.getElementById("porcmg2").value = ""
        document.getElementById("porcmlg2").value = ""
        document.getElementById("kgmg2").value = ""
        document.getElementById("kgmlg2").value = ""

        peso = parseFloat(document.getElementById("peso").value);
        pt = parseInt(document.getElementById("ptsiri").value);
        psi = parseInt(document.getElementById("psisiri").value);
        pse = parseInt(document.getElementById("psesiri").value);
        pmusl = parseInt(document.getElementById("pmsiri").value);
        pabd = parseInt(document.getElementById("pasiri").value);
        pgem = parseInt(document.getElementById("pgsiri").value);
        edad = parseInt(document.getElementById("edad").value);

        if (!peso){
          alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para el peso");
            document.getElementById("porcmg2").value = ""
            document.getElementById("porcmlg2").value = ""
            document.getElementById("kgmg2").value = ""
            document.getElementById("kgmlg2").value = ""
          return;
          }

          if (!edad){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para la edad");
              document.getElementById("porcmg2").value = ""
              document.getElementById("porcmlg2").value = ""
              document.getElementById("kgmg2").value = ""
              document.getElementById("kgmlg2").value = ""
            return;
            }


        
          if (pt>0 || psi>0 || pse>0 || pmusl>0||pabd>0||pgem>0) {

            densidad = (1.10326 - (0.000031 * edad) - (0.00036 * (pt+psi+pse+pmusl+pabd+pgem)))
            console.log("La densidad es: "+densidad)
            porcentajemg = (((4.95 / densidad ) - 4.5)*100).toFixed(2);
            porcentajemm = (100 - porcentajemg).toFixed(2);
            kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
            kilogramosmm = (peso - kilogramosmg).toFixed(2);
    
            document.getElementById("porcmg2").value = porcentajemg;
            document.getElementById("porcmlg2").value = porcentajemm;
            document.getElementById("kgmg2").value = kilogramosmg;
            document.getElementById("kgmlg2").value = kilogramosmm;

          }
        
      break;

    case "densitometria":

    console.log("Opción de Densitometría");
    console.log("Genero: "+value_genero);
    console.log("Talla: "+talla);
      document.getElementById("porcmg4").value = ""
      document.getElementById("porcmlg4").value = ""
      document.getElementById("kgmg4").value = ""
      document.getElementById("kgmlg4").value = ""
      document.getElementById("porcmg5").value = ""
      document.getElementById("porcmlg5").value = ""
      document.getElementById("kgmg5").value = ""
      document.getElementById("kgmlg5").value = ""
      
      switch (value_genero){
        case "Hombre":
          talla = (value_talla).toFixed(2);
          cintura= parseFloat(document.getElementById("cintura").value);
          pabd= parseInt (document.getElementById("pcabdensh").value);
          pmusl= parseInt(document.getElementById("pcmusldensh").value);
          pse= parseInt(document.getElementById("pcsedensh").value);

          if (!value_talla){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para la talla");
              document.getElementById("porcmg4").value = ""
              document.getElementById("porcmlg4").value = ""
              document.getElementById("kgmg4").value = ""
              document.getElementById("kgmlg4").value = ""
            return;
            }
          
          if (!cintura){
            alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para la cintura");
              document.getElementById("porcmg4").value = ""
              document.getElementById("porcmlg4").value = ""
              document.getElementById("kgmg4").value = ""
              document.getElementById("kgmlg4").value = ""
            return;
            }
          
            if (pabd>0 || pmsul>0 || pse>0) {
              //26.02 + 0.26 X1 + 0.17 X2 + 0.31 X3 + 0.13 X4 –23.59 X5.
              porcentajemg = (26.02 + (0.26*cintura) + (0.17*pabd)+ (0.31*pmusl)+(0.14*pse)-(23.59*talla)).toFixed(2);
              porcentajemm = (100 - porcentajemg).toFixed(2);
              kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
              kilogramosmm = (peso - kilogramosmg).toFixed(2);
      
              document.getElementById("porcmg4").value = porcentajemg;
              document.getElementById("porcmlg4").value = porcentajemm;
              document.getElementById("kgmg4").value = kilogramosmg;
              document.getElementById("kgmlg4").value = kilogramosmm;
  
            }
        break;

        case "Mujer":
        
        cintura= parseFloat(document.getElementById("cintura").value);
        pssupra= parseInt (document.getElementById("pcsupradensm").value);
        pmuslf= parseInt(document.getElementById("pcmusdensm").value);
        pma= parseInt(document.getElementById("pcmedaxdesnm").value);
        pb=parseInt(document.getElementById("pcbidensm").value);
        
        if (!cintura){
          alert("Cálculo de Masa Grasa:\n"+"Ingrese un valor para la cintura");
            document.getElementById("porcmg5").value = ""
            document.getElementById("porcmlg5").value = ""
            document.getElementById("kgmg5").value = ""
            document.getElementById("kgmlg5").value = ""
          return;
          }
        
          if (pssupra>0 || pmuslf>0 || pma>0 || pb >0) {
            //0.20 X1 + 0.25 X2 + 0.21 X3 + 0.25 X4 – 0.13 X5.
            porcentajemg = ((0.20*cintura) + (0.25*pssupra) + (0.21*pmuslf)+ (0.25*pma)-(0.13*pb)).toFixed(2);
            porcentajemm = (100 - porcentajemg).toFixed(2);
            kilogramosmg = ((peso * porcentajemg)/ 100).toFixed(2);
            kilogramosmm = (peso - kilogramosmg).toFixed(2);
    
            document.getElementById("porcmg5").value = porcentajemg;
            document.getElementById("porcmlg5").value = porcentajemm;
            document.getElementById("kgmg5").value = kilogramosmg;
            document.getElementById("kgmlg5").value = kilogramosmm;

          }
        break;
      }
      

    break;

    case "bioimpedancia":

    break;

  }
}

function seleccionFormulaMG(){

      formulamg = document.getElementById("formula_grasa").value;
      value_genero = document.getElementById("select_gen").value

      if (value_genero=="Seleccione un género"){
          alert("Selección de fórmulas de masa grasa dice: \n"+"Seleccione un género")
          document.getElementById("mg_durninwomersley_elements").style.display="none";
          document.getElementById("mg_densitometria_elements_h").style.display="none";
          document.getElementById("mg_densitometria_elements_m").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_h").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_m").style.display="none";
          document.getElementById("mg_siri_elements").style.display="none";
          document.getElementById("mg_brozek_elements").style.display="none";
          document.getElementById("formula_grasa").value = "none";

          return;
      }

      switch (formulamg){
        case "none":
          document.getElementById("mg_durninwomersley_elements").style.display="none";
          document.getElementById("mg_densitometria_elements_h").style.display="none";
          document.getElementById("mg_densitometria_elements_m").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_h").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_m").style.display="none";
          document.getElementById("mg_siri_elements").style.display="none";
          document.getElementById("mg_brozek_elements").style.display="none";

          break; 

        case "durnin":
          document.getElementById("mg_durninwomersley_elements").style.display="block";
          document.getElementById("mg_densitometria_elements_h").style.display="none";
          document.getElementById("mg_densitometria_elements_m").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_h").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_m").style.display="none";
          document.getElementById("mg_siri_elements").style.display="none";
          document.getElementById("mg_brozek_elements").style.display="none";
          document.getElementById("select_pliegues").value ="none";

        break;

        case "densitometria":
          if(value_genero == "Hombre"){
          document.getElementById("mg_densitometria_elements_h").style.display="block";
          document.getElementById("mg_durninwomersley_elements").style.display="none";
          document.getElementById("mg_densitometria_elements_m").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_h").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_m").style.display="none";
          document.getElementById("mg_siri_elements").style.display="none";
          document.getElementById("mg_brozek_elements").style.display="none";
          } else {
            if (value_genero == "Mujer"){
              document.getElementById("mg_densitometria_elements_m").style.display="block";
              document.getElementById("mg_densitometria_elements_h").style.display="none";
              document.getElementById("mg_durninwomersley_elements").style.display="none";
              document.getElementById("mg_bioimpedancia_elements_h").style.display="none";
              document.getElementById("mg_bioimpedancia_elements_m").style.display="none";
              document.getElementById("mg_siri_elements").style.display="none";
              document.getElementById("mg_brozek_elements").style.display="none";
            }
          }
        break;

        case "bioimpedancia":
          if(value_genero == "Hombre"){
              document.getElementById("mg_bioimpedancia_elements_h").style.display="block";
              document.getElementById("mg_bioimpedancia_elements_m").style.display="none";
              document.getElementById("mg_durninwomersley_elements").style.display="none";
              document.getElementById("mg_densitometria_elements_m").style.display="none";
              document.getElementById("mg_densitometria_elements_h").style.display="none";
              document.getElementById("mg_siri_elements").style.display="none";
              document.getElementById("mg_brozek_elements").style.display="none";
            } else {
              if (value_genero == "Mujer"){
                document.getElementById("mg_bioimpedancia_elements_m").style.display="block";
                document.getElementById("mg_bioimpedancia_elements_h").style.display="none";
                document.getElementById("mg_durninwomersley_elements").style.display="none";
                document.getElementById("mg_densitometria_elements_h").style.display="none";
                document.getElementById("mg_densitometria_elements_m").style.display="none";
                document.getElementById("mg_siri_elements").style.display="none";
                document.getElementById("mg_brozek_elements").style.display="none";
              }
            }
          
        break;

        case "siri":
          document.getElementById("mg_siri_elements").style.display="block";
          document.getElementById("mg_brozek_elements").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_m").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_h").style.display="none";
          document.getElementById("mg_durninwomersley_elements").style.display="none";
          document.getElementById("mg_densitometria_elements_h").style.display="none";
          document.getElementById("mg_densitometria_elements_m").style.display="none";
        break;

        case "brozek":
          document.getElementById("mg_brozek_elements").style.display="block";
          document.getElementById("mg_siri_elements").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_m").style.display="none";
          document.getElementById("mg_bioimpedancia_elements_h").style.display="none";
          document.getElementById("mg_durninwomersley_elements").style.display="none";
          document.getElementById("mg_densitometria_elements_h").style.display="none";
          document.getElementById("mg_densitometria_elements_m").style.display="none";
        break;
      }
  }