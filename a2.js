"use strict"

class Shape{
	constructor(){
		this.type = "Shape";
	}
}

class Dreieck extends Shape{
	constructor(a, b, c){
		super();
		this.type = "Dreieck";
		this.a = a;
		this.b = b;
		this.c = c;
	}
}

class Gleichschenklig extends Dreieck{
	constructor(a){
		super(a, a, a);
	}

	get a(){
		return this.__proto__.a;
	}
	
	set a(val){
		this.__proto__.a = val;
		this.__proto__.b = bal;
	}

	get b(){
		return this.__proto__.b;
	}

	set b(val){
		this.__proto__.a = val;
		this.__proto__.b = val;
	}
}
