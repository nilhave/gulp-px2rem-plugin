'use strict';
var through = require('through2');
module.exports = function(opt) {
  var width_design=640,
      valid_num=4,
      pieces=10,
      ignore_px=[],
      ignore_selector=[];
	if (opt) {
    width_design=opt.width_design||width_design,
    valid_num=opt.valid_num||valid_num,
    pieces=opt.pieces||pieces,
    ignore_px=opt.ignore_px||ignore_px,
    ignore_selector=opt.ignore_selector||ignore_selector;
	}
  function px2rem(file, encoding, callback) {
    if (file.isNull())  return callback(null, file);
    if (file.isStream()) return callback(createError(file, 'Streaming not supported'));

    var s_file=file.contents.toString();
    //匹配样式，名称+属性为一项
    var reg=/([^\{]*)\{([^\}]*)\}/g;
    var array_style=s_file.match(reg);
    var new_array=[];
// 源css文件内容为空时，直接返回
    if(!array_style) return callback(null,file);
    array_style.forEach(function(value){
      if(ignore_selector.indexOf(value.split('{')[0].replace(/(^\s*)|(\s*$)/g,'')) > -1) {
      }
      else{
        value=value.replace(/\s+[0]\s+|((\s*)(-?)(\d+)(px+))/g,function(word){

          var px_num = parseFloat(word);
          ignore_px.push(0);
          if(ignore_px.indexOf(px_num)>-1) return word;

          var rem_num=px_num/width_design*pieces;

          return ' ' + new Number(rem_num).toFixed(valid_num) + 'rem';
        });
      }
      

      new_array.push(value);
    });

    file.contents=new Buffer(new_array.join(''));
    this.push(file);
    callback(null, file);
  }
    return through.obj(px2rem);
};
