import React from "react";

const skillData = [
	{ skillName: "HTML", skillPercent: "90%" },
	{ skillName: "CSS", skillPercent: "85%" },
	{ skillName: "Figma", skillPercent: "85%" },
	{ skillName: "JS", skillPercent: "65%" },
	{ skillName: "React", skillPercent: "35%" },
	{ skillName: "TS", skillPercent: "25%" },
	{ skillName: "Redux", skillPercent: "20%" },
];

const Hystogramm = () => {
	return (
		<div>
			<table className="table">
				<tr className="table__legend">
					{skillData.map((skill, index) => (
						<td key={index} className="table__cell">
							<div
								style={{ maxHeight: skill.skillPercent }}
								className="table__cell-progress"
							>
								{skill.skillPercent}
							</div>
						</td>
					))}
				</tr>
				<tr className="table__technologies">
					{skillData.map((skill, index) => (
						<th key={index} className="table__technology">
							{skill.skillName}
						</th>
					))}
				</tr>
			</table>
		</div>
	);
};
export {Hystogramm}