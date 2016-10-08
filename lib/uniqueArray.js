'use strict';
module.exports = uniqueArray;
function uniqueArray(o_array){
	o_array=o_array||[];
	var n_array=[],
    	o={};
    for (var i = 0; i < o_array.length; i++) {
    	var i_o_array=o_array[i];
    	if (!o[i_o_array]) {
    		n_array.push(i_o_array)
    	}
    	else{
    		o[i_o_array]=1;
    	}
    }
    return n_array;
}