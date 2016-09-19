var HoneyMakerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;
};

// HoneyMakerBee.prototype = new Bee();
HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function makeHoney() {
	this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot--;
};
