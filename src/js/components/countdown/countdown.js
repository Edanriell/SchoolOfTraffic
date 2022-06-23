class Countdown {
	constructor({
		countdownEndDate,
		daysField,
		hoursField,
		minutesField,
		secondsField,
		submitFormButton
	}) {
		this.currentDate = Math.floor(Date.now() / 1000);
		this.endDate = Math.floor(
			new Date(
				countdownEndDate.year,
				countdownEndDate.month,
				countdownEndDate.day,
				countdownEndDate.hours,
				countdownEndDate.minutes,
				countdownEndDate.seconds
			) / 1000
		);
		this.days = document.querySelector(daysField);
		this.hours = document.querySelector(hoursField);
		this.minutes = document.querySelector(minutesField);
		this.seconds = document.querySelector(secondsField);
		this.submitButton = document.querySelector(submitFormButton);
	}

	init() {
		this.#updateDate(this.currentDate, this.endDate);
	}

	#updateDate(currentDate, endDate) {
		let timeLeft = endDate - currentDate;
		const timer = setInterval(() => {
			timeLeft -= 1;
			if (timeLeft <= 0) {
				this.#disableButton(this.submitButton);
				clearInterval(timer);
			}
			this.#updateCountdown(this.days, this.hours, this.minutes, this.seconds, timeLeft);
		}, 1000);
	}

	#updateCountdown(days, hours, minutes, seconds, time) {
		days.innerText = this.#addZero(Math.floor(time / 60 / 60 / 24) % 24);
		hours.innerText = this.#addZero(Math.floor(time / 60 / 60) % 24);
		minutes.innerText = this.#addZero(Math.floor(time / 60) % 60);
		seconds.innerText = this.#addZero(time % 60, seconds);
	}

	#disableButton(button) {
		button.style.cssText = `
            filter: grayscale(100%);
            pointer-events: none;
            user-select: none;
        `;
	}

	#addZero(number) {
		if (number < 10 && number > 0) {
			return `0${number}`;
		}
		if (number <= 0) {
			return "00";
		}
		return number;
	}
}

export { Countdown };
