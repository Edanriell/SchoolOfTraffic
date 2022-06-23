import { gsap } from "gsap";

const text = document.querySelectorAll(".ModalSlider-SlideTextBox");
const nextSlideTrigger = document.querySelector(".ModalSlider-NextSlide");
const prevSlideTrigger = document.querySelector(".ModalSlider-PrevSlide");
const sliderWrapper = document.querySelector(".swiper-wrapper");
const timeLine = gsap.timeline({ delay: 0.2 });

const SlideText = ({ swiper, on }) => {
	on("init", () => {
		hideAllText(text);
		showText(text, swiper.activeIndex, swiper.previousIndex);
		temporaryDisableTriggers(nextSlideTrigger, prevSlideTrigger);
	});
	on("slideChange", () => {
		hideAllText(text);
		showText(text, swiper.activeIndex, swiper.previousIndex);
		temporaryDisableTriggers(nextSlideTrigger, prevSlideTrigger);
	});

	function hideAllText() {
		text.forEach(textBox => {
			textBox.style.cssText = `
			display: none;
			opacity: 0;
			`;
		});
	}

	function showText(textBox, activeIndex, previousIndex) {
		timeLine.fromTo(
			textBox[previousIndex],
			{ opacity: 1, display: "block", y: "0" },
			{ opacity: 0, display: "none", y: "-20", ease: "power4.out", duration: 0.6 }
		);
		timeLine.fromTo(
			textBox[activeIndex],
			{ opacity: 0, display: "none", y: "-20px" },
			{ opacity: 1, display: "block", y: "0", ease: "power4.out", duration: 0.6 }
		);
	}

	function temporaryDisableTriggers(nextSlide, prevSlide) {
		toggleTriggerPointerEvents(nextSlide, prevSlide, sliderWrapper, "none");
		setTimeout(() => {
			toggleTriggerPointerEvents(nextSlide, prevSlide, sliderWrapper, "auto");
		}, 600);
	}

	function toggleTriggerPointerEvents(nextSlide, prevSlide, wrapper, propertyValue) {
		nextSlide.style.cssText = `
			pointer-events: ${propertyValue}
		`;
		prevSlide.style.cssText = `
			pointer-events: ${propertyValue}
		`;
		wrapper.style.cssText = `
			pointer-events: ${propertyValue}
		`;
	}
};

export default SlideText;
