function showMenu(){
    const element = document.querySelector('.collapse-navbar');
    const isHidden = window.getComputedStyle(element).display === 'none';
    if(isHidden === true){
        element.style.display = 'block'
    }else{
        element.style.display = 'none'
    }
    
}