// JavaScript Document

//this is how you typically setup your javascript files

//self exectuing anonymous function - use this. prevents global variables.. use paranthesis () for anonymous below

(function() {
	"use strict";
	console.log("Yep the SEAF Fired");
	
	
	//Variables
	//video variables
	var vidCon = document.querySelector("#video");
	var appCon = document.querySelector("#info");
	var video = document.querySelector("#vid");
	var vidPlay = 0;
	var screenPOS;
	var vid;
	
	//info variables
	var photos = ["image_04", "image_05", "image_06"];
	var el = document.querySelector("#galleryList");
	var anchors = el.querySelectorAll("a")
	
	var image = document.querySelector("#watch");//selects the img element with the same id
	
	//Greensock
	//visibility set to 0
	//TweenMax.set("#character", {autoAlpha:0});	
	//fade back in with visibility:visible
	//TweenMax.to("#character", 2, {autoAlpha:1});
	
	//functions
	function runVideo(){
		if(vidPlay == 0){
			//run video when it comes on to the screen
			screenPOS = window.scrollY;
			vid = video.offsetTop;//video is at 908
			
			if(screenPOS+300 > vid){
				video.play();
			}
			
			//if(screenPOS>vid+200){
//				video.pause();
//				console.log(vid);
//			}
			
			//console.log("Video Pos: " + vid);
			//console.log("Screen Pos: " + screenPOS);
		}
	}
	
	function vidFinished(){
		TweenMax.set("#video", {autoAlpha:1});
		vidCon.classList.remove("show");
		TweenMax.to("#video", 2, {autoAlpha:0});
		vidCon.classList.add("hide");
		
		TweenMax.set("#info", {autoAlpha:0});
		appCon.classList.remove("hide");
		TweenMax.to("#info", 2, {autoAlpha:1});
		vidPlay = 1;
	}
	
	function swapImage(e){//e selects the event that just triggered
		e.preventDefault();
		var thisImg = "img/"+ photos[e.target.id] +".png";//changes the source img
		console.log(photos[e.target.id]);
		console.log(thisImg);
		image.src = thisImg;
		console.log(image.src);
		
		//visibility set to 0
		TweenMax.set("#watch", {autoAlpha:0});
		//fade back in with visibility:visible
		TweenMax.to("#watch", 2, {autoAlpha:1});
		
	}
		//function hide(){
//		appCon.classList.remove("show");
//		console.log(appCon);
//		appCon.classList.add("hide");
//		console.log(appCon);	
//	}
	
	//Listeners
	//hides the info box on load
	//window.addEventListener("onload", hide, false);
	
	window.addEventListener("scroll", runVideo, false);
	video.addEventListener("ended",vidFinished, false);
	
	for(var i = 0; i<anchors.length; i++){
		anchors[i].addEventListener("click", swapImage, false);//event listener loop for anchor tags in galleryList
	}
	
})();