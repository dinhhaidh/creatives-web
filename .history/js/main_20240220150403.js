$(document).ready(function(){
    $("#nav-toggle").click(function(){
        $("#nav-menu").addClass('show-menu')
    });
    $("#nav-close").click(function(){
        $("#nav-menu").removeClass('show-menu')
    });
    $('.nav__link').click(function(){
        $('#nav-menu').removeClass('show-menu')
    });

    $(window).scroll(function() {
        $("#header").toggleClass('blur-header', $(this).scrollTop() >= 50);
        $('#scroll-up').toggleClass('show-scroll', $(this).scrollTop() >= 350);

        // $(".active-link").addClass('nav-menu');
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
sr.reveal(`.home__footer, .extensions__img, .extensions__clean, tutorials__card`, {scale: 1, origin: 'botom'})
// sr.reveal(`.pages__card `, {scale: 1, origin: 'right'})
sr.reveal(`.pages__card, .extensions__card ` , {interval: 100})
sr.reveal(`.extensions__card, .features__list `, {scale: 1, origin: 'top'})
sr.reveal(`.footer__container`, {scale: 1})
