const burger = document.querySelector('.burger');
const body = document.body;
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu__close');

burger.addEventListener('click', () => {
	body.classList.add('disable-scroll');
	overlay.classList.add('active');
	mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
	body.classList.remove('disable-scroll');
	overlay.classList.remove('active');
	mobileMenu.classList.remove('active');
});

overlay.addEventListener('click', () => {
	body.classList.remove('disable-scroll');
	overlay.classList.remove('active');
	mobileMenu.classList.remove('active');
});

const element = document.getElementById('form-menu-phone');
const element2 = document.getElementById('form-menu-phone-2');
const element3 = document.getElementById('form-menu-phone-3');
const maskOptions = {
	mask: '+7(000)000-00-00',
	lazy: true,
};

const mask = new IMask(element, maskOptions);
const mask2 = new IMask(element2, maskOptions);
const mask3 = new IMask(element3, maskOptions);

const SDailyRation = new Swiper('.daily-ration__slider', {
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween: 20,

	breakpoints: {
		575: {
			slidesPerView: 'auto',
			spaceBetween: 12,
		},
	},

	pagination: {
		el: '.daily-ration__slider-controls .swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.daily-ration__slider-controls .swiper-button-next',
		prevEl: '.daily-ration__slider-controls .swiper-button-prev',
	},
});

const SWork = new Swiper('.work__slider', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 0,
		stretch: 130,
		depth: 600,
		modifier: 1,
		slideShadows: false,
	},

	breakpoints: {
		575: {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 0,
				stretch: 300,
				depth: 1400,
				modifier: 1,
				slideShadows: false,
			},
		},
		992: {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 0,
				stretch: 200,
				depth: 1400,
				modifier: 1,
				slideShadows: false,
			},
		},
	},

	pagination: {
		el: '.work__slider-controls .swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.work__slider-controls .swiper-button-next',
		prevEl: '.work__slider-controls .swiper-button-prev',
	},
});

new TransferElements({
	sourceElement: document.querySelector('.work__slider-wrapper'),
	breakpoints: {
		992: {
			targetElement: document.querySelector('.work__mob-slider-wrapper'),
		},
	},
});

new TransferElements({
	sourceElement: document.querySelector('.footer__phone-link'),
	breakpoints: {
		992: {
			targetElement: document.querySelector('.footer__mail-wrapper'),
		},
	},
});

const ourMealsNavs = document.querySelectorAll('.meals-gallery__btn');
const ourMealsTabs = document.querySelectorAll('.meals-gallery__tab');

ourMealsNavs?.forEach(btn => {
	btn.addEventListener('click', () => {
		ourMealsNavs.forEach(btn => btn.classList.remove('active'));
		btn.classList.add('active');

		ourMealsTabs.forEach(tab => {
			tab.classList.remove('active');

			if (btn.dataset.id === tab.dataset.id) {
				tab.classList.add('active');
			}
		});
	});
});

ourMealsTabs?.forEach((tab, index) => {
	const slider = tab.querySelector('.swiper');
	new Swiper(slider, {
		slidesPerView: 1,

		breakpoints: {
			376: {
				slidesPerView: 'auto',
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
