document.addEventListener("DOMContentLoaded", function(){
    mainSlider();
    consultantSlider();
    partnersSlider();
    newsSlider();

    const scrollOptions = {
		rootMargin: "100px",
		threshold: 0.9,
	};

    const scrollCallback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.boundingClientRect.y < 0) {
				if (document.querySelector(".head-fixed")) {
					// document.querySelector(".head").classList.add("fixed");
                    document.querySelector(".head-fixed").classList.add("show");
				}
			} else {
				if (document.querySelector(".head-fixed")) {
					document.querySelector(".head-fixed").classList.remove("show");
                    // document.querySelector(".head").classList.remove("fixed");
				}
			}
		});
	};
    const observerTarget = document.querySelectorAll(".main section");
    console.log(observerTarget);
	const scrollObserver = new IntersectionObserver(scrollCallback, scrollOptions);
	scrollObserver.observe(observerTarget[1]);
	let points;
    

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
});