const options = {
	root: null, // use the document's viewport as the container
	rootMargin: '30px', // % or px - offsets added to each side of the intersection 
	threshold: 0.4 // percentage of the target element which is visible
}

let callback = (entries) => { 
	entries.forEach(entry => {
		
		// If entry (box) is visible - according with the params set in `options`
		// then adds `isVisible` class to box
		// otherwise removes `isVisible` class
		if(entry.isIntersecting) {
			entry.target.classList.add('isVisible');
		} else {
			entry.target.classList.remove('isVisible');		
		}

	});
}

// Create the intersection observer instance by calling its constructor and passing it a
// callback function to be run whenever a threshold is crossed in one direction or the other:
let observer = new IntersectionObserver(callback, options);

// Get all the `.box` from DOM and attach the observer to these
document.querySelectorAll('.box')
	.forEach(item => { observer.observe(item) });
