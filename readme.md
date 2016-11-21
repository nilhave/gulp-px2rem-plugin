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
		//	.pipe(px2rem({'width_design':750,'valid_num':6,'pieces':10,'ignore_px':[1,2],'ignore_selector':['.class1']}));
    });

### 参数说明 ###
- width_design：设计稿宽度。默认值640
- valid_num：生成rem后的小数位数。默认值4
- pieces：将整屏切份。默认为10，相当于10rem = width_design(设计稿宽度)
- ignore_px：让部分px不在转换成rem。默认为空数组
- ignore_selector：让部分选择器不在转换为rem。默认为空数组

### 附加要求 ###
使用 rem 来布局，需要你使用 js 来动态设置 html 的 font-size 值。根据你的参数 pieces 设置，font-size = device-width / pieces。来就是说，如果手机物理像素为320，那么 font-size:32px。

### 插件效果 ###
![](http://i.imgur.com/t132tBL.png) ![](http://i.imgur.com/B4vVkWi.png)

### 安装方法 ###

    npm install gulp-px2rem-plugin --save-dev
### 版本更新 ###
#### 0.3.X ####
增加功能。添加ignore_selector参数
#### 0.2.X ####
增加功能。添加ignore_px参数
#### 0.1.X ####
修改了0.0.x版本的bug，由于replace后的正则写的有误，无法全局替换。

由于水平的原因，这个插件还存在一些问题，如果您发现了bug，可以联系我(nilhave@126.com)，我会尽快修改。