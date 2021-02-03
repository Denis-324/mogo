/*бургер*/
$(document).ready(function () {
	$(".header__byrger ").click(function (event) {
		$(".header__byrger,.navBlok ").toggleClass("active");
	});
});

$(document).ready(function () {
	$(".header__link ").click(function (event) {
		$(".header__link,.navBlok,.header__byrger ").toggleClass("active");
	});
});




/*плавная прокрутка при нажатии на меню*/
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}
/*картинка*/
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();


/*const accordions = document.querySelectorAll(".service-info");

for (item of accordions) {
	item.addEventListener("click", function () {
		this.classList.toggle(".actives");
	})
}*/

/*===================*/
$(document).ready(function () {
	$(".service-info1 ").click(function (event) {
		$(".service-info1, service-info__item1, service-info__header1").toggleClass("active");
	});
});

$(document).ready(function () {
	$(".service-info2 ").click(function (event) {
		$(".service-info2, service-info__item2, service-info__heade2r").toggleClass("active");
	});
});

$(document).ready(function () {
	$(".service-info3 ").click(function (event) {
		$(".service-info3, service-info__item3, service-info__header3").toggleClass("active");
	});
});


/*===================*/
$(document).ready(function () {
	$(".service-info1 ").click(function (event) {
		$(".service-info1, service-info__item1, service-info__header1").toggleClass("actives");
	});
});

$(document).ready(function () {
	$(".service-info2 ").click(function (event) {
		$(".service-info2, service-info__item2, service-info__heade2r").toggleClass("activess");
	});
});

$(document).ready(function () {
	$(".service-info3 ").click(function (event) {
		$(".service-info3, service-info__item3, service-info__header3").toggleClass("activesss");
	});
});