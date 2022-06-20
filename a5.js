"use strict"

function myNew(constructor, parameters){
	const obj = Object.create(constructor);
	return Function.apply(obj, parameters)();	
}
