gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
		q = gsap.utils.selector(document),
		toArray = s => gsap.utils.toArray(s),
		bogRoll = select('#bogRoll'),
		mainSVG = select('#mainSVG'),
		yesText = toArray('#YesText path')
		noText = toArray('#NoText path'),

gsap.set('svg', {
	visibility: 'visible'
})

let tl = gsap.timeline({
	paused: true,
	defaults: {		
		ease: 'sine.inOut'
	}
});
tl.add('yesToNo')
	.to('#yesSheet', {
		y: -244
	}, 'yesToNo')
	.to(yesText, {
		y: -244
	}, 'yesToNo')
	.to(yesText, {
		opacity: 0,
		duration: 0.15,
		stagger: {
			amount: 0.2
		}
	}, 'yesToNo')
	.from('#noSheet', {
		attr:{
			height: 0
		}		
	}, 'yesToNo')
	.from(noText, {
		y: -200
	}, 'yesToNo')
	.from(noText.reverse(), {
		opacity: 0,
		duration: 0.25,
		stagger: {
			amount: 0.2
		},
	ease: 'sine.in'
	}, 'yesToNo').timeScale(1.25).reversed(true)

bogRoll.addEventListener('click', function(e) {
	tl.reversed() ? tl.play() : tl.reverse();
})