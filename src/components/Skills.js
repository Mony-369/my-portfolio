import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import logoHtml from "../assets/img/logo-html.png";
import logoCss from "../assets/img/logoCss.png";
import logoJs from "../assets/img/logoJs.png";
import logoVue from "../assets/img/logoVue.png";
import logoReact from "../assets/img/logoReact.png";
import logoNode from "../assets/img/logoNode.png";
import logoFigma from "../assets/img/logoFigma.png";
import logoPhotoshop from "../assets/img/logoPhotoshop.png";
import logoPhp from "../assets/img/logoPhp.png";
import logoLaravel from "../assets/img/logoLaravel.png";

const skills = [
    { name: "HTML", logo: logoHtml },
    { name: "CSS", logo: logoCss },
    { name: "JavaScript", logo: logoJs },
    { name: "VueJS", logo: logoVue },
    { name: "ReactJS", logo: logoReact },
    { name: "NodeJS", logo: logoNode },
    { name: "Figma", logo: logoFigma },
    { name: "Photoshop", logo: logoPhotoshop },
    { name: "PHP", logo: logoPhp },
    { name: "Laravel", logo: logoLaravel }
  ];
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className="skill-cards" responsive={responsive} infinite={true}>
                        {skills.map((skill, index) => (
                            <div key={index} className="card">
                            <img className="skill-logo" src={skill.logo} alt={`${skill.name} logo`} />
                            <h4>{skill.name}</h4>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
