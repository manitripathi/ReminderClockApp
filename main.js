const hourTime = document.querySelector('#thours');
const minTime = document.querySelector('#tminutes');
const secTime = document.querySelector('#tseconds');
const aMpM = document.querySelector('#am-pm');

function concatZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();   
     hourTime.innerHTML = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
     minTime.innerHTML  = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
     secTime.innerHTML  = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
     aMpM.innerHTML     = d.getHours() >= 12 ? "PM" : "AM"; 
}
setInterval(time, 1000);

//Party img change
const partyImg=document.querySelector('#party');
partyImg.addEventListener('click',function(){
  boxImg.style.backgroundImage="url(./party2.svg)"; 
  changeText.innerText="LET'S PARTY !!";
  textReplace.innerText=" ";
  
});
partyImg.addEventListener('dblclick',function(){
  party.innerText="Party Over";
  boxImg.style.backgroundImage="url(./aa.webp)";
  changeText.innerText="OVER !!";
  const partyImg=document.querySelector('#party');
/* partyImg.addEventListener('dblclick',function(){
  boxImg.style.backgroundImage="url(./party2.svg)"; 
  party.innerText="Party Time!";
  changeText.innerText="LET'S PARTY !!"; */
/* }) */
});


//Change image with by clicking on options
const changeImg1=document.querySelector('#morningImg');
var d = new Date();
var h = d.getHours();
changeImg1.addEventListener('change',function(){
  if(changeImg1){
  boxImg.style.backgroundImage="url(./3.png)";
  changeText.innerText="WAKE UP, EAT BREAKFAST !!";
  textReplace.innerText="GOOD MORNING !!";}
  else{
    boxImg.style.backgroundImage="url(./aa.webp)"; 
  changeText.innerText="#DAILY_SCHEDULE";
  textReplace.innerText="DO WORK";
  }
});

const changeImg2=document.querySelector('#afternoonImg');
changeImg2.addEventListener('change',function(){
  if(changeImg2){
  boxImg.style.backgroundImage="url(./home.png)";
  changeText.innerText="LET'S HAVE SOME LUNCH !!";
  textReplace.innerText="GOOD AFTERNOON !!";}
  else{
    boxImg.style.backgroundImage="url(./aa.webp)"; 
    changeText.innerText="#DAILY_SCHEDULE";
    textReplace.innerText="DO WORK";
  }
});

const changeImg3=document.querySelector('#nightImg');
changeImg3.addEventListener('change',function(){
  if(changeImg3){
  boxImg.style.backgroundImage="url(./2.png)";
  changeText.innerText="LET'S SLEEP !!";
  textReplace.innerText="GOOD NIGHT !!";}
  else{
    boxImg.style.backgroundImage="url(./aa.webp)"; 
    changeText.innerText="#DAILY_SCHEDULE";
    textReplace.innerText="DO WORK";
  }
});

//Images changes with Time
/* var d = new Date();
var h = d.getHours(); 
if(h>=5 && h<12){
  boxImg.style.backgroundImage="url(./3.png)";
  changeText.innerText="WAKE UP, EAT BREAKFAST !!";
  textReplace.innerText="GOOD MORNING !!";
}
else if(h>=12 && h<18){
  boxImg.style.backgroundImage="url(./home.png)";
  changeText.innerText="LET'S HAVE SOME LUNCH !!";
  textReplace.innerText="GOOD AFTERNOON !!";
}
else if(h>=18 && h<23){
  boxImg.style.backgroundImage="url(./2.png)";
  changeText.innerText="LET'S SLEEP !!";
  textReplace.innerText="GOOD NIGHT !!";
}
else{
  boxImg.style.backgroundImage="url(./party2.svg)"; 
  changeText.innerText="LET'S PARTY !!";
  document.getElementById("textReplace").style.display="none";
} */

