const ti = prompt("EL NAUFRAGO SATISFECHO LO SALUDA: \n ¿que tipo de hamburguesa desea, elija ?\n 1 - Hamburguesa sencilla \n 2 - Hamburguesa doble \n 3 - Hamburguesa triple \n Ingrese uno de los numeros segun su opción");

const n = +prompt("Cuantas hamburguesas quiere?");
const tp = prompt("que tipo de págo realizara\n 1 - Al contado \n 2 - Con tarjeta \n Ingrese el numero de opción porfavor");

let to = 0;
let tot = 0;

switch (ti) {
    case '1':
        to = n * 20.00;
        
        break;
    case '2':
        to = n * 25.00;
        
        break;
    case '3':
        
        to = n * 28.00;
        break;
    default:
        console.log("no tenemos esa opción en el menú");
        break;
}

if(tp === "1"){
    console.log(`El monto a pagar por ${n} hamburguesas es ${to}`);
}else if(tp === "2"){
    tot = to + (to * 0.05);  
    console.log(`El monto a pagar por ${n} hamburguesas es $${tot}`);
}
