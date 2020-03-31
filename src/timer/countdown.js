import React from "react";
import Button from "@material-ui/core/Button";

const Countdown = () => {
	const [seconds, setSeconds] = React.useState(0);
	const [counter, setCounter] = React.useState(null);

	const startCountdown = () => {
        if (counter == null){
            let interval = setInterval(countUp, 1000);
            setCounter(interval);
        } else {
            clearInterval(counter);
            setCounter(null);
        };
    };
    
    const resetCountdown = () => {
        setSeconds(0);
    };

	const secondsToTime = secs => {
		let hours = "00" +  Math.floor(secs / (60 * 60));

		let divisor_for_minutes = secs % (60 * 60);
		let minutes = "00" +  Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = "00" +  Math.ceil(divisor_for_seconds);

		let obj = {
			h: hours.slice(-2),
			m: minutes.slice(-2),
			s: seconds.slice(-2)
        };
        
		return obj.h + ":" + obj.m + ":" + obj.s
	};
	const countUp = () => {
		setSeconds(seconds => seconds + 1);
	};

	return (
		<>
			<Button onClick={startCountdown}>{secondsToTime(seconds)}</Button>
			<Button onClick={resetCountdown}>Reset</Button>
		</>
	);
};

export default Countdown;
