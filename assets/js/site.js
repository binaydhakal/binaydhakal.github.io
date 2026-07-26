// dhakalbinaya.com.np — reveal-on-scroll + mobile nav

(function () {
	'use strict';

	// Reveal on scroll
	var revealed = document.querySelectorAll('[data-reveal]');
	if ('IntersectionObserver' in window) {
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
		revealed.forEach(function (el) { io.observe(el); });
	} else {
		revealed.forEach(function (el) { el.classList.add('is-visible'); });
	}

	// Mobile nav toggle
	var nav = document.querySelector('.nav');
	var toggle = document.querySelector('.nav-toggle');
	if (nav && toggle) {
		toggle.addEventListener('click', function () {
			var open = nav.classList.toggle('open');
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		});
		nav.querySelectorAll('.nav-links a').forEach(function (link) {
			link.addEventListener('click', function () {
				nav.classList.remove('open');
				toggle.setAttribute('aria-expanded', 'false');
			});
		});
	}
})();
