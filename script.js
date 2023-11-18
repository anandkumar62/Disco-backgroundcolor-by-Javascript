const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(i = 0; i < 6; i++){
      color += hex[Math.round(Math.random()*16)];
    }
    return color;
  }
  
  console.log(randomColor());
  
  
  let intervalId;
  
  const startChangingcolor = function (){
    if(!intervalId) {
      intervalId = setInterval(changeColor, 100)
    };
  
    function changeColor(){
      document.body.style.backgroundColor = randomColor();
    }
  }
  
  const stopChangingcolor = function (){
    clearTimeout(intervalId);
    intervalId = null;
  }
  
  document.querySelector('#start').addEventListener('click', startChangingcolor);
  document.querySelector('#stop').addEventListener('click', stopChangingcolor);