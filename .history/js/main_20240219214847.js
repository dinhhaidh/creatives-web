$(document).ready(function(){
    $("#nav-toggle").click(function(){
        $("#nav-menu").addClass('show-menu')
    });
    $("#nav-close").click(function(){
        $("#nav-menu").removeClass('show-menu')
    });
    $('.nav__link').click(function(){
        $('#nav-menu').removeClass('show-menu')
    })

    $(window).scroll(function() {
        $("#header").toggleClass('blur-header', $(this).scrollTop() >= 50);
        $('#scroll-up').toggleClass('show-scroll', $(this).scrollTop() >= 350);

        $(".active-link").addClass('nav-menu');
    });


const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
  })
sr.reveal(`.home__container ,  .pages__angency, .tutorials__card`)
sr.reveal(`pages__image, .footer__img-2`, {rotate: {z: -15}})
sr.reveal(`.home__bread, .about__bread`, {rotate: {z: 15}})
sr.reveal(`.home__footer, .extensions__img, .extensions__clean, tutorials__card`, {scal: 1, origin: 'botom'})
sr.reveal(`.pages__card `, {scal: 1, origin: 'right'})
sr.reveal(`.extensions__card, .features__list `, {scal: 1, origin: 'top'})
//   sr.reveal(`.pages__card, {interval: 100}) //hiệu ứng trêm xuống lần lần từng giây

// hiêu ưng xoay 30deg
// sr.reveal(`.new__card:nth-child(1) img`, {rotate: {z: -30}, distance: 0})
// sr.reveal(`.new__card:nth-child(2) img`, {rotate: {z: 15}, distance: 0, delay: 600})
// sr.reveal(`.new__card:nth-child(3) img`, {rotate: {z: 30}, distance: 0, delay: 900})
// sr.reveal(`.favorite__card img`, { interval: 100, rotate: {z: -15}, distance: 0})
sr.reveal(`.footer__container`, {scale: 1})



/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     // reset: true
//   })
//   sr.reveal(`.home__data, .join__container, .footer__container`) //hiệu ứng trên xuống
//   sr.reveal(`.home__img`,{origin: 'bottom'})
//   sr.reveal(`.about__data`,{origin: 'right'})
//   sr.reveal(`.about__img`,{origin: 'left'})