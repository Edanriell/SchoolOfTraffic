import "../sass/style.scss";

import "swiper/css";
import Swiper, {
	Navigation,
	Pagination,
	Autoplay,
	Keyboard,
	EffectCreative,
	EffectCards
} from "swiper";

import SlideText from "./components/slider/helpers";
import { Modal } from "./components/modal/modal";
import { Forms } from "./components/forms/forms";
import { FormValidation } from "./components/formValidation/formValidation";
import { Countdown } from "./components/countdown/countdown";
import { Scroll } from "./components/scroll/scroll";

Swiper.use([Navigation, Pagination, Autoplay, Keyboard, EffectCreative, EffectCards]);

window.addEventListener("DOMContentLoaded", () => {
	const modal = new Modal({
		trigger: "#ButtonModal",
		modal: ".Modal",
		underlay: ".ModalUnderlay",
		closeButton: ".Modal-CloseButton"
	});

	const modalSlider = new Swiper(".ModalSlider-SliderContent", {
		modules: [SlideText],
		direction: "vertical",
		effect: "cards",
		autoplay: {
			delay: 6000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: ".ModalSlider-NextSlide",
			prevEl: ".ModalSlider-PrevSlide"
		},
		pagination: {
			el: ".ModalSlider-Pagination",
			clickable: false,
			bulletClass: "ModalSlider-PaginationBullet",
			bulletActiveClass: "ModalSlider-PaginationBulletActive",
			renderBullet: (index, className) => {
				return `<button class="${className}"><span class="VisuallyHidden">${
					index + 1
				} Слайд</span></button>`;
			}
		},
		cardsEffect: {
			slideShadows: false,
			rotate: false
		},
		grabCursor: true
	});

	const modalForm = new Forms({
		formSelector: ".ModalForm",
		submitButton: ".ModalForm-SubmitButton",
		databaseName: "orders"
	});

	const modalFormValidation = new FormValidation({
		form: ".ModalForm",
		inputs: [
			{
				uniqueName: "name",
				selector: ".ModalForm-NameInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/^([а-яё]+|[a-z]+)$/i,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: {
					messageText: "Допускаются только буквы",
					messageStyle: `
						color: red;
						position: absolute;
						font-size: 1.1rem;
						bottom: 0.2rem;
						right: 0;
						z-index: 4;
						font-family: var(--light-font);
					`
				}
			},
			{
				uniqueName: "address",
				selector: ".ModalForm-AddressInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/^[a-zа-яё1-9\s]+$/iu,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: {
					messageText: "Допускаются только буквы и цифры",
					messageStyle: `
						color: red;
						position: absolute;
						font-size: 1.1rem;
						bottom: 0.2rem;
						right: 0;
						z-index: 4;
						font-family: var(--light-font);
					`
				}
			},
			{
				uniqueName: "email",
				selector: ".ModalForm-EmailInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: {
					messageText: "Неверный формат электронной почты",
					messageStyle: `
						color: red;
						position: absolute;
						font-size: 1.1rem;
						bottom: 0.2rem;
						right: 0;
						z-index: 4;
						font-family: var(--light-font);
					`
				}
			},
			{
				uniqueName: "phone",
				selector: ".ModalForm-PhoneInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/([^\w\d])+/g,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: {
					messageText: "Допускаются только цифры и знак +",
					messageStyle: `
						color: red;
						position: absolute;
						font-size: 1.1rem;
						bottom: 0.2rem;
						right: 0;
						z-index: 4;
						font-family: var(--light-font);
					`
				}
			}
		],
		initialInputStyle: `
			border: 2px solid #f0f0f0;
		`,
		submitButton: ".ModalForm-SubmitButton"
	});

	const reviewsSlider = new Swiper(".ReviewsSlider-Content", {
		autoplay: {
			delay: 6000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: ".ReviewsSlider-NextReview",
			prevEl: ".ReviewsSlider-PreviousReview"
		},
		grabCursor: true,
		spaceBetween: 100
	});

	const form = new Forms({
		formSelector: ".Form",
		submitButton: ".Form-Button",
		databaseName: "orders"
	});

	const formValidation = new FormValidation({
		form: ".Form",
		inputs: [
			{
				uniqueName: "name",
				selector: ".Form-NameInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/^([а-яё]+|[a-z]+)$/i,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: {
					messageText: "Допускаются только буквы",
					messageStyle: `
						color: red;
						position: absolute;
						font-size: 1.1rem;
						top: -2rem;
						right: 0;
						z-index: 4;
						font-family: var(--light-font);
					`
				}
			},
			{
				uniqueName: "email",
				selector: ".Form-EmailInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: {
					messageText: "Неверный формат электронной почты",
					messageStyle: `
						color: red;
						position: absolute;
						font-size: 1.1rem;
						top: -2rem;
						right: 0;
						z-index: 4;
						font-family: var(--light-font);
					`
				}
			}
		],
		initialInputStyle: `
			border: none;
		`,
		submitButton: ".Form-Button"
	});

	const countdown = new Countdown({
		countdownEndDate: {
			year: 2022,
			month: 3,
			day: 16,
			hours: 16,
			minutes: 24,
			seconds: 0
		},
		daysField: ".Timer-Days",
		hoursField: ".Timer-Hours",
		minutesField: ".Timer-Minutes",
		secondsField: ".Timer-Seconds",
		submitFormButton: ".Form-Button"
	});

	const scroll = new Scroll({
		triggerButton: ".Scroll",
		targetHeight: 1000
	});

	modal.init();
	modalSlider.init();
	modalForm.init();
	modalFormValidation.init();
	reviewsSlider.init();
	form.init();
	formValidation.init();
	countdown.init();
	scroll.init();
});
