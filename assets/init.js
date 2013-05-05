/* Normalized hide address bar for iOS & Android (c) Scott Jehl, scottjehl.com MIT License */
(function(a){var b=a.document;if(!location.hash&&a.addEventListener){window.scrollTo(0,1);var c=1,d=function(){return a.pageYOffset||b.compatMode==="CSS1Compat"&&b.documentElement.scrollTop||b.body.scrollTop||0},e=setInterval(function(){if(b.body){clearInterval(e);c=d();a.scrollTo(0,c===1?0:1)}},15);a.addEventListener("load",function(){setTimeout(function(){if(d()<20){a.scrollTo(0,c===1?0:1)}},0)}, false)}})(this);

// Makes current links "active"
jQuery(document).ready(function($){
	// get & parse the current url
	// match the href & apply a class of 'active'
	var url = document.URL;
	url = url.substring(url.lastIndexOf('/') + 1);
	//alert(url);
	$('nav a[href="'+url+'"]').addClass('active');
});

