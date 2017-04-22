var tablica = new Array("Janek", "Przemek", "Roland", "Grzegorz", "Wojtek");
var tablica2 = new Array("Basia", "Kasia", "Alicja", "Ela", "Magda");
var allNames = tablica.concat(tablica2);
function nowa () {
	var name = "Przemek";
 if (allNames.indexOf(name) === -1) {
    var x = allNames.push(name);
	console.log(allNames);
}
 else {
	console.log("takie imię już się pojawiło");
 }
}

nowa ();




