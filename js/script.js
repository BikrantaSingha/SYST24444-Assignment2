
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
										
				} else alert("Error! localStorage is not available.");
			});
			
			
			if(localStorage){
				alert("Planets data has been parsed!");
			}
			
			displayMainPage();
			
			
			
			
		}
	}); //ajax ends here
	
	//if the planets are clicked, their details will be displayed
	$(document).on('click', "li", (event) => {
		displayPlanetDetails(event.target.id.toString());
	});
	
	//if the main page button is clicked on the details page, main page will be rendered again
	$(document).on('click', "button", () => {
		displayMainPage();
	});
	
		
	
	
});//window on load ends here


//helper functions

//loads the html for the main page
let displayMainPage = () => {
	
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
	
	mainPageBg();
}

//loads the html for planet details page
let displayPlanetDetails = (planet) => {
	$('div#content').html(
		"<h3> Details about the planet " + JSON.parse(localStorage.getItem(planet))._name + "</h3>" +
		"<p> The planet " + planet + " is " + JSON.parse(localStorage.getItem(planet))._color + 
		" and its radius is " + JSON.parse(localStorage.getItem(planet))._radius + "KM. </p>" + 
		"<p>It is " + JSON.parse(localStorage.getItem(planet))._distSun + "millions KM away from the Sun. " +
		"And " + JSON.parse(localStorage.getItem(planet))._distEarth + "millions KM away from our Earth. </p>" +
		
		"<button type='button' id='return-main-page'>Main Page</button><br><br>"
		
		
	);
	
	planetDetailsBg(planet);
}

//changes background for main page
let mainPageBg = () => {
	$('style#styles').html(
		".bg-img{" +
		"background-image: url('https://wallpapercave.com/wp/wp2088351.jpg'); " +
		"background-repeat: no-repeat; " +
		"background-size: cover; " +
		"opacity: 0.6; " +
		"position: absolute; " +
		"top: 0; " +
		"left: 0; " +
		"width: 100%; " +
		"height: 100%; " +
		"z-index: -3;"
	)
}

//changes background for the planets details page
let planetDetailsBg = (planet) => {
	$('style#styles').html(
		".bg-img{" +
		"background-image: url('images/" + JSON.parse(localStorage.getItem(planet))._img  + "'); " +
		"background-repeat: no-repeat; " +
		"background-size: cover; " +
		"opacity: 0.6; " +
		"position: absolute; " +
		"top: 0; " +
		"left: 0; " +
		"width: 100%; " +
		"height: 100%; " +
		"z-index: -3;"
	)
}

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
		