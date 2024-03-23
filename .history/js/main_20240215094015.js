$(document).ready(function(){
    $("#nav-toggle").click(function(){
        $("#nav-menu").addClass('show-menu')
    });
    $("#nav-close").click(function(){
        $("#nav-menu").removeClass('show-menu')
    });
    // $('.nav__link').click(function(){
    //     $('#nav-menu').removeClass('show-menu')
    // })

    $(window).scroll(function() {
        $("#header").toggleClass('blur-header', $(this).scrollTop() >= 50);

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
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
    // reset: true, //Animation repeat
})
sr.reveal(`.home__container ,  .pages__angency`)
sr.reveal(`pages__image, .footer__img-2`, {rotate: {z: -15}})
sr.reveal(`.home__bread, .about__bread`, {rotate: {z: 15}})
sr.reveal(`.home__footer, .extensions__img, .extensions__clean, tutorials__card`, {scal: 1, origin: 'botom'})
sr.reveal(`.pages__card `, {scal: 1, origin: 'right'})
sr.reveal(`.pages__card `, {scal: 1, origin: 'right'})
sr.reveal(`.extensions__card `, {scal: 1, origin: 'top'})

// hiêu ưng xoay 30deg
// sr.reveal(`.new__card:nth-child(1) img`, {rotate: {z: -30}, distance: 0})
// sr.reveal(`.new__card:nth-child(2) img`, {rotate: {z: 15}, distance: 0, delay: 600})
// sr.reveal(`.new__card:nth-child(3) img`, {rotate: {z: 30}, distance: 0, delay: 900})
// sr.reveal(`.favorite__card img`, { interval: 100, rotate: {z: -15}, distance: 0})
sr.reveal(`.footer__container`, {scale: 1})