function handleRotation() {
    var deg;
    var medidorLine = document.querySelector('.mainmediador__line');
    var medidorDeg = document.querySelector('.mainmediador__deg');
    
    function handleRotate(){
        deg = Math.floor(Math.random() * (360));
    
        medidorLine.style.transform ='rotate('+deg+'deg)'; 
        medidorDeg.textContent = deg;   
    }
    
    setInterval(handleRotate,2000);
    

    }
    
    window.addEventListener('load', handleRotation);