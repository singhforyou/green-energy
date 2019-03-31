window.addEventListener("load", preloader);

function preloader() {
	document.getElementById("title").innerHTML = "Solar Energy";

	const imagesPaths = [
		"./img/Solar.jpg",
		"./img/Windmill.jpg",
		"./img/Hydro.jpg"
	];
	const images = [];
	for (let i = 0; i < imagesPaths.length; i++) {
		images[i] = new Image();
		images[i].src = imagesPaths[i];
	}

	// Images ready to be used:
	console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);

	/* Get all buttons in a NODE LIST of buttons (array like structure) */
	var myNodelist = document.querySelectorAll("button");
	//document.getElementById("demo").innerHTML =	"The innerHTML of the second button is: " +	myNodelist[1].innerHTML;

	/* The reference to HTML-container which is being loaded dynamically */
	document.getElementById("title").innerHTML = resourceObj.solar.headingContent;
	document.getElementById("main-content").innerHTML = resourceObj.solar.bodyText;
	document.getElementById("main-image").src = resourceObj.solar.imgUrl;
	document.getElementById("main-image").alt = resourceObj.solar.imgAlt;
	  
};

/* Resource object declaration */
var resourceObj = {
	"solar": {
		"headingContent":"Solar Energy",
		"bodyText":"<p>Southern Canada has plentiful solar energy resources, with the most extensive resources being found in southern Saskatchewan, Alberta, Manitoba, and Ontario.</p><p>With 1210 megawatt peak (MWp) of installed photovoltaics in 2013, Canada ranked 15th in the world. Ontario has a program of moving away from coal and promoting renewable resources which has led to many industrial-scale photo-voltaic plants being built. Located in Sarnia, Ontario, the 97 megawatt Sarnia Photovoltaic Power Plant can power more than 12,000 homes, and in October 2010 was the largest solar farm in the world. Other plants include the 23.4 MW Arnprior Solar Generating Station and a 68 MW solar farm in Sault Ste. Marie.</p><p>Until recently, the main applications of solar energy technologies in Canada have been for solar thermal system applications for space heating, water heating and drying crops and lumber. In 2001, there were more than 12,000 residential solar water heating systems and 300 commercial / industrial solar hot water systems in use. These systems presently comprise a small fraction of Canada’s energy use, but some government studies suggest that they could make up as much as five percent of the country’s energy needs by the year 2025.</p><p>Canada has many regions that are sparsely populated and difficult to reach. Photovoltaic (PV) cells are increasingly used as standalone units, mostly as off-grid distributed electricity generation to power remote homes, telecommunications equipment, oil, and pipeline monitoring stations and navigational devices. The Canadian PV market has grown, and Canadian companies make solar modules, controls, specialised water pumps, high-efficiency refrigerators and solar lighting systems.</p><p>Source: Wikipedia.</p>",
		"imgUrl":"./img/Solar.jpg",
		"imgAlt":"Solar"
	},
	"wind": {
		"headingContent":"Wind Power",
		"bodyText":"<p>As of December 2017, wind power generating capacity was 12,252 megawatts (MW), providing about 6% of Canada's electricity demand. The Canadian Wind Energy Association, the wind industry lobby group, has outlined a future strategy for wind energy that would reach a capacity of 55 GW by 2025, meeting 20% of the country's energy needs.</p><p>In 2017, worldwide installed capacity of wind power was 514 GW.</p><p>Airflows can be used to run wind turbines. Modern utility-scale wind turbines range from around 600 kW to 9 MW of rated power. The power available from the wind is a function of the cube of the wind speed, so as wind speed increases, power output increases up to the maximum output for the particular turbine. Areas where winds are stronger and more constant, such as offshore and high altitude sites, are preferred locations for wind farms. Typically full load hours of wind turbines vary between 16 and 57 percent annually, but might be higher in particularly favorable offshore sites.</p><p>Wind-generated electricity met nearly 4% of global electricity demand in 2015, with nearly 63 GW of new wind power capacity installed. Wind energy was the leading source of new capacity in Europe, the US and Canada, and the second largest in China. In Denmark, wind energy met more than 40% of its electricity demand while Ireland, Portugal and Spain each met nearly 20%.</p><p>Globally, the long-term technical potential of wind energy is believed to be five times total current global energy production, or 40 times current electricity demand, assuming all practical barriers needed were overcome. This would require wind turbines to be installed over large areas, particularly in areas of higher wind resources, such as offshore. As offshore wind speeds average ~90% greater than that of land, so offshore resources can contribute substantially more energy than land stationed turbines.</p><p>Source: Wikipedia.</p>",
		"imgUrl":"./img/Windmill.jpg",
		"imgAlt":"Wind"
	},
	"hydro": {
		"headingContent":"Hydro Electricity",
		"bodyText":"<p>Canada has about 75 gigawatt (GW) of installed hydroelectric capacity, that produced 392 terawatt-hours (TWh) of electricity in 2013. Manitoba, British Columbia, Newfoundland and Labrador, Yukon and Quebec produce over 90% of their power from hydroelectricity.</p><p>In 2014, Canada had 542 hydroelectric stations with an installed capacity of 78,359 megawatts. Hydroelectricity has developed in Canada where geography and hydrography have permitted, particularly in Quebec which generates half of the hydroelectric power produced in Canada. Yet environmental and social issues will persist if sustainable hydro-power projects are not planned carefully. Some examples of this include stagnation of water, fish migration issues, uprooting of communities, habitat loss and possible extinction of species.</p><p>In 2017 the World renewable hydropower capacity was 1,154 GW.</p><p>Since water is about 800 times denser than air, even a slow flowing stream of water, or moderate sea swell, can yield considerable amounts of energy.</p><p>Hydropower is produced in 150 countries, with the Asia-Pacific region generating 32 percent of global hydropower in 2010. For countries having the largest percentage of electricity from renewables, the top 50 are primarily hydroelectric. China is the largest hydroelectricity producer, with 721 terawatt-hours of production in 2010, representing around 17 percent of domestic electricity use. There are now three hydroelectricity stations larger than 10 GW: the Three Gorges Dam in China, Itaipu Dam across the Brazil/Paraguay border, and Guri Dam in Venezuela.</p><p>Source: Wikipedia.</p>",
		"imgUrl":"./img/Hydro.jpg",
		"imgAlt":"Hydro"
	}
}

function loadSolar() {
	document.getElementById("title").innerHTML = resourceObj.solar.headingContent;
	document.getElementById("main-content").innerHTML = resourceObj.solar.bodyText;
	document.getElementById("main-image").src = resourceObj.solar.imgUrl;
	document.getElementById("main-image").alt = resourceObj.solar.imgAlt;
}

function loadWind() {
	document.getElementById("title").innerHTML = resourceObj.wind.headingContent;
	document.getElementById("main-content").innerHTML = resourceObj.wind.bodyText;
	document.getElementById("main-image").src = resourceObj.wind.imgUrl;
	document.getElementById("main-image").alt = resourceObj.wind.imgAlt;
}

function loadHydro() {
	document.getElementById("title").innerHTML = resourceObj.hydro.headingContent;
	document.getElementById("main-content").innerHTML = resourceObj.hydro.bodyText;
	document.getElementById("main-image").src = resourceObj.hydro.imgUrl;
	document.getElementById("main-image").alt = resourceObj.hydro.imgAlt;
}