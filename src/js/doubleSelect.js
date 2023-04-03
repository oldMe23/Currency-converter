import { currency } from './index.js';

export function doubleSelect(selectArray, containerClass) {
	// Достаем селекты
	let select_1 = selectArray[0];
	let select_2 = selectArray[1];

	// Контейнер и менятель
	let selectsContainer = document.querySelector(`.${containerClass}`);
	let changeElem = document.createElement('div');
	changeElem.className = 'select-change';
	changeElem.innerHTML = `<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	width="20px"
	height="20px"
	viewBox="-1 0 20 20"
	version="1.1"fill="#434343"
>
	<title>arrow_up [#344]</title>
	<desc>Created with Sketch.</desc>
	<defs></defs>
	<g id="Page-1" stroke="none" stroke-width="1" fill="#434343">
		<g id="Dribbble-Light-Preview" transform="translate(-381.000000, -6639.000000)" fill="#434343">
			<g id="icons" transform="translate(56.000000, 160.000000)">
				<path
					d="M341.323018,6493.8481 L339.848007,6495.26007 C339.528788,6495.56207 339.019439,6495.33607 339.019439,6494.89708 L339.019439,6480.00036 C339.019439,6479.44837 338.555121,6479.00038 338.002743,6479.00038 L338.010748,6479.00038 C337.45837,6479.00038 337.018068,6479.44837 337.018068,6480.00036 L337.018068,6494.88208 C337.018068,6495.32307 336.471694,6495.54807 336.154476,6495.24207 L334.691474,6493.8381 C334.293201,6493.45811 333.655764,6493.47511 333.279506,6493.8781 L333.274503,6493.8801 C332.902248,6494.27809 332.921261,6494.90308 333.317532,6495.27707 L336.657821,6498.45401 C337.431351,6499.185 338.642181,6499.181 339.412709,6498.44701 L342.692956,6495.29807 C343.085225,6494.92408 343.104238,6494.30509 342.734985,6493.9081 L342.724978,6493.8981 C342.351723,6493.49611 341.723292,6493.47411 341.323018,6493.8481 M325.275022,6484.10229 L325.265015,6484.09229 C324.895762,6483.69529 324.914775,6483.0763 325.307044,6482.70231 L328.587291,6479.55337 C329.357819,6478.81839 330.568649,6478.81539 331.34318,6479.54537 L334.683468,6482.72331 C335.07974,6483.0973 335.099754,6483.72129 334.727498,6484.11928 L334.724496,6484.12228 C334.348239,6484.52528 333.714805,6484.54228 333.316532,6484.16128 L331.862535,6482.75831 C331.544317,6482.45232 331.013954,6482.67731 331.013954,6483.1183 L331.013954,6498.00002 C331.013954,6498.55201 330.566647,6499 330.013268,6499 C329.46089,6499 329.012583,6498.55201 329.012583,6498.00002 L329.012583,6483.1033 C329.012583,6482.66431 328.487223,6482.43832 328.168004,6482.74031 L326.676982,6484.15228 C326.276708,6484.52628 325.648277,6484.50428 325.275022,6484.10229"
					id="arrow_up-[#344]"
				></path>
			</g>
		</g>
	</g>
</svg>`;

	// Добавляем в контейнер select-ы и менятель
	selectsContainer.append(select_1.selectElem);
	selectsContainer.append(changeElem);
	selectsContainer.append(select_2.selectElem);

	// Событие менятеля
	changeElem.addEventListener('click', changeSelect);

	let textContent_1 = select_1.selectFieldText.innerHTML;
	let textContent_2 = select_2.selectFieldText.innerHTML;
	let selected_1 = select_1.selected;
	let selected_2 = select_2.selected;
	function changeSelect() {
		textContent_1 = select_1.selectFieldText.innerHTML;
		textContent_2 = select_2.selectFieldText.innerHTML;
		selected_1 = select_1.selected;
		selected_2 = select_2.selected;
		if (select_1.selected && select_2.selected) {
			select_1.changeSelected(selected_2, textContent_2);
			select_2.changeSelected(selected_1, textContent_1);
		}
		currency.getInfo();
	}

	// Если option одинаковые
	selectsContainer.querySelectorAll('.select__option').forEach(option => {
		option.addEventListener('click', e => {
			if (select_1.selected === select_2.selected) {
				select_1.changeSelected(selected_2, textContent_2);
				select_2.changeSelected(selected_1, textContent_1);
				textContent_1 = select_1.selectFieldText.innerHTML;
				textContent_2 = select_2.selectFieldText.innerHTML;
				selected_1 = select_1.selected;
				selected_2 = select_2.selected;
			} else {
				textContent_1 = select_1.selectFieldText.innerHTML;
				textContent_2 = select_2.selectFieldText.innerHTML;
				selected_1 = select_1.selected;
				selected_2 = select_2.selected;
			}
			currency.getInfo();
		});
	});
}
