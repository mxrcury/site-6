$('.slides').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed:800,
    prevArrow:'.prev_arrow',
    nextArrow:'.next_arrow'
  });



//   (function(){
//       const header = document.querySelector('.header');

//       window.onscroll = () =>{
//           if(window.pageYOffset > 60){
//               header.classList.add('header_active')
//           }else{
//               header.classList.remove('header_active')
//           }
//       }

//   }());

(function(){
    const headerNav = document.querySelector('.header_nav');
    const burgerItem = document.querySelector('.header_burger');
    const closeItem = document.querySelector('.header_close');

    burgerItem.addEventListener('click', () =>{
        headerNav.classList.add('header_nav_active');
    });

    closeItem.addEventListener('click', () =>{
        headerNav.classList.remove('header_nav_active');
    })

}());