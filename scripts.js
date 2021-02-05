const config = {
	rootMargin: "0px 0px 0px 0px",
	threshold: [0, 0.25, 0.75, 1],
};
const images = document.querySelectorAll(".animate-me");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add("animate");
		} else {
			entry.target.classList.remove("animate");
		}
	});
}, config);

images.forEach((item) => {
	observer.observe(item);
});
