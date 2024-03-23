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