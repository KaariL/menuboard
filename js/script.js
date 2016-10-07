






$(document).ready(function(){

  var titleHeight = $(".menu-title").height();

  $(".preview").css({height: titleHeight});
  $("h3").css({height: titleHeight});

   $('article').click(function(){
       $('section', this).toggle('800', 'swing');

   });

   $('article').click(function(){
       $('.title', this).css({
         'transform' : 'rotateY(90deg)'
       });

   });


});
// $(document).ready(function(){

// var titleHeight = $(".menu-title").height();
//  $(".preview").css({"height" titleHeight});


//});
//var Height = document.getElementByClassName('menu-title').style.height;

//document.getElementByClassName('preview').style.height = Height + 'px';
