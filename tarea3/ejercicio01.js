
const pg = parseFloat(prompt("Ingrese el precio por galón en dolares"));
const l = parseFloat(prompt("¿Cuantos litros de leche produjo?"));
const galon = 3.785;
const tg = l/galon;
const change = tg.toString().split(".");
let ga = change[0] * pg;
if(change[1]==5){
    ga = ga +(pg /2);
    if (change[0]>0){

        console.log(`Hoy produjo ${parseInt(tg)} galones y medio y su pago es ${ga}$`);
    }else{
        console.log(`Hoy produjo medio galon y su pago es ${ga}$`);
    }
}else{

    console.log(`Hoy produjo ${parseInt(tg)} galones y su pago es ${ga}$`);
}


