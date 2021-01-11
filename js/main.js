$(function(){
    'use strict';

    //loading
	$("i.fas.fa-bars").click(function(){
		$('.header').toggleClass("hidden");
		$('.content').toggleClass("hidden");
		$('#sidebar-wrapper').toggleClass("active");
		
	  });

});