const gol = {
    id: "1",
    nombre: "Gol",
    valor: parseInt(1500000),
}

const vento = {
    id: "2",
    nombre: "Vento",
    valor: parseInt(2000000),
}

const golf = {
    id: "3",
    nombre: "Golf",
    valor: parseInt(3000000),
}

const amarok = {
    id: "4",
    nombre: "Amarok",
    valor: parseInt(4000000),
}

const descuento = parseInt(200000)
const coutas60 = parseInt(300000)
const coutas80 = parseInt(500000)

function pedirNombre () {
let comprador1 = prompt("Bienvenido a concesionaria Volkswagen Argentina, Ingrese su Nombre y Apellido").toLowerCase()
console.log(comprador1)
}

pedirNombre()

function sumarInt60 (compra1, coutas60) {
    console.log(compra1 + coutas60)
}

function sumarInt80 (compra1, coutas80) {
    console.log(compra1 + coutas80)
}

let valorAuto
let valorAuto1
let precioContado

let respuesta1 = prompt("Usted desea comprar un vehiculo? Si/No.").toLowerCase()
console.log(respuesta1)

if(respuesta1 !== "si" && respuesta1 !== "no"){
        alert("Opcion no valida")
        console.log("Opcion no valida")
    } else {
            switch(respuesta1){
                case ("si"):
                    console.log("Eligio si")
                    let compra1 = prompt("Elija uno de los siguientes modelos a continuacion para seguir con la compra de su vehiculo: Gol / Vento / Golf / Amarok.").toLowerCase()
                        if(compra1 != "gol" && compra1 != "vento" && compra1 != "golf" && compra1 != "amarok"){
                        alert("opcion no valida.")
                        console.log("Opcion no valida.")
                    } else { 
                        switch(compra1){
                            case("gol"):
                            valorAuto = gol.valor
                            console.log(gol)
                            alert("El modelo Gol tiene un valor de " + gol.valor + " pesos.")
                            break
                
                            case("vento"):
                            valorAuto = vento.valor
                            console.log(vento)
                            alert("El modelo Vento tiene un valor de " + vento.valor + " pesos.")
                            break
                
                            case("golf"):
                            valorAuto = golf.valor
                            console.log(golf)
                            alert("El modelo Golf tiene un valor de " + golf.valor + " pesos.")
                            break

                            case("amarok"):
                            valorAuto = amarok.valor
                            console.log(amarok)
                            alert("El modelo Amarok tiene un valor de " + amarok.valor + " pesos.")
                            break
                        }

                        console.log(valorAuto)

                        let respuesta2 = prompt("Desea financiar el vehiculo? Si / No.").toLowerCase()
                        console.log(respuesta2)
                    if(respuesta2 === "si"){
                        alert("El metodo de financiacion es de 60 o 80 cuotas. (Al pago de 60 coutas se le sumará un interes total de 300.000 pesos y al plan de 80 coutas se le sumará un interes total de 500.000 pesos).")
                        let respuesta3 = prompt("En cuantas cuotas desea realizarlo? 60 / 80.")
                            if(respuesta3 !== "60" && respuesta3 !== "80"){
                            alert("Opcion no valida.")
                            console.log("Opcion Invalida.")
                            } else{
                                switch(respuesta3){
                                    case("60"):
                                    console.log("60 cuotas")
                                    sumarInt60(valorAuto, coutas60)
                                    valorAuto1 = valorAuto + coutas60
                                    alert("Dentro del plan usted deberá pagar " + valorAuto1 + " pesos. Haga click en el boton ACEPTAR para proceder a realizar el pago, muchas gracias!") 
                                    break

                                    case("80"):
                                    console.log("80 cuotas")
                                    sumarInt80(valorAuto, coutas80)
                                    valorAuto1 = valorAuto + coutas80
                                    alert("Dentro del plan usted deberá pagar " + valorAuto1 + " pesos. Haga click en el boton ACEPTAR para proceder a realizar el pago, muchas gracias!")
                                    break
                                }
                            } 
                        } else { 
                            precioContado = valorAuto - descuento
                            alert("Si desea abonar el vehiculo de contado, recibirá una bonificacion del 200Mil pesps del precio del vehiculo, teniendo que abonar: " + precioContado + " pesos, precione Aceptar para comunicarte con nuestra concecionaria mas cercana.")
                            alert("por favor contactarse al 0800-888-8338, muchas gracias!")
                    }
                }   
                case ("no"):
                alert("muchas gracias por visitar nuestra pagina!")
            }
    
} 





