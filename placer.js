var latitude = function (latitude, lowBound, upBound) {
	this.latitude = latitude;
	this.upBound = upBound;
	this.lowBound = lowBound;
};

images = []

function imgObj(file, latitude) {
		this.file = file;
		this.latitude = latitude;
};

imgObj.prototype = Object.create(latitude.prototype);

imgObj.prototype.constructor = imgObj;

imgObj.prototype.place = function() {
	var placeLat = Math.floor(Math.random() * (this.latitude.upBound - this.latitude.lowBound + 1) + this.latitude.lowBound);
	var placeLong = Math.floor(Math.random() * 600)
	return [placeLat, placeLong];
};
	
imgObj.prototype.prnt = function() {
	console.log(this.file + " " + this.latitude)
};

var links = ["https://theringfinders.com/",
				"http://www.merriam-webster.com/dictionary/caprese",
				"https://twitter.com/tinysubversions/status/783819435517747202"];
				

var high = new latitude("high",400,600);
var mid = new latitude("mid",200,400);
var low = new latitude("low",0,200);

images = [];
var io1 = new imgObj("cc.jpg",high);
images.push(io1);
var io2 = new imgObj("hc.jpg",mid);
images.push(io2);
var io3 = new imgObj("lc.jpg",low);
images.push(io3);

var whichLink = Math.floor(Math.random() * links.length);

var whichImg = Math.floor(Math.random() * images.length);
var latLong = images[whichImg].place();
var lat = latLong[0];
var lng = latLong[1];
var elem = document.createElement("img");
elem.src = images[whichImg].file;
//elem.style.position = "absolute";
elem.style.left = lng + "px";
elem.style.bottom = lat + "px";
elem.setAttribute("height","100px");
elem.setAttribute("width","100px");
document.getElementById("cntr").appendChild(elem);
console.log(elem.style.position);

console.log("image: " + images[whichImg].file);
console.log("latitude: " + images[whichImg].latitude.latitude)
console.log("location: " + images[whichImg].place().placeLat);
console.log("link: " + links[whichLink]);

