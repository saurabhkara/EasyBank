const hambugerBtn=document.querySelector('.hamburger-btn');
const navLInk =document.querySelector('.nav-links');


hambugerBtn.addEventListener('click',()=>{
    console.log('clicked...')
    navLInk.classList.toggle('open');
    isOpen= navLInk.classList.contains('open');
   if(isOpen){
    hambugerBtn.src='./images/icon-close.svg'
   }else{
    hambugerBtn.src="./images/icon-hamburger.svg"
   }
})