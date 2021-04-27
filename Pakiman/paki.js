var imagenes = [];
imagenes["cauchin"]= "vaca.png";
imagenes["pokacho"]= "pollo.png";
imagenes["tocinauro"]= "cerdo.png";


var cauchin = new pakiman("cauchin", 100, 12);
var pokacho = new pakiman("pokacho", 90, 17);
var tocinauro = new pakiman("tocinauro", 990, 17000);

var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);
for (var p of coleccion)
{
  p.mostrar();
}
for (var x in coleccion[0])
{
  console.log(x);
}
