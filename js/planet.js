
let Planet = class {
	constructor(name, color, radius, distSun, distEarth, img){
		this.name = name;
		this.color = color;
		this.radius = radius;
		this.distSun = distSun;
		this.distEarth = distEarth;
		this.img = img;
	}
	
	//getters
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
		
	
	//stringify() method
	stringify(){
		return "";
	}
}
		