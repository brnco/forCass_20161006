//ooooooooooooook

//init object class for latitude types
//each latitude type (low, mid, high) has a name (latitude); upperBound; lowerBound
var latitude = function (latitude, lowBound, upBound) {
	this.latitude = latitude;
	this.upBound = upBound;
	this.lowBound = lowBound;
};

//init object class for images
//each image has a file ('name.ext') and a latitude name (low mid high)
function imgObj(file, latitude) {
		this.file = file;
		this.latitude = latitude;
};

//assign imgObj as subclass of latitude
imgObj.prototype = Object.create(latitude.prototype);
imgObj.prototype.constructor = imgObj;

//function to act on image objects
//returns x-y value pair of their location
//location determined inside of containing div and also by bounds of latitude name
imgObj.prototype.place = function() {
	var placeLat = Math.floor(Math.random() * (this.latitude.upBound - this.latitude.lowBound + 1) + this.latitude.lowBound);
	var placeLong = Math.floor(Math.random() * 600)
	return [placeLat, placeLong];
};

//list object of links, which will be assigned to an image at random
var links = ["https://theringfinders.com/",
				"http://www.merriam-webster.com/dictionary/caprese",
				"https://twitter.com/tinysubversions/status/783819435517747202"];
				
//init different latitude types
var high = new latitude("high",400,600);
var mid = new latitude("mid",200,400);
var low = new latitude("low",0,200);

//add images here
//init list of image objects
images = [];
//add a new image with it's file and latitude
var io1 = new imgObj("cc.jpg",high);
//append that image object to the list of image objects
images.push(io1);
var io2 = new imgObj("hc.jpg",mid);
images.push(io2);
var io3 = new imgObj("lc.jpg",low);
images.push(io3);

//generate random index for list of links
var whichLink = Math.floor(Math.random() * links.length);

//generate random index for lsit of image objects
var whichImg = Math.floor(Math.random() * images.length);

//generate random x-y coordinates of chosen image object
var latLong = images[whichImg].place();
var lat = latLong[0]; //get just y
var lng = latLong[1]; //get just x

//ok do the thing
var elem = document.createElement("img"); //create html img tag
elem.src = images[whichImg].file; //give it a source
elem.style.position = "absolute"; //position it relative to parent div
elem.style.left = lng + "px"; //place the x value
elem.style.bottom = lat + "px"; //place the y value
elem.setAttribute("height","100px"); //give the image a size (for debugging)
elem.setAttribute("width","100px"); //give the image a size (for debugging)
var link = document.createElement("a"); //create an html link tag
link.href = links[whichLink]; //give the link tag an href
link.appendChild(elem); //append the image to the link (<a href='wherever.com'><img src="hc.jpg"></a>) <<is what we're making here
document.getElementById("cntr").appendChild(link); //append that link object to its containing div

//debugging
console.log("image: " + images[whichImg].file);
console.log("latitude: " + images[whichImg].latitude.latitude)
console.log("location: " + images[whichImg].place().placeLat);
console.log("link: " + links[whichLink]);

