/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, EffectFade } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.gallery__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.gallery__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,  // отключить чтобы высота слайда былы одинаковая
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true, // повторение слайдов по кругу
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			//effect: 'fade', // плавное перетекание слайда
			// autoplay: {
			// 	delay: 1000,
			// 	disableOnInteraction: false,
			// },


			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.control-gallery__arrow_prev',
				nextEl: '.control-gallery__arrow_next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					// slidesPerView: 1,
					// spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					autoHeight: false,
					// slidesPerView: 2,
					// spaceBetween: 20,
				},
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},

			// События
			on: {
				lazyImageReady: function lazyImageReady() {
					ibg();
				}
			}
			// And if we need scrollbar
			//scrollbar: {
			//	el: '.swiper-scrollbar',
			//},
		});
	}
	if (document.querySelector('.slider-lots__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-lots__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 0,
			//autoHeight: true,  // отключить чтобы высота слайда былы одинаковая
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true, // повторение слайдов по кругу
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.control-slider-lots__arrow_prev',
				nextEl: '.control-slider-lots__arrow_next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					// spaceBetween: 0,
					//autoHeight: true,
				},
				550: {
					slidesPerView: 2,
					// spaceBetween: 0,
					//autoHeight: true,
				},
				768: {
					// autoHeight: false,
					slidesPerView: 3,
					//spaceBetween: 20,
				},
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},

			// События
			on: {
				lazyImageReady: function lazyImageReady() {
					ibg();
				}
			}
			// And if we need scrollbar
			//scrollbar: {
			//	el: '.swiper-scrollbar',
			//},
		});
	}
	if (document.querySelector('.slider-quotes__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-quotes__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			// Эффекты
			modules: [Navigation, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,  // отключить чтобы высота слайда былы одинаковая
			speed: 1200,
			// effect: "cards",
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true, // повторение слайдов по кругу
			//preloadImages: false,
			//lazy: true,

			// Эффекты
			effect: 'fade', // плавное перетекание (проявление слайда) слайда
			// autoplay: {
			// 	delay: 1000,
			// 	disableOnInteraction: false,
			// },


			// Пагинация
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				nextEl: '.control-slider-quotes__circle',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					// slidesPerView: 1,
					// spaceBetween: 0,
					autoHeight: true,
				},
				570: {
					autoHeight: false,
					// slidesPerView: 2,
					// spaceBetween: 20,
				},
			// 992: {
			// 	slidesPerView: 3,
			// 	spaceBetween: 20,
			// },
			// 1268: {
			// 	slidesPerView: 4,
			// 	spaceBetween: 30,
			// },
			},

			// События
			on: {
				lazyImageReady: function lazyImageReady() {
					ibg();
				}
			}
			// And if we need scrollbar
			//scrollbar: {
			//	el: '.swiper-scrollbar',
			//},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});