let genero
let peso
let talla
let edad

function validarDatos(){
    peso = parseFloat(document.imc_form.peso.value) 
    talla = parseFloat(document.imc_form.talla.value) 
    edad = parseInt(document.imc_form.edad.value) 

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

//Terminar función
function info_pi(){
    alert(
     "Fórmulas de peso ideal\n 1.- Índice de Broca: "+
     "Fórmula que fue desarrollada en 1871 por el médico y cirujano"+
     "francés Paul Broca a partir de estudios realizados sobre soldados."+
     "Es una forma rápida y sencilla de determinar la masa corporal de"+
     "referencia de una persona adulta a partir de su estatura. \n"+
     "La fórmula se calcula de la siguiente manera:\n"+
     "\n"+ 
     "Peso ideal (kg) = (Talla en cm - 100) ± 7 kg en hombres y ± 5 en mujeres.\n"+
     "\n"+
 
     "2.- Fórmula de Lorentz:"+
     "Este método es el más utilizado hoy en día, ya que tiene en cuenta la estatura de cada persona y su sexo."+ 
     "Las fórmulas de Lorentz usadas son las siguientes:\n"+
     "\n"+
     ">Peso ideal (kg) = Talla (cm) - 100 - [(Talla (cm) - 150) / 4] para hombres\n"+
     ">Peso ideal (kg) = Talla (cm) - 100 - [(Talla (cm) - 150) / 2.5] para mujeres)\n"+
     "\n"+
 
     "3.- Fórmula simplificada de Lorentz:\n "+
     "\n"+
     "Es una versión simplificada de la fórmula de Lorentz, desarrollada por el médico holandés Adolphe Quetelet en el siglo XIX. "+
     "Esta fórmula se calcula de la siguiente manera: \n"+
     "\n"+
     ">Peso ideal (kg) = (talla en cm x talla en cm) * 23 en hombres \n"+
     ">Peso ideal (kg) = (talla en cm x talla en cm) * 22 en mujeres \n"+
     "\n"+
 
     "4.- Fórmula general de Harvard: esta fórmula se atribuye a la Escuela de Medicina de la Universidad de Harvard\n"+
     "y se ha utilizado durante muchos años como una herramienta para evaluar el peso corporal. \n"+
     "Es importante destacar que, aunque esta fórmula es una herramienta común, existen otras formas "+
     "más precisas y específicas de calcular el peso ideal."  
    ) 
}

function calculo_pi(){
    
    //Tomar el valor de la fórmula, talla del cuadro de texto y edad
    var forpi = document.getElementById("idformulapi").value
    peso = parseFloat(document.imc_form.peso.value) 
    talla = parseFloat(document.imc_form.talla.value)
    edad = parseInt(document.imc_form.edad.value) 
    genero = document.getElementById("select_gen").value

    //Selección de peso ideal según la fórmula
    switch(forpi){
        case "indicebroca":
            if(genero=="Hombre"){
                pesoIdealMax = ((talla*100)-100 + 7).toFixed(1);
                pesoIdealMin = ((talla*100)-100 - 7).toFixed(1);
                pimax = pesoIdealMax.toString()
                pimin = pesoIdealMin.toString()
                document.pesoideal_form.pideal.value = "De "+ pimin + " a "+ pimax
                pimaxdif = Math.abs(peso-pimax)
                pimindif = Math.abs(peso-pimin)
                document.pesoideal_form.pidif.value = "De "+ pimaxdif + " a "+ pimindif

            } else {
                if(genero=="Mujer"){
                    pesoIdealMax = ((talla*100)-100 + 5).toFixed(1);
                    pesoIdealMin = ((talla*100)-100 - 5).toFixed(1);
                    pimax = pesoIdealMax.toString()
                    pimin = pesoIdealMin.toString()
                    document.pesoideal_form.pideal.value = "De "+ pimin + " a "+pimax
                    pimaxdif = Math.abs(peso-pimax)
                    pimindif = Math.abs(peso-pimin)
                    document.pesoideal_form.pidif.value = "De "+ pimindif + " a " + pimaxdif
                }
            }
            break;
            
        case "indicelorentz":
            if(genero=="Hombre"){
                pesoIdeal = ((talla*100)-100-(((talla*100)-150)/4)).toFixed(1);
                document.pesoideal_form.pideal.value = pesoIdeal
                pidif = Math.abs(peso-pesoIdeal).toFixed(1);
                document.pesoideal_form.pidif.value = pidif
            } else {
                if(genero=="Mujer"){
                    pesoIdeal = ((talla*100)-100-(((talla*100)-150)/2.5)).toFixed(1);
                    document.pesoideal_form.pideal.value = pesoIdeal
                    pidif = Math.abs(peso-pesoIdeal).toFixed(1);
                    document.pesoideal_form.pidif.value = pidif
                }
            }
            break;
           
        case "indicecorreglorentz":
            if(genero=="Hombre"){
                pesoIdeal = ((talla*talla)*23).toFixed(1);
                document.pesoideal_form.pideal.value = pesoIdeal
                pidif = Math.abs(peso - pesoIdeal).toFixed(1);
                document.pesoideal_form.pidif.value = pidif    
            } else {
                if(genero=="Mujer"){    
                    pesoIdeal = ((talla*talla)*22).toFixed(1);
                    document.pesoideal_form.pideal.value = pesoIdeal
                    pidif = Math.abs(peso-pesoIdeal).toFixed(1);
                    document.pesoideal_form.pidif.value = pidif
                    }
                }
            break;
        
        case "indiceharvard":
            if(genero=="Hombre"){
                pesoIdeal = ((talla*100)/2-20).toFixed(1);
                document.pesoideal_form.pideal.value = pesoIdeal
                pidif = Math.abs(peso-pesoIdeal).toFixed(2);
                document.pesoideal_form.pidif.value = pidif
            } else {
                if(genero=="Mujer"){    
                    pesoIdeal = ((talla*100)/2-25).toFixed(1);
                    document.pesoideal_form.pideal.value = pesoIdeal
                    pidif = Math.abs(peso-pesoIdeal).toFixed(1);
                    document.pesoideal_form.pidif.value = pidif
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
    
    cintura = parseFloat(document.icc_form.cintura.value)
    cadera = parseFloat(document.icc_form.cadera.value)
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
    {sexo:1, edad:1, formula: 4, c: 1.1092, m: 0.0042},
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
    {sexo:1, edad:1, formula: 15, c: 0.1162, m: 0.0063},

    //20 - 29 años
    {sexo: 1, edad:2, formula: 1, c: 1.1015, m:	0.0616},
    {sexo: 1, edad:2, formula: 2, c: 1.1131, m:	0.0053},
    {sexo: 1, edad:2, formula: 3, c: 1.136,	m: 0.0007},     
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
    {sexo:1, edad:3, formula: 13, c: 1.1315, m: 0.0051},
    {sexo:1, edad:3, formula: 14, c: 1.1393, m: 0.0544},
    {sexo:1, edad:3, formula: 15, c: 1.1422, m: 0.0544},

    //40 - 49 años
    {sexo:1, edad:4, formula: 1, c: 1.0829 , m: 0.0508},
    {sexo:1, edad:4, formula: 2, c: 1.1041 , m: 0.0609},
    {sexo:1, edad:4, formula: 3, c: 1.1246 , m: 0.0686},
    {sexo:1, edad:4, formula: 4, c: 1.1029 , m: 0.0483},
    {sexo:1, edad:4, formula: 5, c: 1.1174 , m: 0.0614},
    {sexo:1, edad:4, formula: 6, c: 1.1341 , m: 0.0068},
    {sexo:1, edad:4, formula: 7, c: 1.1171 , m: 0.0539},
    {sexo:1, edad:4, formula: 8, c: 1.1519 , m: 0.0771},
    {sexo:1, edad:4, formula: 9, c: 1.1383 , m: 0.0066},
    {sexo:1, edad:4, formula: 10, c: 1.1392 , m: 0.0633},
    {sexo:1, edad:4, formula: 11, c: 0.1153 , m: 0.0073},
    {sexo:1, edad:4, formula: 12, c: 1.1422 , m: 0.0647},
    {sexo:1, edad:4, formula: 13, c: 1.1452 , m: 0.0064},
    {sexo:1, edad:4, formula: 14, c: 1.1604 , m: 0.0716},
    {sexo:1, edad:4, formula: 15, c: 0.1162 , m: 0.0007},
    
    //50 o más años
    {sexo:1, edad:5, formula: 1, c: 1.0833 , m: 0.0617},
    {sexo:1, edad:5, formula: 2, c: 1.1027 , m: 0.0662},
    {sexo:1, edad:5, formula: 3, c: 1.1334 , m: 0.0076},
    {sexo:1, edad:5, formula: 4, c: 1.1193 , m: 0.0652},
    {sexo:1, edad:5, formula: 5, c: 1.1185 , m: 0.0683},
    {sexo:1, edad:5, formula: 6, c: 1.1427 , m: 0.0762},
    {sexo:1, edad:5, formula: 7, c: 1.1307 , m: 0.0618},
    {sexo:1, edad:5, formula: 8, c: 1.1527 , m: 0.0793},
    {sexo:1, edad:5, formula: 9, c: 1.1415 , m: 0.0718},
    {sexo:1, edad:5, formula: 10, c: 1.1582 , m: 0.0771},
    {sexo:1, edad:5, formula: 11, c: 1.1569 , m: 0.0078},
    {sexo:1, edad:5, formula: 12, c: 1.1473 , m: 0.0718},
    {sexo:1, edad:5, formula: 13, c: 1.1626 , m: 0.0768},
    {sexo:1, edad:5, formula: 14, c: 1.1689 , m: 0.0787},
    {sexo:1, edad:5, formula: 15, c: 1.1715 , m: 0.0779},

    /*<------------------Mujer------------------->*/
    //17 - 19 años
    {sexo:2, edad:1, formula: 1, c: 1.0889 , m: 0.0553},
    {sexo:2, edad:1, formula: 2, c: 1.1159 , m: 0.0648},
    {sexo:2, edad:1, formula: 3, c: 1.1081 , m: 0.0621},
    {sexo:2, edad:1, formula: 4, c: 1.0931 , m: 0.047},
    {sexo:2, edad:1, formula: 5, c: 1.129 , m: 0.0657},
    {sexo:2, edad:1, formula: 6, c: 1.1241 , m: 0.0643},
    {sexo:2, edad:1, formula: 7, c: 1.1113 , m: 0.0537},
    {sexo:2, edad:1, formula: 8, c: 1.1468 , m: 0.074},
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
    {sexo:2, edad:2, formula: 10, c: 1.1280 , m: 0.064},
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
    {sexo:2, edad: 3, formula:8, c:1.1356, m:0.068},
    {sexo:2, edad: 3, formula:9, c:1.1281, m:0.0644},
    {sexo:2, edad: 3, formula:10, c:1.1132, m:0.0564},
    {sexo:2, edad: 3, formula:11, c:1.1385, m:0.0654},
    {sexo:2, edad: 3, formula:12, c:1.1319, m:0.0624},
    {sexo:2, edad: 3, formula:13, c:1.1212, m:0.057},
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
    {sexo:2, edad: 4, formula:9, c:1.1198, m:0.063},
    {sexo:2, edad: 4, formula:10, c:1.0997, m:0.0509},
    {sexo:2, edad: 4, formula:11, c:1.1303, m:0.0635},
    {sexo:2, edad: 4, formula:12, c:1.1267, m:0.0626},
    {sexo:2, edad: 4, formula:13, c:1.1108, m:0.0536},
    {sexo:2, edad: 4, formula:14, c:1.1278, m:0.0609},
    {sexo:2, edad: 4, formula:15, c:1.1333, m:0.0612},


    //50 o más años
    {sexo:2, edad: 5, formula:1, c:1.0682, m:0.051},
    {sexo:2, edad: 5, formula:2, c:1.1160, m:0.0762},
    {sexo:2, edad: 5, formula:3, c:1.0899, m:0.059},
    {sexo:2, edad: 5, formula:4, c:1.0656, m:0.0419},
    {sexo:2, edad: 5, formula:5, c:1.1226, m:0.071},
    {sexo:2, edad: 5, formula:6, c:1.0857, m:0.0592},
    {sexo:2, edad: 5, formula:7, c:1.0857, m:0.049},
    {sexo:2, edad: 5, formula:8, c:1.1347, m:0.0742},
    {sexo:2, edad: 5, formula:9, c:1.1158, m:0.0635},
    {sexo:2, edad: 5, formula:10, c:1.0963, m:0.0523},
    {sexo:2, edad: 5, formula:11, c:1.1372, m:0.071},
    {sexo:2, edad: 5, formula:12, c:1.1227, m:0.0633},
    {sexo:2, edad: 5, formula:13, c:1.1063, m:0.0544},
    {sexo:2, edad: 5, formula:14, c:1.1298, m:0.065},
    {sexo:2, edad: 5, formula:15, c:1.1339, m:0.0645},

]

function buscar_cym(sexo, edad, formula) {
    value_genero = document.getElementById("select_gen").value
    value_edad = parseInt(document.imc_form.edad.value) 
    value_formula = parseInt(document.getElementById("select_pliegues").value)

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

    formula = value_formula
 
    // Buscar el objeto que coincida con los valores de sexo, edad e indicador
    const resultado = dataMasaGrasa.find((objeto) => {
      return objeto.sexo === sexo && objeto.edad === edad && objeto.formula === formula;
    });
  
    // Si se encontró un objeto que coincida, devolver el valor de c y m
    if (resultado) {
        document.mg_form.ccuadro.value = resultado.c
        document.mg_form.mcuadro.value = resultado.m
        console.log("Valores de c:"+resultado.c)
        console.log("Valores de m:"+resultado.m)
      return { c: resultado.c, m: resultado.m };
    } else {
      // Si no se encontró un objeto que coincida, devolver null o lanzar una excepción
      return null;
    }

    
  }

  