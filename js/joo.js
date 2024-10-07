/// <reference types="../@types/jquery" />


$('.Joo').on('click',function () {
  let nameHref = $(this).attr('href')

  let section = $(nameHref).offset().top
  $('html,body').animate({scrollTop: section},1000)
  

})




$('#open').on('click',function () {
    let left = $('#bigSidebar').offset().left   
  let width =   $('#sidebar').width()
  if (left==0) {
  $('#bigSidebar').animate({left : -width},1000)
  }else{
  $('#bigSidebar').animate({left : '0px'},1000)
  }
})




$('#close').on('click',function () {
  let width =   $('#sidebar').width()
  $('#bigSidebar').animate({left : -width},1000)
  console.log('done');
})





$('.slider h3').on('click',function(){
  console.log('done')
  $(this).next().slideToggle(500)
  $('.toggle-text').not($(this).next()).slideUp(500)
})




let time = setInterval(() => {
  let dateNow = new Date().getTime()
  let event = new Date("2025-03-07 16:00:00").getTime()
  let distance = event - dateNow
let days = Math.floor(distance  / (1000*60*60*24))
let hours = Math.floor((distance %  (1000*60*60*24)/(1000*60*60)))
let minutes = Math.floor((distance %  (1000*60*60)/(1000*60)))
let seconds = Math.floor((distance %  (1000*60)/1000))
displayCounter(days,hours,minutes,seconds)
}, 1000);



function displayCounter(days,hours,minutes,seconds) {   
let box = `

 <div class="col-md-3">
                <div class="hit my-1 mx-1 border border-white">
                    <h2>-${days} D</h2>
                </div>
            </div>
            <div class="col-md-3">
                <div class="hit my-1 mx-1 border border-white">
                    <h2>${hours} h</h2>
                </div>
            </div>
            <div class="col-md-3">
                <div class="hit my-1 mx-1 border border-white">
                    <h2>${minutes} m</h2>
                </div>
            </div>
            <div class="col-md-3">
                <div class="hit my-1 mx-1 border border-white">
                    <h2>${seconds} s</h2>
                </div>
            </div>


`

document.getElementById('counter').innerHTML = box
}

$('textarea').on('keyup',(e) => {

let myLength = $(e.target).val().length
$('#length').text(100-myLength <=0 ? "your available character finished":100-myLength )
})