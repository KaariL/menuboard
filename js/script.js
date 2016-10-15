






$(function(){
 "use strict";

  var titleHeight = $(".menu-title").height();

  $(".preview").css({height: titleHeight});
  $("h3").css({height: titleHeight});
  $(".print-preview").css({height: titleHeight});



   $('article').click(function(){
      $('section', this).toggle('800', 'swing');
      $('.preview', this).toggleClass('col-md-6 col-md-offset-6 preview-top');
      $('.print-preview', this).toggle();





   });


});
// $(document).ready(function(){

// var titleHeight = $(".menu-title").height();
//  $(".preview").css({"height" titleHeight});


//});
//var Height = document.getElementByClassName('menu-title').style.height;

//document.getElementByClassName('preview').style.height = Height + 'px';
