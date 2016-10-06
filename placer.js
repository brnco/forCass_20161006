var latitude = function (latitude, lowBound, upBound) {
	this.latitude;
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
	var placeLong = Math.floor(Math.random() * 800)
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
images.push(io1);
var io3 = new imgObj("lc.jpg",low);
images.push(io1);

var whichLink = Math.floor(Math.random() * links.length);

var whichImg = Math.floor(Math.random() * images.length);

console.log("image: " + images[whichImg].file);
console.log("location: " + images[whichImg].place());
console.log("link: " + links[whichLink]);