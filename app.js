// Variables //

var validate = document.querySelectorAll('button.validate');
var retry = document.querySelectorAll('button.retry');

var step1 = document.querySelector('section.step');
var step2 = document.querySelector('section.step2');
var step3 = document.querySelector('section.step3');

var win = document.querySelector('section.win');
var lose = document.querySelector('section.lose');

var body = document.querySelector('body');

var solution = Math.floor(Math.random() * 10) + 1;
console.log(solution);


// Events // 

validate[0].addEventListener('click', function() {
  stepOne();
});

validate[1].addEventListener('click', function() {
  stepTwo();
});

validate[2].addEventListener('click', function() {
  stepThree();
});


retry[0].addEventListener('click', function() {
  document.location.reload(true);
});

retry[1].addEventListener('click', function() {
  document.location.reload(true);
});



//functions //


function stepOne() {
  var data1 = document.getElementById('number1').value;
  console.log(data1);
  for(var i=0;i<=1;i++) {
    if (data1 == solution) {
      step1.style.display='none';
      win.style.display='flex';
      body.style.backgroundImage = 'url("/assets/images/Background3.jpg")';
  
    } else if((data1 === "")||(data1 === null)) {
      alert("remplir le champ");
      break;
    } else {
      step1.style.display='none';
      step2.style.display='flex';
    } 
  }
};


function stepTwo() {
  var data2 = document.getElementById('number2').value;
  console.log(data2);

  for(var i=0;i<=1;i++) {

    if (data2 == solution) {
      step2.style.display='none';
      win.style.display='flex';
      body.style.backgroundImage = 'url("/assets/images/Background3.jpg")';
  
    } else if((data2 === "")||(data2 === null)) {
      alert("remplir le champ");
      break;
    } else {
      step2.style.display='none';
      step3.style.display='flex';
    } 

  }
};


function stepThree() {
  var data3 = document.getElementById('number3').value;
  console.log(data3);

  for(var i=0;i<=1;i++) {
    if (data3 == solution) {
      step3.style.display='none';
      win.style.display='flex';
      body.style.backgroundImage ='url("/assets/images/Background3.jpg")';
  
    } else if((data3 === "")||(data3 === null)) {
      alert("remplir le champ");
      break;
    } else {
      step3.style.display='none';
      lose.style.display='flex';
      body.style.backgroundImage ='url("/assets/images/Background2.jpg")';
    } 

  }
};
