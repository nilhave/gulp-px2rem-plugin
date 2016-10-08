'use strict';
var through = require('through2');
var uniqueArray = require('./lib/uniqueArray.js');
module.exports = function(opt) {
	var width_design=640,
		valid_num=4,
        pieces=10;
	if (opt) {
		if (opt.width_design) width_design=opt.width_design;
        if (opt.valid_num) valid_num=opt.valid_num;
		if (opt.pieces) pieces=opt.pieces;
	}
    function px2rem(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }
 
        if (file.isStream()) {
            return callback(createError(file, 'Streaming not supported'));
        }

        var s_file=file.contents.toString(),
        	match_px=s_file.match(/:\s*\d+px/g),
        	unique_match_px=uniqueArray(match_px);
        for (var i = 0; i < unique_match_px.length; i++) {
        	var i_array=unique_match_px[i],
        		px_num=parseInt(i_array.replace(':','').replace('px','')),
        		rem_num=px_num/width_design*pieces;
        	s_file=s_file.replace(i_array,':'+ new Number(rem_num).toFixed(valid_num) + 'rem');
        }
        file.contents=new Buffer(s_file);
        this.push(file);
        callback(null, file);
    }
    return through.obj(px2rem);
};