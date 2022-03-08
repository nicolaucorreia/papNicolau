//script contactos

function enviarContactos(){
    const pn = document.getElementById('contact-PrimNome').value
    const email = document.getElementById('contact-email').value
    const telem= document.getElementById('contact-telem').value
    const msg = document.getElementById('contact-mensagem').value
  
          if(telem.length >=10 && telem.lenght <9 ){
            alert('insira um número válido')
          }
          else {
            let i = 0
            for(i; i<telem.length; i++){
                let c = telem.charAt(i)
                console.log(c)
                if(isNaN(c)){
                    alert('número inválido')
                    break
                }       
            }
            console.log(i)
            if(i == telem.length){
                const telemInt = parseInt(telem)
                console.log(telemInt)
            }
            
          }
  
  
          if(pn == ''||email==''|| msg=='' || telem==''){
                alert('Preencha todos os Campos!')
          }else{
    
                  const data = {
                    PrimNome: pn,
                    Email: email,
                    Telem: telem,
                    Mensagem: msg
                  }
                  var d = JSON.stringify(data)
                  console.log(d)
                  var options = {
                    method:'POST',
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    body: d
                  }
                  fetch('http://localhost:3002/contactos',options)
                  .then(res => res.json())
                  .then(data => alert(data.text))
                  .catch((err) => {
                    console.log('Pedido falhado', err.Mensagem)
                  });
  
            }  
    
  }
  
    



let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});