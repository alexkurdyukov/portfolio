import React from "react";
import { Hystogramm } from "../../UI/Hystogramm";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import secondPhoto from "../../assets/images/mainPhoto2.jpg";
import HobbieLogo from '../../assets/images/hobbie.svg'
import BiographyLogo from '../../assets/images/biography.svg'
import EducationLogo from '../../assets/images/education.svg'
import DevLogo from '../../assets/images/devLogo.svg'
import SoftSkills from '../../assets/images/softSkills.svg'
import HardSkills from '../../assets/images/hardSkills.svg'
 

const infoData = [
  {name:'education',imageLink:EducationLogo},
  {name:'hobbies',imageLink:HobbieLogo},
  {name:'biography',imageLink:BiographyLogo},
  {name:'hard-skills',imageLink:SoftSkills},
  {name:'soft-skills',imageLink:HardSkills},
  {name:'dev',imageLink:DevLogo}
];



const About = () => {
	const windowWidth = useWindowWidth();
	return (
		<div className="about">
			<div className="about__wrapper wrapper">
				<div className="info">
					<h3 className="info__header">Information</h3>
				</div>
				<div className="info-content"></div>
				<div className="slider-container"></div>
			</div>
		</div>
	);
};

export { About };

// return (
//   <div className="about">
//     <div className="about__wrapper wrapper">
//       <div className="about__header-container">
//         <h2 className="about__header">About me</h2>
//         <div className="about__stripe"></div>
//       </div>
//       <div className="about__photo-container">
//         {windowWidth && windowWidth <= 900 && (
//           <img src={secondPhoto} className="about__photo"></img>
//         )}
//       </div>
//       <div className="about__container">
//         <div className="about__photo-container">
//           {windowWidth && windowWidth > 900 && (
//             <img src={secondPhoto} className="about__photo"></img>
//           )}
//         </div>
//         <div className="about__content">
//           <div className="about__content-element">
//             Fast-forward to today, and I’ve had the privilege of working at an
//             advertising agency, a start-up, a huge corporation, and a
//             student-led design studio. My main focus these days is building
//             accessible, inclusive products and digital experiences at
//             Upstatement for a variety of clients.
//           </div>
//           <div className="about__content-element">
//             I also recently launched a course that covers everything you need
//             to build a web app with the Spotify API using Node and React.
//           </div>
//         </div>
//       </div>
//       <Hystogramm />
//     </div>
//   </div>
// );
