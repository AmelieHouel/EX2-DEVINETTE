var validate = document.querySelector('button.validate');
var retry = document.querySelectorAll('button.retry');

var step1 = document.querySelector('section.step');
var step2 = document.querySelector('section.step2');
var step3 = document.querySelector('section.step3');

var win = document.querySelector('section.win');
var lose = document.querySelector('section.lose');


validate.addEventListener('click', function(){
  var data = document.getElementById('msg').value;
  console.log(data);
});


var solution = Math.floor(Math.random() * 10) + 1;

console.log(solution);

retry[0,1].addEventListener('click', function() {
  document.location.reload(true);
  //win.style.display= 'none';
  //step1.style.display= 'flex';


});


