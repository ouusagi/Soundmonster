const swiper = new Swiper('.swiper', {
	spaceBetween: 10, // 슬라이드 사이 간격
	pagination: {
	  el: '.swiper-pagination',
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	autoplay: {
	  delay: 2000, // 3초마다 자동 전환
	  disableOnInteraction: false, // 사용자가 건드려도 자동 계속됨
	},
	loop: true // 마지막 슬라이드 넘어가면 처음으로 자연스럽게
  });


