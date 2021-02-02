
const options = {
	root: null, // use the document's viewport as the container
	rootMargin: '10px', // % or px - offsets added to each side of the intersection 
	threshold: 0.4 // percentage of the target element which is visible
}

/** YOU CAN LOOP THROUGH THE CALLBACK
 		WITH "FOR EACH()" AND "FOR() LOOPS":
*/ 

/**  THE FOR() LOOP WAY!
let callback = (items) => { 
var item = callback;

for (item of items) {
// If item (box) is visible - according to the params set in "options"
// then adds classes to the ".box" items
// otherwise removes classes from the ".box" items
 		if(item.isIntersecting) {
			item.target.classList.add('zoom');
 			item.target.classList.add('rotate');
		} else {
 			item.target.classList.remove('zoom');	
 			item.target.classList.remove('rotate');	
		}
 	};
 }
*/

// THE FOREACH() LOOP WAY!
let callback = (items) => { 
	items.forEach(item => {
		// If item (box) is visible - according to the params set in `options`
		// then adds classes to the ".box" items
		// otherwise removes classes from the ".box" items
		if(item.isIntersecting) {
			item.target.classList.add('zoom');
			item.target.classList.add('rotate');
		} else {
			item.target.classList.remove('zoom');	
			item.target.classList.remove('rotate');	
		}
	});
}

/** Create the intersection observer instance 
 		by calling its constructor and passing it a 
 		callback function to be run whenever a threshold 
 		is crossed in one direction or the other:
*/
let observer = new IntersectionObserver(callback, options);

/** Get all the ".box" and ".circle" items 
 		from the DOM and attach the observer to these:
*/
document.querySelectorAll('.box')
	.forEach(item => { observer.observe(item) });

	document.querySelectorAll('.circle')
	.forEach(item => { observer.observe(item) });
