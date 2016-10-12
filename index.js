'use strict';
var through = require('through2');
module.exports = function(opt) {
	var width_design=640,
		valid_num=4,
        pieces=10,
        ignore_px=[];
	if (opt) {
		if (opt.width_design) width_design=opt.width_design;
        if (opt.valid_num) valid_num=opt.valid_num;
		if (opt.pieces) pieces=opt.pieces;
		if (opt.ignore_px) ignore_px=opt.ignore_px;
	}
    function px2rem(file, encoding, callback) {
        if (file.isNull())  return callback(null, file);
        if (file.isStream()) return callback(createError(file, 'Streaming not supported'));
        var s_file=file.contents.toString();
        s_file=s_file.replace(/:\s*\d+px/g,function(word){
        	var px_num=parseInt(word.replace(':','').replace('px',''));
        	if(ignore_px.indexOf(px_num)>-1) return word;
        	var rem_num=px_num/width_design*pieces;
        	return ':'+ new Number(rem_num).toFixed(valid_num) + 'rem';
        });
        file.contents=new Buffer(s_file);
        this.push(file);
        callback(null, file);
    }
    return through.obj(px2rem);
};