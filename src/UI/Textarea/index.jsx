import React from "react";
const Textarea = ({ areaName }) => {
	return (
		<div className="textarea__wrapper">
			<span className="textarea__name">{areaName}</span>
			<textarea className="textarea__field"></textarea>
		</div>
	);
};
export { Textarea };
