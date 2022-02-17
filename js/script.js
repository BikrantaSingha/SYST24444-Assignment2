

$(window).on('load', () => {
	
	$.ajax({
		type: 'GET',
		url: "https://singhabi.dev.fast.sheridanc.on.ca/SYST24444/Assignment2/js/planets.json",
		data: {},
		dataType: 'json',
		crossDomain: true,
		success: (data) => {
			let planets = data['solarSystem']['planets'];
			console.log(planets);
			planets.forEach((elem, index) => {
				let planet = new Planet(elem['planetName'], 
					elem['planetColor'],
					elem['planetRadiusKM'],
					elem['distInMillionsKM']['fromSun'],
					elem['distInMillionsKM']['fromEarth'],
					elem['image'],
					index + 1
				);
				console.log(elem['planetName']);
				
				if (localStorage) {
					localStorage.setItem(elem['planetName'], planet);
										
				} else alert("Error! localStorage is not available.");
			});
				
		}
	});
		
	
	
});

//Planet class

let Planet = class {
	constructor(name, color, radius, distSun, distEarth, img, id){
		this.name = name;
		this.color = color;
		this.radius = radius;
		this.distSun = distSun;
		this.distEarth = distEarth;
		this.img = img;
		this.id = id;
	}
	
	//getters
	/**
	get name(){
		return this.name;
	}
	
	get color(){
		return this.color;
	}
	
	get radius(){
		return this.radius;
	}
	
	get distSun(){
		return this.distSun;
	}
	
	get distEarth(){
		return this.distEarth;
	}
	
	get img(){
		return this.img;
	}
	
	get id(){
		return this.id;
	}
	
	//setters
	set name(newName){
		this.name = newName;
	}
	
	set color(newColor){
		this.color = newColor;
	}
	
	set radius(newRadius){
		this.radius = newRadius;
	}
	
	set distSun(newDist){
		this.distSun = newDist;
	}
	
	set distEarth(newDist){
		this.distEarth = newDist;
	}
	
	set img(newImg){
		this.img = newImg;
	}
	
	set id(newId){
		this.id = newId;
	}
	**/
	
	//stringify() method
	stringify(){
		return "";
	}
}
		