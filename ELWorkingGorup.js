/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});
		qlik.theme.apply('Tourism-theme').then(function(result) {

          if(result)

              console.log('theme applied!');

          else

              console.warn('could not apply theme!');

     });

	

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Ent & Leav WG.qvf', config);

	

	//get objects -- inserted here --
	app.getObject('QV-pg3-1','BPcxwQc');
	app.getObject('QV-pg3-51','GNKCRg');
	app.getObject('QV-pg2-f-1-s','TwmJQ');
	app.getObject('QV-pg2-f-4-s','PLKfV');
	app.getObject('QV-pg2-f-3-s','rCRX');
	app.getObject('QV-pg2-f-2-s','HgKuV');
	app.getObject('QV-pg1-f-4-s','PLKfV');
	app.getObject('QV-pg1-f-3-s','rCRX');
	app.getObject('QV-pg1-f-2-s','HgKuV');
	
	app.getObject('QV-pg1-f-1-s','bpqfb');
	app.getObject('QV-pg2-kpi-3','hpGdJ');
	app.getObject('QV-pg2-kpi-7','LqUQPpX');
	app.getObject('QV-pg2-kpi-6','jUfj');
	app.getObject('QV-pg2-kpi-2','hwXvwPs');
	app.getObject('QV-pg2-kpi-5','AgnPzB');
	app.getObject('QV-pg2-f-4','jMXtXV');
	app.getObject('QV-pg2-f-3','YaPwXr');
	app.getObject('QV-pg2-f-2','CWxxax');
	app.getObject('QV-pg2-f-1','WJSFzVF');
	app.getObject('QV-pg2-kpi-1','qbyvJxh');
	app.getObject('QV-pg2-b-2','mpgfe');
	app.getObject('QV-pg2-b-1','PtYkLR');
	app.getObject('QV-pg1-b-1','bjFN');
	app.getObject('QV-pg1-kpi-11','XMBeqr');
	app.getObject('QV-pg1-kpi-8','rNmGAX');
	app.getObject('QV-pg1-kpi-5','JuHDXU');
	app.getObject('QV-pg1-kpi-2','pXHHW');
	app.getObject('QV-pg1-kpi-10','VFszLuj');
	app.getObject('QV-pg1-kpi-7','AyjCRbq');
	app.getObject('QV-pg1-kpi-4','byPYsMT');
	app.getObject('QV-pg1-kpi-1','JUsdEf');
	app.getObject('QV-pg1-f-4','tykPq');
	app.getObject('QV-pg1-f-3','ZMXJqs');
	app.getObject('QV-pg1-f-2','ucaXK');
	app.getObject('QV-pg1-f-1','fEzMwrt');
	
	
	
	
	//create cubes and lists -- inserted here --


	if (app) {
		app.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
		$(".btn-round").click(function() {
			qlik.resize();
		});
		$(".PaperTitleItem").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
