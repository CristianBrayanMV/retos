let total = +prompt('Ingrese cantidad de productos');


const cantToner = +prompt("Ingrese la cantidad de toner contabilizada");
total-=cantToner;

const cantCabezal = +prompt("Ingrese la cantidad de cabezales contabilizada");
total-=cantCabezal;
const cantTinta = +prompt("Ingrese la cantidad de tinta contabilizada");
total-=cantTinta;
if (total>0){
    alert(`Faltan ${total} productos que no se encontraron, en total tenemos \n ${cantToner} Toner\n ${cantCabezal} Cabezales\n ${cantTinta} Tinta\n el total deberia ser ${cantToner + cantCabezal + cantTinta +total} productos`);
}else{
    alert(`No faltan productos, en total tenemos \n ${cantToner} Toner\n ${cantCabezal} Cabezales\n ${cantTinta} Tinta\n el total son ${cantToner + cantCabezal + cantTinta} productos`);
}




