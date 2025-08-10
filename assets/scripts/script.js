function showMenu(){
    const element = document.querySelector('.collapse-navbar');
    const isHidden = window.getComputedStyle(element).display === 'none';
    if(isHidden === true){
        element.style.display = 'block'
    }else{
        element.style.display = 'none'
    }
    
}

function biggerText(){
    console.log("BIG")
    document.getElementsByTagName("p").style.fontSize = "x-large";
}