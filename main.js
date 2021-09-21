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
