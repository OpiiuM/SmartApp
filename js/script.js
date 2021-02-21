(function () {
	// links
	const links = document.querySelectorAll(".header__link")

	// burger
	const burger = document.querySelector(".burger")
	const menu = document.querySelector(".header__menu")

	// toggles 4 slider
	const tabs = document.querySelectorAll(".tab__item")
	const spans = document.querySelectorAll(".testimonials__toggle")

	
	// переход по якорям
	links.forEach(link => {
		link.addEventListener("click", function (e) {
			e.preventDefault()

			const href = this.getAttribute("href").substring(1)
			const scrollTarget = document.getElementById(href)
			const topOffset = window.innerWidth > 768 ? 130 : 91
			const elementPosition = scrollTarget.getBoundingClientRect().top
			const offSetPosition = elementPosition - topOffset

			window.scrollBy({
				top: offSetPosition,
				behavior: "smooth",
			})

			// если экран меньше 768px
			if (window.innerWidth < 768) {
				menu.classList.toggle("active")
				burger.classList.toggle("burger--active")
			}
		})
	})

	
	// burger-menu
	burger.addEventListener("click", function () {
		menu.classList.toggle("active")
		this.classList.toggle("burger--active")
	})


	// slider
	tabs.forEach((tab, index) => {
		tab.onclick = () => showSlides(index + 1, "about__item", "tab__item", "tab__icon")
	})

	spans.forEach((span, index) => {
		span.onclick = () => showSlides(index + 1, "testimonials__slide", "testimonials__toggle")
	})

	function showSlides(n, slideName, toggleName, child = false) {
		let slides = document.querySelectorAll(`.${slideName}`)
		let toggles = document.querySelectorAll(`.${toggleName}`)

		if (n > slides.length) n = 1
		if (n < 1) n = slides.length

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"
			toggles[i].className = toggles[i].className.replace(`${toggleName}--active`, "")

			if (child) {
				toggles[i].childNodes[0].className = toggles[i].childNodes[0].className.replace(`${child}--active`, "")
			}
		}

		slides[n - 1].style.display = "flex"
		toggles[n - 1].className += ` ${toggleName}--active`

		if (child) {
			toggles[n - 1].childNodes[0].className += ` ${child}--active`
		}
	}

	showSlides(1, "about__item", "tab__item", "tab__icon")
	showSlides(1, "testimonials__slide", "testimonials__toggle")
}())