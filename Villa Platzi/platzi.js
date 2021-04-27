var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
//Lienzo cerdo
var vc = document.getElementById("cerdoMove");
var papelCerdo = vc.getContext("2d");

//asignar numero teclas
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39
};

var fondo = {
  url : "tile.png",
  cargaOk : false
}
var vaca =
{
  url: "vaca.png",
  cargaOk : false
};

//objeto cerdo con su posicion
var cerdo =
{
  url: "cerdo.png",
  cargaOk : false,
  x: aleatorio(0, 420),
  y: aleatorio(0, 420)
};
var pollo =
{
  url: "pollo.png",
  cargaOk : false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener ("load", cargarVacas)

//Cargar Elemento Cerdo
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener ("load", cargarCerdos)

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener ("load", cargarPollos)

//Escuchar evento cuando se levante una tecla dentro del rango asignado
document.addEventListener("keydown", moverTeclado);


function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOk = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOk)
  {
    var cantidad = aleatorio(2, 20);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      var x = x*80;
      var y = y*80;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if (cerdo.cargaOk)
  {
    //Si el cerdo esta OK, lo vamos a dibujar en el segundo Lienzo no en el primero
    papelCerdo.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
  }

  if (pollo.cargaOk)
  {
    var x = aleatorio(0, 420);
    var y = aleatorio(0, 420);
    papel.drawImage(pollo.imagen, x, y);
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function moverTeclado(evento)
{
  var movimiento = 10;
  switch (evento.keyCode)
  {
    case teclas.UP:
      clear(cerdo.x, cerdo.y);
      cerdo.y = cerdo.y - movimiento;
      papelCerdo.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
      break;
    case teclas.DOWN:
      clear(cerdo.x, cerdo.y);
      cerdo.y = cerdo.y + movimiento;
      papelCerdo.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
      break;
    case teclas.LEFT:
      clear(cerdo.x, cerdo.y);
          cerdo.x = cerdo.x - movimiento;
          papelCerdo.drawImage(cerdo.imagen, cerdo.x, cerdo.y);

      break;
    case teclas.RIGHT:
      clear(cerdo.x, cerdo.y);
    cerdo.x = cerdo.x + movimiento;
    papelCerdo.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
      break;
    default:
    console.log("otra tecla");
    break;
  }
}

function clear(x, y){
    papelCerdo.clearRect(x, y, vc.width, vc.height);
  }
