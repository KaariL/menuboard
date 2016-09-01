$(document).ready(function(){

   $('article').click(function(){
       $('section', this).toggle('800', 'swing');

   });

});


$(document).ready(function(){

  $(window).scroll(function(){

    console.log('hi')

  });
});
