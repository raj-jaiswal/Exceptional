clicked=(elm)=>{
  elm.classList.toggle('active');
};
shift=(index)=>{
  let element=document.querySelector('.menuPanel .bar');
  if (index==1){
    element.style.transform='translateX(-120%)';
    return;
  }
  if (index==2){
    element.style.transform='translateX(5%)';
    return;
  }
  if (index==3){
    element.style.transform='translateX(125%)';
    return;
  }
};
changeValue=(slider)=>{
  let percentage=Math.floor(slider.value);
  document.querySelector('.Slider-large div .Slider-text').textContent=percentage+'%';
};

let count=45;
let circumference=2*55*Math.PI;
proceed();
setInterval(proceed,1000)
function proceed(){
  count+=1;
  if(count>100){
    count-=100;
  }
  document.querySelector('.progress-circle div').innerHTML=count+'%';
  document.querySelector('.progress-circle svg circle').style.strokeDashoffset=circumference - count / 100 * circumference;
};