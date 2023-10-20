document.addEventListener("DOMContentLoaded", function () {

	mainSlider();
	consultantSlider();
	partnersSlider();
	newsSlider();
	directionsSlider();
	teamSlider();
	projectsSlider();
	projectSlider();
	servicesSlider();

	loadScript(window.location.protocol + "//api-maps.yandex.ru/2.1/?lang=ru_RU", setMap);

	const scrollOptions = {
		rootMargin: "100px",
		threshold: 0.9,
	};

	const scrollCallback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.boundingClientRect.y < 0) {

				if (document.querySelector(".head-fixed")) {
					
					document.querySelector(".head-fixed").classList.add("show");
				}

			} else {
				if (document.querySelector(".head-fixed")) {

					document.querySelector(".head-fixed").classList.remove("show");
					
				}
			}
		});
	};
	const observerTarget = document.querySelectorAll(".main section");

	if (observerTarget.length > 1) {
		
		const scrollObserver = new IntersectionObserver(scrollCallback, scrollOptions);
		scrollObserver.observe(observerTarget[1]);
		let points;
	}

	$(document).on("click", ".head__nav_burger-btn", function () {

		$(".mobile").addClass("show");
		$("body").addClass("no-scroll");
	});

	$(document).on("click", ".mobile__close_btn", function () {

		$(".mobile").removeClass("show");
		$("body").removeClass("no-scroll");
	});

	$(document).on("click", ".mobile__nav_center button", function () {

		$(".mobile__submenu").addClass("show");
	});

	$(document).on("click", ".submenu__close_btn", function () {

		$(".mobile__submenu").removeClass("show");
	});

	$(document).on("mouseover", ".present__images_item", function () {

		$(this).removeClass("mouseout");
		$(this).addClass("mouseover");
	});

	$(document).on("mouseout", ".present__images_item", function () {

		$(this).removeClass("mouseover");
		$(this).addClass("mouseout");
	});

	if ($(".calc__form")) {
		const form = $(".calc__form");
		const formResult = $(form).find(".calc__table_result .sum");

		let formResultValue = 0;

		$(".calc__table_row").each((ind, row) => {

			const price = parseInt($(row).find(".price").text());
			const numb = $(row).find(".numb");
			const result = $(row).find(".result");

			if (price) {

				let numbValue = +$(numb).val();
			// $(numb).val(numbValue);
				$(result).text(numbValue * price);
				formResultValue += numbValue * price;

				console.log(price);
			}
			
		});

		

		$(formResult).text(formResultValue);
	}

	$(document).on("click", ".numb-btns span", function(e) {
		
		const form = $(".calc__form");
		const formResult = $(form).find(".calc__table_result .sum");
		let formResultValue = parseInt($(formResult).text());
		const row = $(this).closest(".calc__table_row");
		const price = parseInt($(row).find(".price").text());
		const numb = $(row).find(".numb");
		const result = $(row).find(".result");
		
		if (e.target.classList.contains("numb-plus")) {

			let numbValue = +$(numb).val() + 1;
			$(numb).val(numbValue);
			$(result).text(numbValue * price);
			$(formResult).text(formResultValue + price);

		} else if (e.target.classList.contains("numb-minus")) {

			if (+$(numb).val() > 0) {

				let numbValue = +$(numb).val() - 1;
				$(numb).val(numbValue);
				$(result).text(numbValue * price);
				$(formResult).text(formResultValue - price);
			}
		}
	});

	$(document).on("input blur", ".calc__table_row .numb", function(e) {
		
		const form = $(".calc__form");
		const formResult = $(form).find(".calc__table_result .sum");
		let formResultValue = 0;
		const row = $(this).closest(".calc__table_row");
		const price = parseInt($(row).find(".price").text());
		const numb = $(row).find(".numb");
		const result = $(row).find(".result");
		
		if (e.type === "input") {

			let numbValue = +$(this).val();

			if ($(this).val()) {

				$(result).text(numbValue * price);
			}
		} else if (e.type === "focusout" || e.type === "blur") {

			if ($(this).val()) {

				let numbValue = +$(this).val();
			
				$(result).text(numbValue * price);
			} else {

				let numbValue = 0;

				$(this).val("0");
				$(result).text(numbValue * price);
			}
		}
		
		$(".calc__table_row").each((ind, row) => {

			const price = parseInt($(row).find(".price").text());
			const numb = $(row).find(".numb");
			const result = $(row).find(".result");

			if (price) {

				let numbValue = +$(numb).val();
			
				$(result).text(numbValue * price);
				formResultValue += numbValue * price;
			}
			
		});

		$(formResult).text(formResultValue);
	});

	$(document).on("click", ".accordion__title", function(){
		const accordion = $(this).closest(".accordion__item");

		if ($(accordion).hasClass("active")) {
			$(accordion).removeClass("active");
		} else {
			$(".accordion__item").each((ind, item) => {
				$(item).removeClass("active");
			});
			
			$(accordion).addClass("active");
		}

		
	})
});

function setMap() {
	try {
		ymaps.ready(() => {
			for (let mapContainer of document.querySelectorAll(".map")) {
				let id = mapContainer.getAttribute("id"),
					data = mapContainer.dataset,
					mapCenter = JSON.parse(data.center),
					mapCoord = data.coord ? JSON.parse(data.coord) : mapCenter,
					mapZoom = data.zoom,
					mapTitle = data.title,
					map = new ymaps.Map(id, {
						center: mapCenter,
						zoom: mapZoom,
						controls: ["smallMapDefaultSet"],
					}),
					pin = new ymaps.Placemark(
						mapCoord,
						{
							hintContent: mapTitle,
						}
						// {
						// 	iconLayout: "default#image",
						// 	iconImageHref: "../img/placemark.png",
						// }
					);

				map.behaviors.disable(["scrollZoom"]);
				map.geoObjects.add(pin);
				setMapCenter();
				function setMapCenter() {
					mapContainer.offsetWidth < 992 ? map.setCenter(mapCoord) : map.setCenter(mapCenter);

					if (mapContainer.closest(".contacts")) {
						const centerCoord = map.getGlobalPixelCenter();

						// смещаем центр карты

						if (window.innerWidth > 1200) {
							centerCoord[0] -= 250;
							centerCoord[1] += 0;
						} else if (window.innerWidth > 991) {
							centerCoord[0] -= 150;
							centerCoord[1] += 0;
						} else if (window.innerWidth > 768) {
							centerCoord[0] -= 100;
							centerCoord[1] += 0;
						} else {
							centerCoord[0] -= 0;
							centerCoord[1] += 0;
						}
						map.setGlobalPixelCenter(centerCoord);
					}
				}

				window.addEventListener("resize", setMapCenter);
			}
		});
	} catch (e) {
		console.log("Yandex Map is not initiated");
	}
}
