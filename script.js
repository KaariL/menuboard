$(document).ready(function(){

   $('article').click(function(){
       $('section', this).toggle('800', 'swing');

   });

   $('article').click(function(){
       $('.title', this).css({
         'transform' : 'rotateY(90deg)'
       });

   });

});
