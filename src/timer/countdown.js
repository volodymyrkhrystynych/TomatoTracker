import React from "react";
import Button from "@material-ui/core/Button";
import SelectInput from "@material-ui/core/Select/SelectInput";

const Countdown = () => {
	const [seconds, setSeconds] = React.useState(0);

	const startCountdown = () => {
		setInterval(countUp, 1000);
	};

	const secondsToTime = secs => {
		let hours = Math.floor(secs / (60 * 60));

		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let obj = {
			h: hours,
			m: minutes,
			s: seconds
		};
		console.log(obj);
		return minutes + ":" + seconds
	};
	const countUp = () => {
		setSeconds(seconds + 1);
	};

	//setInterval(countUp, 1000);

	return (
		<>
			<label>{secondsToTime(seconds)}</label>
			<Button onClick={startCountdown}>Start</Button>
		</>
	);
};

export default Countdown;
