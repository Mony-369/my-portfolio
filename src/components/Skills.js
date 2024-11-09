import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import logoHtml from "../assets/img/logo-html.png";

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
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>HTML</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>CSS</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>JavaScript</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>VueJS</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>ReatcJS</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>NodeJS</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>Figma</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>PhotoShop</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>PHP</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>Laravel</h4>
                          </div>
                        </Carousel> */}

                        <div className="skill-cards" responsive={responsive} infinite={true}>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>HTML</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>CSS</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>JavaScript</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>VueJS</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>ReatcJS</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>NodeJS</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>Figma</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>PhotoShop</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>PHP</h4>
                          </div>
                          <div className="card">
                              <img className="skill-logo" src={logoHtml} alt="Image"/>
                              <h4>Laravel</h4>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
