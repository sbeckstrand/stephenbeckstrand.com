$('.mainlist ul').hide();



$(document).ready(function () {
  $('.mainlist span').click(function() {
    $('.mainlist ul').hide();
    $(this).next().toggle();
  });
  $('.mainlist span').click(function(){
    let area = $(this).context.innerHTML.replace(/ /g, '').toLowerCase();
    $('.content').empty();
    $('.content').load( 'resources/' + area + '/' + area + '.html' );
  });

});

$(document).ready(function (){
  $('.mainlist li').click(function(){
    let shrine = $(this).context.innerHTML.replace(/ /g, '').replace(/'/g, '').toLowerCase();
    let parentArea = $(this).context.parentNode.previousElementSibling.innerHTML.replace(/ /g, '').toLowerCase();

    shrinePage(shrine, parentArea);
  });
})

function shrinePage(shrine, parentArea) {
  $('.content').empty();

  $('.content').load( 'resources/' + parentArea + '/' + shrine + '/index.html');
}
