$(document).ready(function(){
	var left_off_canvas_menu = $('.off-canvas-list');

	left_off_canvas_menu.append('<a href="myself.html" class="button tiny expand login">个人信息</a>');
	left_off_canvas_menu.append('<a href="#" data-reveal-id="login-in" class="button tiny expand login">登陆</a>');
	left_off_canvas_menu.append('<a href="#" data-reveal-id="login-up" class="button tiny expand login">注册</a>');
	left_off_canvas_menu.append('<a href="#" data-reveal-id="login-out" class="button tiny expand login">注销</a>');

	left_off_canvas_menu.append('<li><label>网站推荐</label></li>');
	left_off_canvas_menu.append('<li><a href="index.html">前端大杂烩</a></li>');
	left_off_canvas_menu.append('<li><a href="work.html">招聘网</a></li>');
	left_off_canvas_menu.append('<li><label>jquery插件</label></li>');
	left_off_canvas_menu.append('<li><a href="jquery-plugin1.html">导航类</a></li>');
	left_off_canvas_menu.append('<li><a href="jquery-plugin2.html">轮播类</a></li>');
	left_off_canvas_menu.append('<li><a href="jquery-plugin3.html">单页全屏类</a></li>');

	left_off_canvas_menu.append('<li><label>个人网页</label></li>');
	left_off_canvas_menu.append('<li><a href="resume.html">个人简历</a></li>');
});