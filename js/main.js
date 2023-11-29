//변수설정
const section = document.querySelector('section');
const txt = document.querySelector('.txt');
const innerText = document.querySelector('.innerText');

window.addEventListener('scroll', () => {
	let scroll = window.scrollY || window.pageYOffset;

	section.style.clipPath = `circle(${scroll}px at center center)`;
	txt.style.left = 100 - scroll / 5 + '%';
	innerText.style.left = 100 - scroll / 5 + '%';
});
