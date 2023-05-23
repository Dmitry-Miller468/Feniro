// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
export function menuInit() {
	const iconMenu = document.querySelector('.icon-menu');
	console.log(iconMenu);
	if (iconMenu) {
		const iconBody = document.querySelector('.menu__body');
		console.log(iconBody);
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active');
			iconBody.classList.toggle('_active');
		})
	}
}
//=======================================================================================================================================================================================================================