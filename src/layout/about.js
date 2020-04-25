import React from "react";
import Youtube from "react-youtube";

const MyAbout = () => {
	const opts = {
		height: "300",
		width: "400"

	};
	return (
		<>
		<div>
			This app was inspired by this youtube video, I made it
			so that I could keep track of how long I can work or
			study before needing a break and also how that changes
			over time.

		</div>
		<Youtube videoId="IlU-zDU6aQ0" opts={opts} />
	</>
	);
};

export default MyAbout;
