(function() {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__nav-menu');
	const menuCloseItem = document.querySelector('.header__nav-menu-close');
	const body = document.querySelector('body');
	burgerItem.addEventListener('click', function() {
		menu.classList.add('header__nav-menu_active');
		body.classList.add('lock');
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__nav-menu_active');
		body.classList.remove('lock')
	})
}());