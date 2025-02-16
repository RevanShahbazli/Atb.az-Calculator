const credit = document.querySelector('.credit')
const boxs = document.querySelectorAll('.btn')


    boxs.forEach((item)=>{
    item.addEventListener("click", function(){
        boxs.forEach(item=>{
            item.classList.remove("active")
        })
        this.classList.add("active")
    })
    })
    let il , ay = 0 , faiz = 11;
    
    function show(){
      il = (Math.floor(+muddet.value/12))
      ay = (+muddet.value-(il*12))
      if(il == 0){
        txt1.innerHTML = `${ay} ay`
      }
      if(ay == 0){
        txt1.innerHTML = `${il} il`
      }
      if(il!=0 && ay!=0){
            txt1.innerHTML = `${il} il ${ay} ay ` 
      }
      il==0 ? faiz=11: il==1 ? faiz=14.5 :il==2 ? faiz=15.5 : il==3 || il==4 ? faiz=16.5 : ''
      console.log(faiz);
      percentage.innerHTML = `${faiz} %`

      faizHesabla();
    }
    function meblegGoster(){
      qiymet = (Math.floor(+miqdar.value/100))*100
    money.innerHTML = `${(Math.floor(+miqdar.value/100))*100} AZN`
    faizHesabla();
    }

    function faizHesabla(){
      monthly.innerHTML = (Math.floor((Math.floor(+miqdar.value/100)*100 + (Math.floor(+miqdar.value/100)*100)*(faiz/100))/muddet.value))
    }



    const rangeInput = document.querySelector('input[type="range"]');

function updateRangeBackground() {
  const min = rangeInput.min;
  const max = rangeInput.max;
  const value = rangeInput.value;
  const progress = ((value - min) / (max - min)) * 100;
  
  rangeInput.style.setProperty('--progress', progress + '%');
}

rangeInput.addEventListener('input', updateRangeBackground);
updateRangeBackground();
   


// let flag = true
// function change(flag){

// }