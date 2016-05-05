// add scripts
window.onload = function() {
	var semiHere = false;
	   var valr = setInterval(function(){
	       var currTxt = $('#typed-output').html();
	       if(currTxt){
	      	 semiHere = ~currTxt.indexOf(';');
		       if (semiHere) {
		           if (~currTxt.indexOf('"Software Engineer"<span')) clearInterval(valr);
		           if (!~currTxt.indexOf('span')) {
		               var newHTML = $('#typed-output').html().replace(/;/, '<span id="fuckerSemicolon">;</span>');
		               $('#typed-output').html(newHTML);
		           }
		}
	       }
	}, 20);
};