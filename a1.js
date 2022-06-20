"use strict";

const Shape = {
	type: "Shape"
}

Shape.prototype.getShape = function getShape(){
	return `This Shape is a "${this.type}"`;
};

function Dreieck(a, b, c){
	this.__proto__ = Shape;
	this.type = "Dreieck";
	this.a = a;
	this.b = b;
	this.c = c;
}

Dreieck.prototype.circumference = () => this.a + this.b + this.c; 

function Gleichschenklig(a){
	__proto__ = Dreieck;
	Dreieck(a, a, a);
}

Gleichschenklig.a = function(val){
	if(val){
		this.__proto__.a = val;
		this.__proto__.b = val;
	} else {
		return this.__proto__.a;
	}
};

Gleichschenklig.b = function(val){
	if(val){
		this.__proto__.a = val;
		this.__proto__.b = val;
	} else {
		return this.__proto__.b;
	}
};

