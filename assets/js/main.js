/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/*Effect for Name H1*/
function nameEffect() {

	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let interval = null;

	const h1 = document.querySelector("h1");
	const originalText = h1.innerText;
	h1.dataset.value = originalText;

	let iteration = 0;

	interval = setInterval(() => {
		h1.innerText = h1.innerText
			.split("")
			.map((letter, index) => {
				if (index < iteration) {
					return h1.dataset.value[index];
				}
				return letters[Math.floor(Math.random() * 26)];
			})
			.join("");

		if (iteration >= h1.dataset.value.length) {
			clearInterval(interval);
		}

		iteration += 1 / 3;
	}, 40);


}


/**Effect for sidebar */
document.addEventListener("DOMContentLoaded", () => {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let interval = null;

	const h1 = document.querySelector(".side");
	const originalText = h1.innerText;
	h1.dataset.value = originalText;

	let iteration = 0;

	h1.addEventListener("mouseover", () => {
		clearInterval(interval);
	});

	h1.addEventListener("mouseover", () => {
		iteration = 0;
		interval = setInterval(() => {
			h1.innerText = h1.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return h1.dataset.value[index];
					}
					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");

			if (iteration >= h1.dataset.value.length) {
				clearInterval(interval);
			}

			iteration += 1 / 3;
		}, 30);
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let interval = null;

	const h1 = document.querySelector(".side1");
	const originalText = h1.innerText;
	h1.dataset.value = originalText;

	let iteration = 0;

	h1.addEventListener("mouseover", () => {
		clearInterval(interval);
	});

	h1.addEventListener("mouseover", () => {
		iteration = 0;
		interval = setInterval(() => {
			h1.innerText = h1.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return h1.dataset.value[index];
					}
					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");

			if (iteration >= h1.dataset.value.length) {
				clearInterval(interval);
			}

			iteration += 1 / 3;
		}, 30);
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let interval = null;

	const h1 = document.querySelector(".side2");
	const originalText = h1.innerText;
	h1.dataset.value = originalText;

	let iteration = 0;

	h1.addEventListener("mouseover", () => {
		clearInterval(interval);
	});

	h1.addEventListener("mouseover", () => {
		iteration = 0;
		interval = setInterval(() => {
			h1.innerText = h1.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return h1.dataset.value[index];
					}
					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");

			if (iteration >= h1.dataset.value.length) {
				clearInterval(interval);
			}

			iteration += 1 / 3;
		}, 30);
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let interval = null;

	const h1 = document.querySelector(".side3");
	const originalText = h1.innerText;
	h1.dataset.value = originalText;

	let iteration = 0;

	h1.addEventListener("mouseover", () => {
		clearInterval(interval);
	});

	h1.addEventListener("mouseover", () => {
		iteration = 0;
		interval = setInterval(() => {
			h1.innerText = h1.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return h1.dataset.value[index];
					}
					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");

			if (iteration >= h1.dataset.value.length) {
				clearInterval(interval);
			}

			iteration += 1 / 3;
		}, 30);
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let interval = null;

	const h1 = document.querySelector(".side4");
	const originalText = h1.innerText;
	h1.dataset.value = originalText;

	let iteration = 0;

	h1.addEventListener("mouseover", () => {
		clearInterval(interval);
	});

	h1.addEventListener("mouseover", () => {
		iteration = 0;
		interval = setInterval(() => {
			h1.innerText = h1.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return h1.dataset.value[index];
					}
					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");

			if (iteration >= h1.dataset.value.length) {
				clearInterval(interval);
			}

			iteration += 1 / 3;
		}, 30);
	});
});


document.addEventListener("DOMContentLoaded", () => {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let interval = null;

	const h1 = document.querySelector(".side5");
	const originalText = h1.innerText;
	h1.dataset.value = originalText;

	let iteration = 0;

	h1.addEventListener("mouseover", () => {
		clearInterval(interval);
	});

	h1.addEventListener("mouseover", () => {
		iteration = 0;
		interval = setInterval(() => {
			h1.innerText = h1.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return h1.dataset.value[index];
					}
					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");

			if (iteration >= h1.dataset.value.length) {
				clearInterval(interval);
			}

			iteration += 1 / 3;
		}, 30);
	});
});



/**Effect for description */

class TextScramble {
	constructor(el) {
		this.el = el;
		this.chars = '!<>-_\\/[]{}—=+*^?#________&@#(|';
		this.update = this.update.bind(this);
	}
	setText(newText) {
		const oldText = this.el.innerText;
		const length = Math.max(oldText.length, newText.length);
		const promise = new Promise(resolve => this.resolve = resolve);
		this.queue = [];
		for (let i = 0; i < length; i++) {
			const from = oldText[i] || '';
			const to = newText[i] || '';
			const start = Math.floor(Math.random() * 40);
			const end = start + Math.floor(Math.random() * 40);
			this.queue.push({ from, to, start, end });
		}
		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.update();
		return promise;
	}
	update() {
		let output = '';
		let complete = 0;
		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end, char } = this.queue[i];
			if (this.frame >= end) {
				complete++;
				output += to;
			} else if (this.frame >= start) {
				if (!char || Math.random() < 0.28) {
					char = this.randomChar();
					this.queue[i].char = char;
				}
				output += `<span class="dud">${char}</span>`;
			} else {
				output += from;
			}
		}
		this.el.innerHTML = output;
		if (complete === this.queue.length) {
			this.resolve();
		} else {
			this.frameRequest = requestAnimationFrame(this.update);
			this.frame++;
		}
	}
	randomChar() {
		return this.chars[Math.floor(Math.random() * this.chars.length)];
	}
}

function displayDescription() {
	const phrases = [
		'I am Mechanical Engineer',
		'Poised in Robotics and Computer Vision'
	];


	const el = document.querySelector('.text');
	const fx = new TextScramble(el);
	let counter = 0;

	const next = () => {
		fx.setText(phrases[counter]).then(() => {
			setTimeout(next, 2000);
		});

		// Change font family of text
		el.style.fontFamily = 'Spacer';
		el.style.color = 'cyan';

		counter = (counter + 1) % phrases.length;
	};

	next();

}
/**say hi first */
let hasRun = false;
const hi = [
	'Hi,',
	'I am'
];

if (!hasRun) {
	const hi = [
		'Hi,',
		'I am'
	];

	let counter = 0;
	const el = document.querySelector('.sayhi');
	const fx = new TextScramble(el);

	const next = () => {
		fx.setText(hi[counter]).then(() => {
			if (counter < hi.length) {
				setTimeout(next, 1);
			}
		});
		el.style.fontFamily = 'Spacer';
		el.style.color = 'cyan';
		counter++;
	};

	next();

	hasRun = true;
}


function displayName() {
	const ele = document.querySelector('h1');
	ele.style.display = 'block';
	nameEffect();
}
function displayButton() {
	const ele = document.querySelector('.glowing-btn');
	ele.style.display = 'block';
}
setTimeout(displayName,1500);
setTimeout(displayDescription, 2500);
setTimeout(displayButton, 3500);
(function ($) {

	var $window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Hack: Enable IE flexbox workarounds.
	if (browser.name == 'ie')
		$body.addClass('is-ie');

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Forms.

	// Hack: Activate non-input submits.
	$('form').on('click', '.submit', function (event) {

		// Stop propagation, default.
		event.stopPropagation();
		event.preventDefault();

		// Submit form.
		$(this).parents('form').submit();

	});

	// Sidebar.
	if ($sidebar.length > 0) {

		var $sidebar_a = $sidebar.find('a');

		$sidebar_a
			.addClass('scrolly')
			.on('click', function () {

				var $this = $(this);

				// External link? Bail.
				if ($this.attr('href').charAt(0) != '#')
					return;

				// Deactivate all links.
				$sidebar_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
				$this
					.addClass('active')
					.addClass('active-locked');

			})
			.each(function () {

				var $this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
				if ($section.length < 1)
					return;

				// Scrollex.
				$section.scrollex({
					mode: 'middle',
					top: '-20vh',
					bottom: '-20vh',
					initialize: function () {

						// Deactivate section.
						$section.addClass('inactive');

					},
					enter: function () {

						// Activate section.
						$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
						if ($sidebar_a.filter('.active-locked').length == 0) {

							$sidebar_a.removeClass('active');
							$this.addClass('active');

						}

						// Otherwise, if this section's link is the one that's locked, unlock it.
						else if ($this.hasClass('active-locked'))
							$this.removeClass('active-locked');

					}
				});

			});

	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function () {

			// If <=large, >small, and sidebar is present, use its height as the offset.
			if (breakpoints.active('<=large')
				&& !breakpoints.active('<=small')
				&& $sidebar.length > 0)
				return $sidebar.height();

			return 0;

		}
	});

	// Spotlights.
	$('.spotlights > section')
		.scrollex({
			mode: 'middle',
			top: '-10vh',
			bottom: '-10vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		})
		.each(function () {

			var $this = $(this),
				$image = $this.find('.image'),
				$img = $image.find('img'),
				x;

			// Assign image.
			$image.css('background-image', 'url(' + $img.attr('src') + ')');

			// Set background position.
			if (x = $img.data('position'))
				$image.css('background-position', x);

			// Hide <img>.
			$img.hide();

		});

	// Features.
	$('.features')
		.scrollex({
			mode: 'middle',
			top: '-20vh',
			bottom: '-20vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		});

})(jQuery);