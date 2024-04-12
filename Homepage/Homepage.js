timing();
document.querySelector('.fa-plus').href=window.location.href;
setInterval(timing,1000);
function timing(){
  let d=new Date();
  let hour=d.getHours();
  let AM=(hour<12)?'AM':'PM';
  hour=(hour>12)?hour%12:hour;
  hour=(hour>9)?hour:'0'+hour;
  let min=d.getMinutes();
  min=(min>9)?min:'0'+min;
  document.querySelector('#time').innerHTML=hour+':'+min;
  document.querySelector('#am').innerHTML=AM;
  let day=d.getDay();
  switch (day){
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  document.querySelector('#day').innerHTML=day;
  let angle=6*d.getSeconds();
  document.querySelector('#sec div').style.setProperty('--angle',(angle>180)?'180deg':angle+'deg');
  let div=document.querySelector('#secT div');
  div.style.setProperty('--angle',180-(180-angle)+'deg');
  if(angle<180){
    div.style.opacity="0";
    div.style.setProperty('--angle',0+'deg');
    div.style.transition="0.5s";
  }
  else{
    div.style.opacity="1";
    div.style.transition="1s";
  }
}