# gulp-px2rem-plugin #

将 px 转化成 rem 的 gulp 插件。

用 rem 来做响应式开发的时候，将 px 转换成 rem 值的时候，是每一个程序员头大的事情。<br />

起初，我使用sublime的cssrem插件，效果挺好，避免了我重复使用小学学习的除法技能。但是，我们能感知的长度大小，还是像素，全部使用 rem 后，一旦设计稿有很多改动，你还知道有哪些 rem 不需要修改吗？<br />

使用该插件后，源文件全部使用 px ，是不是又回到了做 pc 端页面的时代了？

### 使用方法 ###
    var gulp = require('gulp');
    var px2rem = require('gulp-px2rem-plugin');
    
    gulp.task('default', function() {
    	gulp.src('*.css')
			.pipe(px2rem())
		//	.pipe(px2rem({'width_design':750,'valid_num':6,'pieces':10}));
    });

### 参数说明 ###
- width_design：设计稿宽度。默认值640
- valid_num：生成rem后的小数位数。默认值4
- pieces：将整屏切份。默认为10，相当于10rem = width_design(设计稿宽度)

### 附加要求 ###
使用 rem 来布局，需要你使用 js 来动态设置 html 的 font-size 值。根据你的参数 pieces 设置，font-size = device-width / pieces。来就是说，如果手机物理像素为320，那么 font-size:32px。

### 插件效果 ###
![px](http://i.imgur.com/r0OBgmh.png) ![rem](http://i.imgur.com/uaR3WYr.png)

### 安装方法 ###

    npm install gulp-px2rem-plugin --save-dev
    git clone https://github.com/nilhave/gulp-px2rem-plugin.git