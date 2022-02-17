

$(window).on('load', () => {
	
	$.ajax({
		type: 'GET',
		url: "https://singhabi.dev.fast.sheridanc.on.ca/SYST24444/Assignment2/js/planets.json",
		data: {},
		dataType: 'json',
		crossDomain: true,
		success: (data) => {
			let planets = data['solarSystem']['planets'];
			planets.forEach((elem, index) => {
				let planet = new Planet(elem['planetName'], 
					elem['planetColor'],
					elem['planetRadiusKM'],
					elem['distInMillionsKM']['fromSun'],
					elem['distInMillionsKM']['fromEarth'],
					elem['image'],
					index + 1
				);
				if (localStorage) {
					localStorage.setItem(elem['planetName'], JSON.stringify(planet));
					let temp = localStorage.getItem(elem['planetName']);
					console.log(JSON.parse(temp));
										
				} else alert("Error! localStorage is not available.");
			});
			
			/**
			if(localStorage){
				alert("Planets data has been parsed!");
			}**/
			
			$('div#content').html(
				"<ul>"+
					"<li id='Mercury'> Mercury <img src='images/"+JSON.parse(localStorage.getItem('Mercury'))._img+"'/></li>"+
					"<li id='Venus'> Venus <img src='images/"+JSON.parse(localStorage.getItem('Venus'))._img+"'/></li>"+
					"<li id='Earth'> Earth <img src='images/"+JSON.parse(localStorage.getItem('Earth'))._img+"'/></li>"+
					"<li id='Mars'> Mars <img src='images/"+JSON.parse(localStorage.getItem('Mars'))._img+"'/></li>"+
					"<li id='Jupiter'> Jupiter <img src='images/"+JSON.parse(localStorage.getItem('Jupiter'))._img+"'/></li>"+
					"<li id='Saturn'> Saturn <img src='images/"+JSON.parse(localStorage.getItem('Saturn'))._img+"'/></li>"+
					"<li id='Uranus'> Uranus <img src='images/"+JSON.parse(localStorage.getItem('Uranus'))._img+"'/></li>"+
					"<li id='Neptune'> Neptune <img src='images/"+JSON.parse(localStorage.getItem('Neptune'))._img+"'/></li>"+
				"</ul>"
			);
			
		}
	});
		
	
	
});

//Planet class

let Planet = class {
	
	
	constructor(name, color, radius, distSun, distEarth, img, id){
		this._name = name;
		this._color = color;
		this._radius = radius;
		this._distSun = distSun;
		this._distEarth = distEarth;
		this._img = img;
		this._id = id;
	}
	
	//getters
	get name(){
		return this._name;
	}
	
	get color(){
		return this._color;
	}
	
	get radius(){
		return this._radius;
	}
	
	get distSun(){
		return this._distSun;
	}
	
	get distEarth(){
		return this._distEarth;
	}
	
	get img(){
		return this._img;
	}
	
	get id(){
		return this._id;
	}
	
	
	
	
	//stringify() method
	stringify(){
		return "";
	}
}
		