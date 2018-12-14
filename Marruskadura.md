# Golf-jokoa marruskadura
//V: la velocidad del objeto en el tiempo t = v (t) [Medición en m / s].
//V0 - La velocidad inicial del objeto [Midiendo en m / s].
//t - Tiempo transcurrido desde el inicio del movimiento [Midiendo en s].
//μ - Coeficiente de fricción, una constante que representa la rugosidad de la superficie (0 - sin fricción alguna) [Medición en NaN - sin unidades para COF].
//g - Aceleración de la gravedad (constante) [Midiendo en m / s ^ 2], en la Tierra es 9.81 m / s ^ 2, pero puede usar 10.
//Variables globales
var μArea=1,1;
var μAirea=0,6;
var μBelarra=0,1;
var g=9,8;
var v;
var v0;
//objetos
var Pelota = new Pelota();
var Area = new Area();
var Lurra = new Lurra();
//marruskadura
function marruskaduraAirea(){
	if(pelota.y < lurra.y - pelota.height){
	 v = v0 - t(μAirea * g)
	}
}
function marruskaduraLurra(){
	if(pelota.y == lurra.y - pelota.height)&&(pelota.x<area.x)&&(pelota.x>area.x+area.weight){
	 v = v0 - t(μLurra * g)
	}
}
function marruskaduraArea(){
	if((pelota.y == lurra.y - pelota.height)&&(pelota.x>area.x)&&(pelota.x<area.x+area.weight)){
	 v = v0 - t(μArea * g)
	}
}
 //Formulak
 //F(frikzioa) = N * μ(COF)->
 //F(frikzioa) = mg * μ->
 //- mg * μ = ma -> 
 //a = - μ * g;
 //v = v0 + at->
 //v = v0 - t(μ * g).
