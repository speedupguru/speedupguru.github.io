var _a = 'gt';
var _b = 'gtc';
var _c = 'LA';
var _d = '3@';

window.addEventListener("load", function(event) {

	if(!engine.license)
	{
		return false;
	}

	if(window.location.host + _a + _b + _c + _d != atob(engine.license)) 
	{
		return false;
	}
	
	console.log('loaded');

	if(engine.mode == 'mobile')
	{
		setTimeout(function(){
			engine.scripts();
		}, engine.mobile['scripts']);

		setTimeout(function(){
			engine.other();
		}, engine.mobile['other']);
	}
	else
	{
		setTimeout(function(){
			engine.scripts();
		}, engine.desktop['scripts']);

		setTimeout(function(){
			engine.other();
		}, engine.desktop['other']);
	}
})