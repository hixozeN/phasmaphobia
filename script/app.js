window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

const campfireMiddle = document.querySelector('.layers__middle-campfire');
const campfireFront = document.querySelector('.layers__front-campfire');

window.addEventListener('scroll', function () {
  if (this.scrollY > window.innerHeight) {
    campfireMiddle.classList.add('layers__middle-campfire_visible');
    campfireFront.classList.add('layers__front-campfire_visibile');
  } else {
    campfireMiddle.classList.remove('layers__middle-campfire_visible');
    campfireFront.classList.remove('layers__front-campfire_visibile');
  }
})